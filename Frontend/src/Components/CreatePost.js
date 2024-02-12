import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const loader = () =>{
    return(<h1>Posting....</h1>)
}

export default function Createpost() {
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [posted, setPosted] = useState(false);
    const navigate = useNavigate();

    // Toast functions
    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg);

    useEffect(() => {
        // saving post to mongodb
        if (url) {
            fetch("http://localhost:5000/createpost", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    body,
                    pic: url
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        notifyA(data.error);
                    } else {
                        setPosted(true);
                        notifyB("Successfully Posted");
                        navigate("/");
                    }
                })
                .catch(err => console.log(err))
        }
    }, [url, navigate]);

    // posting image to cloudinary
    const postDetails = () => {
        setLoading(true);
        <loader/>
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "insta-clone");
        data.append("cloud_name", "djy7my1mw");

        fetch("https://api.cloudinary.com/v1_1/djy7my1mw/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json())
            .then(data => {
                setUrl(data.url);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    };

    const loadfile = (event) => {
        var output = document.getElementById("output");
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src); // free memory
        };
    };

    return (
        <>
            <div className="createPost">
                <div className="post-header">
                    <h4 style={{ margin: "3px auto" }}>Create New Post</h4>
                    <button
                        id="post-btn"
                        onClick={() => {
                            postDetails();
                        }}
                    >
                        Share
                    </button>
                </div>
                <div className="main-div">
                    <img
                        id="output"
                        src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
                        alt="Preview"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                            loadfile(event);
                            setImage(event.target.files[0]);
                        }}
                    />
                    {loading && <div className="loader"></div>}
                </div>
                {/* details */}
                <div className="details">
                    <div className="card-header">
                        <div className="card-pic">
                            <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            />
                        </div>
                        <h5>{localStorage.getItem("name")}</h5>
                    </div>
                    <textarea
                        value={body}
                        onChange={(e) => {
                            setBody(e.target.value);
                        }}
                        type="text"
                        placeholder="Write a caption...."
                    ></textarea>
                </div>
                <style>
                    {`
                .card-pic img{
                    width: 50px;
                    height: 50px;
                    border-radius:50%;
                }
                .createPost{
    max-width: 500px;
    margin: 10px auto;
    border: 1px solid rgb(173, 173, 173);
    border-radius: 5px;
}

.main-div{
    border-top: 1px solid rgb(173, 173, 173) ;
}
.post-header{
    display: flex;
}

#post-btn{
    border: none;
    color: #339ce3;
    background:none;
    font-weight: bolder;
    cursor: pointer;
}

.details{
    border-top: 1px solid rgb(173, 173, 173) ;
}

textarea{
    width: 90%;
    border: none;
    outline: none;
}

#output{
    width: 300px;
    border: none;
    outline: none;
    margin-top: 5px;
}
                `}
                </style>
            </div>
        </>
    );
}
