import React, { Component } from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'
import RightBar from './RightBar'
import './ComponentsCSS/Instagram.css'
import SignUp from './SignUp'
import Signin from './SignIn'

const Instagram = () => {
  return (
    <div className='AppContent'>
      {/* <Signin/> */}
      <Navbar />
      <MainContent />
      <div className='RightBar'><RightBar /></div>
    </div>
  )
}

export default Instagram