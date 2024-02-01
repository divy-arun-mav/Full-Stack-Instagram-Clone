import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { Component } from 'react'
import MyStory from "./MyStory";
import "./ComponentsCSS/MainStory.css";

const Story = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 8,
      slidesToSlide: 4,
      arrows: false
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 4,
      slidesToSlide: 2,
      arrows: false
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 2,
      arrows: false
    }
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return <button onClick={() => onClick()} />;
  };


  return (
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
  )
}

export default Story;
