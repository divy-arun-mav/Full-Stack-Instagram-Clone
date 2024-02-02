import React, { Component } from 'react';
import { useState } from 'react';
import './ComponentsCSS/Posts.css';
import Profile from "./Profile";
import Aarav from "../Images/aarav.jpg";
import AaravPost from "../Images/instagrampostaarav.png";
import Like from "../Images/heart.png";
import Comment from "../Images/comment_icon.png";
import Share from "../Images/shareicon.png";
import Save from "../Images/saveicon.png";
import Emoji from "../Images/emoji-icon.jpg";
import Bluetick from "../Images/bluetick.png";
import Sideburger from "../Images/Sideburger.png"

const Posts = ({ text, maxLength }) => {

  let account_name = 'reelmaster_aarav_bhanushali';

  let time_upload = '2h';
  
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <main>
      <div className='Posts'>
        <heading>
          <img src={Aarav} />
          <div className='text'>
            <div className='firsttext'>
              <p className='acc_name' href="#profile" style={{ fontWeight: 640, fontSize: 13 + 'px' }}>{account_name}</p>
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
          <img src={AaravPost} />
        </div>
        <ul className="extraicons">
          <li className='extra iconone'><img src={Like} /></li>
          <li className='extra icontwo'><img src={Comment} /></li>
          <li className='extra iconthree'><img src={Share} /></li>
          <li className='extra iconfour'><img src={Save} /></li>
        </ul>
        <p className='likedby'>Liked by <b style={{ fontWeight: 640 }}>harshitamav</b> and <b style={{ fontWeight: 640 }}>12 others</b></p>
        <p className='description'><b className='hashtags'>#Lorem#Ipsum</b> is <b className='hashtags' id='hashtags'>#simply</b> dummy text of the printing  </p>
        <p id='show' onClick={toggleExpanded}>
          {isExpanded ? "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." : 'more'}
        </p>
        <input className='commenthere' type='text' placeholder='Add a comment...'/>
        <img className='emoji' src={Emoji} />
      </div>
      {/* <div className='profile'><Profile /></div> */}
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
    display: none;
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

.firsttext:hover~.profile,
.firsttext:focus~.profile {
    display: none;
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
  )
}

export default Posts;