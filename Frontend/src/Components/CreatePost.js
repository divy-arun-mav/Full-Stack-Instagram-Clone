import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Loader = () => <h1>Posting....</h1>;

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
        if (url && posted) {
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
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        notifyA(data.error);
                    } else {
                        notifyB("Successfully Posted");
                        navigate("/");
                    }
                })
                .catch(err => console.log(err));
        }
    }, [url, posted, navigate]);

    // posting image to cloudinary
    const postDetails = () => {
        setLoading(true);
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "insta-clone");
        data.append("cloud_name", "djy7my1mw");

        fetch("https://api.cloudinary.com/v1_1/djy7my1mw/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url);
                setLoading(false);
                setPosted(true); // Set posted to true after image upload
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
        setImage(event.target.files[0]);
    };

    return (
        <>
            <div className="createPost">
                <div className="post-header">
                    <h4 style={{ margin: "3px auto" }}>Create New Post</h4>
                    <button
                        id="post-btn"
                        onClick={() => postDetails()}
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
                        onChange={(event) => loadfile(event)}
                    />
                    {loading && (
                        <div className="loader">
                            <Loader />
                        </div>
                    )}
                </div>
                <div className="details">
                    <div className="card-header">
                        <h5>{localStorage.getItem("name")}</h5>
                    </div>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
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
                        .createPost {
                            max-width: 500px;
                            margin: 10px auto;
                            border: 1px solid rgb(173, 173, 173);
                            border-radius: 5px;
                        }
                        .main-div {
                            border-top: 1px solid rgb(173, 173, 173);
                        }
                        .post-header {
                            display: flex;
                        }
                        #post-btn {
                            border: none;
                            color: #339ce3;
                            background:none;
                            font-weight: bolder;
                            cursor: pointer;
                        }
                        .details {
                            border-top: 1px solid rgb(173, 173, 173);
                        }
                        textarea {
                            width: 90%;
                            border: none;
                            outline: none;
                        }
                        #output {
                            width: 300px;
                            border: none;
                            outline: none;
                            margin-top: 5px;
                        }
                        .loader{
                            display:${loading ? "flex" : "none"};
                            justify-content:center;
                            align-items:center;
                            position:absolute;
                            top:8%;
                            left:33%;
                            border:0px solid black;
                            border-radius:10px;
                            height:500px;
                            width:600px;
                            background-color:white;
                            box-shadow:1px 1px 10px black;
                        }
                    `}
                </style>
            </div>
        </>
    );
}
