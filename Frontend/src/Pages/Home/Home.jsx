import React, { useContext, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css"; // Import the module CSS
import LandingPage1 from "../LandingPage1/LandingPage1";
import LandingPage2 from "../LandingPage2/LandingPage2";

const Home = () => {
  const sliderRef = useRef(null);

  const handleMouseWheel = (e) => {
    const delta = e.deltaY;

    if (delta > 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    dotsClass: `${styles["dots-container"]}`,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return <button className={styles.dot}></button>;
    },
    appendDots: (dots) => (
      <ul className={styles["custom-dots"]}> {dots} </ul> // Wrap dots in ul element
    ),
    adaptiveHeight: true,
  };

  return (
    <div className={styles.sliderWrapper} onWheel={handleMouseWheel}>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <LandingPage1 />
        </div>
        <div>
          <LandingPage2 />
        </div>
       
      </Slider>
    </div>
  );
};

export default Home;
