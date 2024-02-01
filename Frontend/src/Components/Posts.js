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
      
    </main>
  )
}

export default Posts;