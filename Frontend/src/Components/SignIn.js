import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import googlePlayImage from "../Images/Loginpageimgs/Getitgoogleplayicon.png";
import microsoftImage from "../Images/Loginpageimgs/Getitonmicrosofticon.png";
import instaLogo from "../Images/Loginpageimgs/instalockicon1.png";

const Signin = () => {

  const navigate = useNavigate();

  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const postData = async () => {

    try {
      fetch("http://localhost:8000/signin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      }).then(res => res.json())
        .then(data => {
          if (data.error) {
            notifyA(data.error);
          } else {
            notifyB(data.message);
            navigate('/')
          }
          console.log(data)
        })
    } catch (error) {
      console.log(error);
    }
  }

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      {/* <div style={{ border: "1px solid #ccc" }}>
        <div className="container">
          <h1>Sign In</h1>
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
      </div> */}

      <div id="container">
        <section>
          <div className="main-top">
            <div className="logo">
              <img src={instaLogo} />
            </div>
            <div>
              <input
                type="text"
                placeholder="username"
                className="username"
                name='username'
                required=""
                onChange={(e) => { setUserName(e.target.value) }}
                value={username}
              />
              <div>
                <input
                  type="password"
                  placeholder="password"
                  className="password"
                  name="password"
                  required=""
                  onChange={(e) => { setPassword(e.target.value) }}
                  value={password}
                />
              </div>
              <input type="button" onClick={()=>{postData()}} value="Log in" className="login-btn" />
            </div>

            <span className="or"> OR </span>

            <div className="main-bottom">
              <a href="" className="logInFB"><i className="fa-brands fa-facebook-f" /> Log in with Facebook </a><br />
              <a href="" className="forget"> Forgot password </a>
            </div>

          </div>
          <div className="bottom">
            <div className="signUp">
              Don't have an account? <a href="#">Sign up</a>
            </div>
          </div>
          <div className="app-section">
            <span> Get the app </span>
            <div className="images">
              <img src={googlePlayImage} alt="googlePlay-Image" />
              <img src={microsoftImage} alt="microsoft-Image" />
            </div>
          </div>
        </section>

        {/* <!-- Footer Section Starts from Here --> */}
        <footer>
          <a href="">Meta</a>
          <a href="">About</a>
          <a href="">Blog</a>
          <a href="">Jobs</a>
          <a href="">Help</a>
          <a href="">API</a>
          <a href="">Privacy</a>
          <a href="">Terms</a>
          <a href="">Top Accounts</a>
          <a href="">Locations</a>
          <a href="">Instagram Lite</a>
          <a href="">Instagram Contact</a>
          <a href="">Uploading & Non-Users</a>
          <div className="bottom-footer">
            <select name="" id="">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Urdu">Urdu</option>
              <option value="Francais">Francais</option>
            </select>
            <span> &copy; 2023 Instagram from Meta</span>
          </div>
        </footer>
      </div>

      <style>
        {`
        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            background-color: #eee;
        }

        #container {
            display: flex;
            align-items: center;
            margin: 50px auto;
            flex-direction: column;
        }

        section {
            margin: 20px 5;

        }

        .main-top {
            width: 350px;
            text-align: center;
            margin-bottom: 5px;
            padding: 50px 50px;
            background-color: #fff;
        }

        .logo {
            margin-bottom: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .logo img {
            height: auto;
        }

        .username,
        .password {
            width: 100%;
            margin-bottom: 5px;
            padding: 8px 12px;
            border: 1px solid #dbdbdb;
            font-size: 15px;
            border-radius: 3px;
        }

        input:focus {
            outline: none;
        }

        .login-btn {
            width: 100%;
            background-color: #3897f0;
            border: 1px solid #3897f0;
            padding: 6px 0;
            color: #fff;
            cursor: pointer;
            border-radius: 3px;
        }

        .or {
            line-height: 50px;
        }
        .main-bottom a {
            margin: 20px 0;
            text-decoration: none;
            font-size: 15px;
            line-height: 30px;
        }

        .fa-facebook-f {
            color: #fff;
            border-radius: 2px;
            font-size: 12px;
            background-color: rgb(15, 15, 168);
            width: 20px;
            text-align: center;
            height: 20px;
            padding: 5px;
        }

        .bottom {
            width: 350px;
            text-align: center;
            padding: 20px 0;
            background-color: #fff;
        }

        .signUp a {
            text-decoration: none;
            cursor: pointer;
            color: #3897f0;
        }

        .app-section {
            text-align: center;
            padding: 10px 0;
        }

        .app-section span {
            font-size: 16px;
        }

        .images {
            margin: 10px 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        .images img {
            margin: 0 5px;
            height: 35px;
        }

        footer {
            width: 70%;
            text-align: center;
            margin-top: 2rem;
        }

        footer a,
        footer span,
        footer select {
            font-size: 13px;
            color: #8e8e8e;
            text-decoration: none;
            margin: 5px;
        }

        footer select {
            outline: none;
            border: none;
            background-color: #eee;
        }
        `}
      </style>

    </div>
  )
}

export default Signin;