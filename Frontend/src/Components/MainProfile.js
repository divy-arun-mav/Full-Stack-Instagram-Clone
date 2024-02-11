import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import Profilephoto from "../Images/profile.jpg";

const MainProfile = () => {
    // Use state to manage the result and loading states
    const [result, setResult] = useState({});
    const [postres, setPostres] = useState([]);
    const [loading, setLoading] = useState(true);

    // Toast functions
    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg);

    const getData = async () => {
        try {
            const response = await fetch("http://localhost:5000/user", {
                method: "get",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                }
            });
            const data = await response.json();

            if (data.error) {
                notifyA(data.error);
            } else {
                setResult(data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            notifyA("Error fetching data");
        } finally {
            // Set loading to false after fetching data
            setLoading(false);
        }
    }


    const getMyPosts = async () => {
        try {
            const mypostsResponse = await fetch("http://localhost:5000/myposts", {
                method: "get",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                }
            });
            const post = await mypostsResponse.json();

            if (post.error) {
                notifyA(post.error);
            } else {
                setPostres(post);
            }

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getData();
        getMyPosts();
    }, []);


    return (
        <>
            <Navbar />
            <div className='profile'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                        <div className='prof-cont'>
                            <div className='insider'>
                                <img className='profile-img' src={Profilephoto} />
                                <div className='details'>
                                    <h2>Name: {result.user.name}</h2><br />
                                    <h2>Username: {result.user.username}</h2><br />
                                    <h2>Email: {result.user.email}</h2><br />
                                </div>
                            </div>
                            <h1>Your Posts</h1>
                            <div className='photo-container'>
                                {postres.map((post) => (
                                    <img className='photo' key={post._id} src={post.photo} />
                                ))}
                            </div>
                        </div>
                )}
            </div>
            <style>
                {`
                body{
                    margin:0;
                    padding:0;
                    width:100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction:column;
                    text-align:center;
                }
                .profile-img{
                    border-radius:50%;
                    width:30%;
                    margin: 0 100px;
                    height:auto;
                }

                .profile{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width:100%;
                    text-align:center;
                }
                .insider{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .details{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction:column;
                }
                .prof-cont{
                    ddisplay: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction:column;
                    text-align:center;
                    width:50%;
                }
                .photo-container{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap:wrap;
                }
                .photo{
                    width: 30%;
    aspect-ratio: 3/4;
    object-fit: contain;
    mix-blend-mode: multiply !important;
                }
                `}
            </style>
        </>
    );

}

export default MainProfile;
