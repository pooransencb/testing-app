import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slider1.css";

const Slider1 = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = [
    "https://s3-alpha-sig.figma.com/img/2281/58e0/bd31ab680c44fe592e3062d26143a85d?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZkSNKEDswAC-H137t6319mJmGNkQ2C3hjmmGl6fGJthaXKU5GpbzHVtcup4e3oQNI2H6psf2enRTgCmgzXhQRMM48Ob62Zidrg5Rh5qt~vYgAwcDSVKtdAZzXI4jxxyuBzGZj6Z2yDg7DjTAseU0ayasHcYuo1VLT4gWaNIkkaDkE73NpKIYdsQV4XdNhMH1iBnI2XYmI-IRG8H-MvDyynof5gRnuiYxCRyihA7FrMWnBVXEbD755qhL7mrktseXj9s152A9Lup~v8ZseAyc2rFfqciO84ThQqqXl-DO9xg2vVFXJQbqE8pRDaQd8zpiaLL9WoMHpl02XoHHxjspqQ__",
    "https://s3-alpha-sig.figma.com/img/a28c/fc3d/8eead2a98f66e52fef70a755291e9183?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WbbYldjCyfcSuJRX8wqgOhPEEa13DkuBnV83iZSET6ud0Drcm4eRSM9sNwaRaS-Ql92YnDDkWbwnPYCfUcgNjJOAjZ3oo89k8aq9btGpWU60Q1j1VQDKKCWM-looI8oP494UUVf9UUKpixe9HLnXmyN-6~amUXTlGfakj2OO1tKPDaEekjG9tFsZWKD2PxhKgEkZBRw4kFcnw5-TzYusWwSQbukJPufXkukwxHKt-e8ZcJEpPRpVdbl9TZQcxx6zARgoCqHLOEejb89StiYjP1uJ3kEep6B5-1BWuLoLNyVod1EodtqBIkKhVSVxk5FNMtHALTFXAmxNFP77rUMgkw__",
    "https://s3-alpha-sig.figma.com/img/dcf7/a511/d97468e47f12c04c1bedc59da3d7266a?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oh1k-eEai-uQyg3KXS98R-3wtNGnlae4L~VtdDoPFyElLjKdJvCveWBoutx5wZfnkmojHUNeDueqRUwuX3dQaktiN~dASgprDSjqT1KC7JUinYUbuV2Rg65lud1tLjjvb~B64ACvoAm9NIxY90WwBm58Rz~gWTuUeCA~3M5~vx-K6QkSWGPb75nErlJGc03MhEQJzikBVzar9Bbnc4sddkY19nWowZFdLLRZF5p6DV6Vi565p2cj2xSZrHhJEGoWBhXAj6aHaN-QygPCu~TaCy3UXad3~Vnto00J9o7PkDWKnJErf4C0xc48XYbtBJF5LPHgV4guU0P-vfLfIOkHCw__",
    "https://s3-alpha-sig.figma.com/img/cac7/d009/38a025c13fb9b8d7ae41106099d59112?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NbMyQ~31LDjqRR-p7YJIHft3~aHMQB049ydi-3XmD32h4~y~QYGlUOpqgDCgUtBQcOhHZcU88TXwpGg7r6kZSL5mfOnLVjT-du9MzAg7oDP4LqlyW31VtQ3H11HDfSNyL9ks2U7vij82L4VF~DIH9RQYRm5S-oJNZJCBcT2~5HbYu2x8u4~SRtWagvFQMWPNpd4tnl9-GzipClTkejqFQU4qrjHSlnQQabQqdx9qA5ofuvuotuoiAkV992UQS4VQXOz9kps3xyBKOz2joc9bpYmHDmYXjik6J6Fv-FmzxTSDjNUf9eJrNDPaL2FSnjwR0nXsaKNHWjY5aCv~opvekg__",
    "https://s3-alpha-sig.figma.com/img/c961/e051/dd76902c8bf2b16cbf14eb2da38fec7c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YU4Zsbd~Whe-dlbEM3hccee7kD1e4aIQ6C-a06elKOVn1A31tU4MY0LuJaX0E1YfUOYLgURbEu-fbtRH6NwamDVs2SgXI9U5XNWrTrLueGXluKAMwzDrVxm5yZJ~0GdEb9q8o6wj94vHQZ7NEl0S6mPJo8qhekm-QHDVKh03kToSlYzUjCd0hsjQmWDfWWdOUfKXHpZKKKfarDdM8MEfs-KhxKrtrY4dnpDuK8zmFbL4C9mBnvQnI3c6-foPftXHAnuvI5eejukKlPfplfNq1oUkf9mqNNo3WlgUOO7IVkKrgCoZdT3kVFfeJ5O0-To2vhpbMB-WPJvarBUR9xOm-A__",
  ];
  return (
    <>
      <Slide
        autoplay={true}
        arrows={false}
        canSwipe={false}
        pauseOnHover={false}
        transitionDuration={2000}
        duration={1200}
        onStartChange={(event) => {
          if(event===0){
            setActiveSlide(event);
          }else{
            setActiveSlide(activeSlide+1);
          }
          
          console.log("EventStart::", event);
        }}
        onChange={(event) => {
          console.log("Event::", event);
        }}
      >
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[3]})` }}>
            <span>Slide 4</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[4]})` }}>
            <span>Slide 5</span>
          </div>
        </div>
      </Slide>

      <div>
        <span
          className={
            activeSlide === 0 ? "slideIndicator actie-slideIndicator" : "slideIndicator"
          }
        ></span>
        <span
          className={
            activeSlide === 1 ? "slideIndicator actie-slideIndicator" : "slideIndicator"
          }
        ></span>
        <span
          className={
            activeSlide === 2 ? "slideIndicator actie-slideIndicator" : "slideIndicator"
          }
        ></span>
        <span
          className={
            activeSlide === 3 ? "slideIndicator actie-slideIndicator" : "slideIndicator"
          }
        ></span>
        <span
          className={
            activeSlide === 4 ? "slideIndicator actie-slideIndicator" : "slideIndicator"
          }
        ></span>
      </div>
    </>
  );
};

export default Slider1;
