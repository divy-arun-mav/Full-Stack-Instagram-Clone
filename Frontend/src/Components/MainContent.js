import React, { Component } from 'react'
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
      <style>
        {`
        body{
    margin: 40px 0px 0px 380px;
    padding: 0px 10px;
}
        `}
      </style>
    </div>
  )
}

export default MainContent;