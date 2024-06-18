import React, { useEffect } from "react";
import "./Slider2.css"
import { Link } from "react-router-dom";

const Slider2 = () => {
  let slideIndex = 0;

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  useEffect(()=>{
    showSlides();
  },[])

  return (
    <div>
        <Link to="/slider1">
        <button>Slider1</button>
        </Link>
      <h2>Automatic Slideshow</h2>
      <p>Change image every 2 seconds:</p>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img alt="" src="https://www.w3schools.com/howto/img_nature_wide.jpg" style={{width:"100%"}} />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img alt="" src="https://www.w3schools.com/howto/img_snow_wide.jpg" style={{width:"100%"}} />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img alt="" src="https://www.w3schools.com/howto/img_mountains_wide.jpg" style={{width:"100%"}} />
          <div className="text">Caption Three</div>
        </div>
      </div>
      <br />

      <div style={{textAlign:"center"}}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Slider2;
