import React, { Component } from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'
import RightBar from './RightBar'
import SignUp from './SignUp'
import Signin from './SignIn'

const Instagram = () => {
  return (
    <div className='AppContent'>
      {/* <Signin/> */}
      <Navbar />
      <MainContent />
      <div className='RightBar'><RightBar /></div>
      <style>
        {`
        .RightBar {
    position: absolute;
    top: 0;
    right: 0;
    width: 28%;
}
        `}
      </style>
    </div>
  )
}

export default Instagram