import React, { Component } from 'react';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='Foot-elements foot-one'>
          <p className='Foot-text'>About</p>
          <span class="dot"></span>
          <p className='Foot-text'>Help</p>
          <span class="dot"></span>
          <p className='Foot-text'>Press</p>
          <span class="dot"></span>
          <p className='Foot-text'>API</p>
          <span class="dot"></span>
          <p className='Foot-text'>Jobs</p>
          <span class="dot"></span>
          <p className='Foot-text'>Privacy</p>
          <span class="dot"></span>
          <p className='Foot-text'>Terms</p>
          <span class="dot"></span>
        </div>
        <div className='Foot-elements foot-two'>
          <p className='Foot-text'>Locations</p>
          <span class="dot"></span>
          <p className='Foot-text'>Language</p>
          <span class="dot"></span>
          <p className='Foot-text'>Meta Verified</p>
        </div>

        <div className='copyright'><p>&#169; 2023 INSTAGRAM FROM META</p></div>
      </div>
      <style>
        {`
        .footer{
    display: flex;
    flex-direction: column;
    font-weight: 100;
}

.Foot-elements{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    width: max-content;
    margin: 0;
    cursor: pointer;
}
.foot-two{
    margin: 0;
    padding: 0;
    width: 192px;
}

.Foot-elements p:hover{
    text-decoration: underline;
}

.Foot-text{
    color: #bbb;
    font-size: 12px;
    margin: 4px; 
    padding: 0; 
}

.dot {
    height: 2px;
    width: 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
}

.copyright p{
    color: #bbb;
    font-size: 12px;
    margin: 4px; 
    margin-top: 20px;
    padding: 0; 
}
        `}
      </style>
    </div>
  )
}

export default Footer