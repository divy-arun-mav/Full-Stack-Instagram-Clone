import React, { Component } from 'react'
import './ComponentsCSS/Story.css';
import Friends from "../Images/friends.jpg";

const MyStory = () => {
  let username = "joe_erik"
  let user_img = { Friends };
  return (
    <div className='Stories'>

      <div className='Story'>
        <li>
          <div className='Back-wrapper'>
            <img src={Friends} />
          </div>
          <p style={{ textAlign: 'center' }}>{username}</p>
        </li>
      </div>
    </div>
  )
}

export default MyStory;