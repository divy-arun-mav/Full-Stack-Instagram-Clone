import React, { Component } from 'react'
import './ComponentsCSS/MainContent.css'
import Story from './Story'
import Posts from './Posts'

const MainContent = () => {
  return (
    <div>
      <Story />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  )
}

export default MainContent;