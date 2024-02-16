import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { Component } from 'react'
import MyStory from "./MyStory";

const Story = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 9,
      slidesToSlide: 4,
      arrows: false
    },
    desktop2: {
      breakpoint: { max: 1300, min: 1100 },
      items: 7,
      slidesToSlide: 3,
      arrows: false
    },
    desktop3: {
      breakpoint: { max: 1100, min: 980 },
      items: 11,
      slidesToSlide: 3,
      arrows: false
    },
    desktop4: {
      breakpoint: { max: 980, min: 768 },
      items: 7,
      slidesToSlide: 3,
      arrows: false
    },
    tablet: {
      breakpoint: { max: 768, min: 600 },
      items: 7,
      slidesToSlide: 2,
      arrows: false
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 5,
      slidesToSlide: 2,
      arrows: false
    },
  };


  return (
    <>
      <div className="story-container">
    <Carousel responsive={responsive}>
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
      <MyStory />
          <MyStory />
        </Carousel>
      </div>
      <style>
        {`
        *{
    padding: none;
    border: none;
    margin:none;
}

body{
    width: 50%;
}

.react-multiple-carousel__arrow{
    top: 8px;
    right: 10px;
    width: 10px;
}

.react-multiple-carousel__arrow--left{
    left: 0px;
}

.react-multi-carousel-list{
    width: 83%;
}
@media screen and (max-width:1100px){
  body{
    width:100%;
  }

  .story-container{
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .react-multi-carousel-list{
    width: 100%;
}
}
        `}
      </style>
    </>
  )
}

export default Story;
