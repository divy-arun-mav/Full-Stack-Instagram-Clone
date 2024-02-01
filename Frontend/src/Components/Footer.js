import React, { Component } from 'react';
import './ComponentsCSS/Footer.css'

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
    </div>
  )
}

export default Footer