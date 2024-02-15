import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    //Toast functions
    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg);

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passRege = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    const postData = async () => {

        if (!emailRegex.test(email)) {
            notifyA("Invalid Email");
            return;
        }
        else if (!passRege.test(password)) {
            notifyA("Password must contain atleast 8 characters, including atleast 1 number and 1 includes both lower and uppercase letters and special characters for example #,?!");
            return;
        }

        try {
            fetch("http://localhost:5000/signup", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    username: username,
                    password: password
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        notifyA(data.error);
                    } else {
                        notifyB(data.message);
                        navigate('/signin')
                    }
                    console.log(data)
            })
        } catch (error) {
            console.log(error);
        } 
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <div style={{ border: "1px solid #ccc" }}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <label htmlFor="name">
                        <b>Name</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        required=""
                        onChange={(e) => { setName(e.target.value) }}
                        value={name}
                    />
                    <label htmlFor="username">
                        <b>Username</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter UserName"
                        name="username"
                        required=""
                        onChange={(e) => { setUserName(e.target.value) }}
                        value={username}
                    />
                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        required=""
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={email}
                    />
                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        required=""
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={password}
                    />
                    <div className="clearfix">
                        <button type="submit" className="signupbtn" onClick={() => { postData() }}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            <style>
                {`
                body {
    font-family: Arial, Helvetica, sans-serif;
}

* {
    box-sizing: border-box
}

/* Full-width input fields */
input[type=text],
input[type=password] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
}

input[type=text]:focus,
input[type=password]:focus {
    background-color: #ddd;
    outline: none;
}

hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
}

/* Set a style for all buttons */
.signupbtn {
    background-color: #04AA6D;
    color: white;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
    border-radius: 0;
    text-align: center;
}

button:hover {
    opacity: 1;
}

/* Extra styles for the cancel button */
.cancelbtn {
    padding: 14px 20px;
    background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,
.signupbtn {
    float: left;
    width: 50%;
}

/* Add padding to container elements */
.container {
    padding: 16px;
}

/* Clear floats */
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {

    .cancelbtn,
    .signupbtn {
        width: 100%;
    }
}
                `}
        </style>
        </div>
    )
}

export default SignUp;