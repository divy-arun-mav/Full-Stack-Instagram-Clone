import React, { useEffect, useState } from 'react';
import Profile from "./Profile";
import Aarav from "../Images/aarav.jpg";
import Comment from "../Images/comment_icon.png";
import Share from "../Images/shareicon.png";
import Save from "../Images/saveicon.png";
import Emoji from "../Images/emoji-icon.jpg";
import Bluetick from "../Images/bluetick.png";
import Sideburger from "../Images/Sideburger.png";
import Heart from "../Images/heart.png";
import Unlike from "../Images/unlike.png";
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Posts = ({ text, maxLength }) => {
    const navigate = useNavigate();

    const [result, setResult] = useState([]);
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(true);

    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg);

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) {
            navigate("./signup");
        }


        fetch("http://localhost:5000/allposts", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
        })
            .then((res) => res.json())
            .then((result) => { 
                setResult(Array.isArray(result) ? result : []);
                setLoading(false); 
            })
            .catch((err) => {
                console.log(err);
                setLoading(false); 
            });
    }, [navigate, result]);

    const makeComment = (text, id) => {
        fetch("http://localhost:5000/comment", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
                text: text,
                postId: id,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                const newData = result.map((posts) => {
                    if (posts._id === result._id) {
                        return result;
                    } else {
                        return posts;
                    }
                });
                setResult(newData);
                setComment(""); 
                notifyB("Comment posted");
                console.log(result);
            })
            .catch((err) => console.log(err));
    };

    const likePost = (id) => {
        fetch("http://localhost:5000/like", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
                postId: id,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            })
            .catch((err) => console.log(err));
    };

    const unlikePost = (id) => {
        fetch("http://localhost:5000/unlike", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
                postId: id,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            })
            .catch((err) => console.log(err));
    };

    let time_upload = '2h';

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <main>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {result.map((post) => (
                        <div key={post._id}>
                            <div className='Posts'>
                                <heading>
                                    <img src={Aarav} />
                                    <div className='text'>
                                        <div className='firsttext'>
                                            <Link className='acc_name' to="" style={{ fontWeight: 640, fontSize: 13 + 'px' }}>
                                                {post.postedBy && post.postedBy.username}
                                                <span className='profile'><Profile /></span>
                                            </Link>
                                            <img id='verified' className='bluetick' src={Bluetick} />
                                            <li>{time_upload}</li>
                                        </div>
                                        <div className='secondtext'>
                                            <p value='audio'>maxxmani_7</p>
                                            <li id='audio_type'>Orginal Audio</li>
                                        </div>
                                        <div className='sideburger'>
                                            <img src={Sideburger} />
                                        </div>
                                    </div>
                                </heading>
                                <div className='post'>
                                    <img src={post.photo} />
                                </div>
                                <ul className="extraicons">

                                    <li className='extra iconone'>
                                        {
                                            post.likes && post.likes.some(like => {
                                                const likedByArray = Array.isArray(like.likedBy) ? like.likedBy : [like.likedBy];
                                                const likedit = likedByArray && likedByArray.length > 0 && likedByArray.some(user => user && user._id === JSON.parse(localStorage.getItem("user"))._id);
                                                return likedit;
                                            })
                                                ? (
                                                    <span onClick={() => { unlikePost(post._id) }}><img src={Unlike} className="unlike" style={{ fontSize: "30px" }} /></span>
                                                ) : (
                                                    <span onClick={() => { likePost(post._id) }}><img src={Heart} className="like" style={{ fontSize: "30px" }} /></span>
                                                )
                                        }
                                    </li>

                                    <li className='extra icontwo'><img src={Comment} /></li>
                                    <li className='extra iconthree'><img src={Share} /></li>
                                    <li className='extra iconfour'><img src={Save} /></li>
                                </ul>

                                <p className='likedby'><b style={{ fontWeight: 640 }}>
                                    {post.likes && post.likes.length > 0 ? (
                                        <span>Liked by {post.likes.map((like, index) => (
                                            <span key={index}>{like.likedBy && like.likedBy.username}{index !== post.likes.length - 1 ? ', ' : ''}</span>
                                        ))} and {post.likes.length - 1 !== 0 ? 'others' : 'other'}</span>
                                    ) : (
                                        <span>no likes</span>
                                    )}
                                </b></p>

                                <p className='description'>{post.body}</p>
                                <p id='show' onClick={toggleExpanded}>
                                    {isExpanded ? "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." : 'more'}
                                </p>
                                <input className='commenthere' type='text' placeholder='Add a comment...' />
                                <img className='emoji' src={Emoji} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <style>
                {`
        main {
    position: relative;
    right: 0px;
    margin-top: 40px;
    width: 60%;
    text-align: center;
    padding: none;
}
heading {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 30px 0 30px;
    cursor: pointer;
}

heading img {
    width: 34px;
    border-radius: 50%;
    position: relative;
    right: 20px;
}

.text {
    width: 100vw;
    display: block;
    font-size: 12px;
}

.firsttext,
.secondtext {
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 20px;
}

.material-symbols-outlined {
    font-size:30px;
    cursor:pointer;
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

.firsttext li,
.secondtext li {
    padding: 0;
    text-align: center;
    position: relative;
    left: 10px;
}
.firsttext p,
.secondtext p {
    width: fit-content;
    text-align: left;
}

.firsttext li {
    color: gray;
    font-size: 13px;
    width: fit-content;
}

.Posts {
    width: 60%;
    margin: 0 20% 0 20%;
}

.Posts li {
    list-style-type: disc;
}

.post {
    width: 100%;
    height: 100%;
}

.post img {
    margin-top: 10px;
    width: 400px;
    height: 100%;
}

.acc_name:hover {
    color: rgb(100, 100, 100);
}

.acc_name:hover .profile{
    display: block;
}

.extraicons {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.extraicons li {
    list-style-type: none;
}

.extra {
    padding: 10px;
}

.extra img {
    width: 25px;
}

.iconfour {
    position: relative;
    left: 234px;
}

.profile{
    display:none;
}

.bluetick {
    width: 15px;
    left: 3px;
    top: 2px;
    mix-blend-mode: color-burn;
}

.likedby {
    width: fit-content;
    font-size: 14px;
    padding: none;
    word-wrap: normal;
}

.commenthere {
    background: none !important;
    width: 145% !important;
    font-size: 15px;
    font-weight: lighter;
    margin: 0px 0px 1px 0px;
    padding: 0px 3px 20px 0px;
    border-bottom: 1px solid rgb(196, 196, 196) !important;
    outline: none;
}

.emoji {
    width: 18px;
    position: relative;
    left: 248px;
    bottom: 55px;
}

.sideburger {
    max-width: fit-content;
}

.sideburger img {
    width: 13px;
    position: absolute;
    top: 13px;
    left: 463px;
}

.description {
    white-space: nowrap;
    width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 350;
    text-align: left;
}

.hashtags {
    font-weight: 100;
    color: rgb(0, 119, 255);
}

#show {
    cursor: pointer;
    padding: none;
    /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
    font-weight: 350;
    /* font-size: 15px; */
    /* color: rgb(176, 176, 176); */
    text-align: left;
    width: 145%;
}
        `}
            </style>
        </main>
    );
}

export default Posts;
