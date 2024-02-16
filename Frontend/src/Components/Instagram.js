import React, { Component } from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'
import RightBar from './RightBar'
import SignUp from './SignUp'
import Signin from './SignIn'

const Instagram = () => {
  return (
    <>

      <div className='AppContent'>
        <Navbar />
        <div className='main-content'>
          <MainContent />
        </div>
        <div className='RightBar'>
          <RightBar /></div>
      </div>
      <style>
        {`
        .RightBar {
    position: absolute;
    top: 0;
    right: 0;
    width: 28%;
}
.main-content{
  margin:0;
}
@media screen and (max-width:1100px){
  .RightBar{
    display:none;
}
        `}
      </style>
    </>
  )
}

export default Instagram