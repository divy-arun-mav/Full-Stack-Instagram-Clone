import React, { Component } from 'react';
import Logo from "../Images/logo.png";
import './ComponentsCSS/Navbar.css';
import Homeicon from "../Images/homeicon.png";
import Searchicon from "../Images/searchicon.png";
import Reelsicon from "../Images/reelsicon.png";
import Exploreicon from "../Images/Explore.png";
import Messagesicon from "../Images/messageicon.png";
import Notificationsicon from "../Images/heart.png";
import Createicon from "../Images/more.png";
import Profilephoto from "../Images/profile.jpg";
import Hamburger from "../Images/menu.png";

const Navbar = () => {
    return (
      <div className='SideNav'>
      <nav>
      <div className='logo'>
      <img src={Logo} alt="logo" />
      </div>
      <ul className='nav-list'>
        <li className='Home'><img src={Homeicon}/>Home</li>
        <li className='Search'><img src={Searchicon} />Search</li>
        <li className='Explore'><img src={Exploreicon} />Explore</li>
        <li className='Reels'><img src={Reelsicon} />Reels</li>
        <li className='Messages'><img src={Messagesicon} />Messages</li>
        <li className='Notifications'><img src={Notificationsicon} />Notifications</li>
        <li className='Create'><img src={Createicon} />Create</li>
        <li className='Profile'><img src={Profilephoto} />Profile</li>
        <li className='More'><img src={Hamburger} />More</li>
      </ul>
      </nav>
      </div>
    )
  }

export default Navbar;