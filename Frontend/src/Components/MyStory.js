import React, { Component } from 'react'
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
      <style>
        {`
        body{
    margin: 30px 0px 0px 20%;
    padding: 0px 10px;
}

.Story{
    display: flex;
}

.Stories{
    width: 68px;
    padding: none;
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
}

.Back-wrapper{
    width: 62px;
    height: 62px;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f
    60%, #d6249f 90%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px 0px 5px;
}

.Stories li .Back-wrapper img{
    align-self: center;
    width: 53px;
    border-radius: 50%;
    border: 3px solid white;
}

.Stories::-webkit-scrollbar {
    display: none;
}

button{
    border: none;
    background-color:rgba(231, 231, 231,0.8);
    width: 30px;
    height: 30px;
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    top: 50px;
}
        `}
      </style>
    </div>
  )
}

export default MyStory;