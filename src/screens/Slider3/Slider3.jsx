import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./slider3.css";
import image1 from "./img/image1.jpeg";
import image2 from "./img/image2.jpeg";
import image3 from "./img/image3.jpeg";
import image4 from "./img/image4.jpeg";
import image5 from "./img/image5.jpeg";

const imageSlide = [image1, image2, image3, image4, image5];

const Slider3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    console.log("CurrentSlideNumer::", currentSlide);
  }, [currentSlide]);

  return (
    <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>
    <div style={{width:'473px'}}>
      <Slider
      arrows={false}
        beforeChange={(currentSlide, nextSlide) => {
          setCurrentSlide(nextSlide);
        }}
        {...settings}
        autoplay={true}
        pauseOnHover={false}
        draggable={false}
        autoplaySpeed={2000}
      >
        {imageSlide.map((item, index) => {
          return <div key={item}>
            <img alt="" src={item} style={{width:'473px',height:'428px', objectFit:'cover'}}/>
            </div>;
        })}
      </Slider>

      <div style={{display:'flex',justifyContent:'center', marginTop:'25px'}}>
        {imageSlide.map((item, index) => {
          return (
            <span
              key={item}
              className={
                currentSlide === index
                  ? "slideIndicator actie-slideIndicator"
                  : "slideIndicator"
              }
            ></span>
          );
        })}
      </div>
      </div>
      </div>
  );
};

export default Slider3;
