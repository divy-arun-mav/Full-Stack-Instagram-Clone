import React, { Component } from 'react';
import Logo from "../Images/logo.png";
import Homeicon from "../Images/homeicon.png";
import Searchicon from "../Images/searchicon.png";
import Reelsicon from "../Images/reelsicon.png";
import Exploreicon from "../Images/Explore.png";
import Messagesicon from "../Images/messageicon.png";
import Notificationsicon from "../Images/heart.png";
import Createicon from "../Images/more.png";
import Profilephoto from "../Images/profile.jpg";
import Hamburger from "../Images/menu.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <>
      <div className='SideNav'>
      <nav>
      <div className='logo'>
      <img src={Logo} alt="logo" />
      </div>
      <ul className='nav-list'>
              <Link className='link' to="/"><li className='Home'><img src={Homeicon} /><span>Home</span></li></Link>
              <Link className='link' to="/search"><li className='Search'><img src={Searchicon} /><span>Search</span></li></Link>
              <Link className='link' to="/explore"><li className='Explore'><img src={Exploreicon} /><span>Explore</span></li></Link>
              <Link className='link' to="/reels"><li className='Reels'><img src={Reelsicon} /><span>Reels</span></li></Link>
              <Link className='link' to="/message"><li className='Messages'><img src={Messagesicon} /><span>Messages</span></li></Link>
              <Link className='link' to="/notifications"><li className='Notifications'><img src={Notificationsicon} /><span>Notifications</span></li></Link>
              <Link className='link' to="/createpost"><li className='Create'><img src={Createicon} /><span>Create</span></li></Link>
              <Link className='link' to="/my-profile"><li className='Profile'><img src={Profilephoto} /><span>Profile</span></li></Link>
              <li className='More'><img src={Hamburger} />More</li>
      </ul>
      </nav>
        </div>
        <span className='logout'>
          <Link to="/logout">Signout</Link>
        </span>
        <style>
          {`
          .link{
            text-decoration: none;
            color:black;
          }
            *{
    margin: 0;
    padding: 0;
}

body{
    margin: 0;
    padding: 0;
}

ul , li {list-style-type: none;}

nav{
    position: fixed;
    top: 0;
    left: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
    width: 15%;
    height: 100vh;
    text-align: left;
    border-right: 1px solid rgb(213, 213, 213);
}

.Home{
    font-weight: 1000;
    display: flex;
    border-radius: 5px;
    align-items: center;
    padding: 10px 0px 10px 0px;
    font-size: 15px;
}

.Home img , .Search img , .Explore img , .Reels img , .Messages img , .Notifications img , .Create img , .Profile img , .More img{
    width: 20px;
    margin: 0px 10px 0px 18px;
}

.nav-list li{
    width: 85%;
    margin: 15px 0px 0px 15px;
    cursor: pointer;
}

.Search , .Explore , .Reels , .Messages , .Notifications , .Create , .Profile , .More{
    color: rgb(42, 42, 42);
    font-weight: 0;
    display: flex;
    align-items: center;
    justify-content: baseline;
    padding: 10px 0px 10px 0px;
    border-radius: 5px;
    font-size: 15px;
}

.More{
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 40px;
}

.Profile img{
    border-radius: 50%;
}

.logo{
    width: 90%;
    margin:32px 0px 32px 25px;
    cursor: pointer;
}

.logo img{
    width: 110px;
}

.profile{
    border: 2px solid red;
}

.profile_photo{
    width: 60px;
    border-radius: 50%;
}

.Profile img{
    width: 25px;
}

.post_photo{
    width: 32%;
    margin: 0px 2px 0px 2px;
    padding: 0;
}

.message{
    margin: 0;
    padding: 0;
    width: 100px;
    background-color: rgb(40, 130, 226);
    border-radius: 10px;
    color: white;
}

.following{
    padding: 0;
    margin: 0;
    width: 100px;
    background-color: rgb(206, 206, 206);
    border-radius: 10px;
}

ul li:hover {
    background-color: rgba(61, 61, 61, 0);
}
          `}
        </style>
      </>
    )
  }

export default Navbar;