import React, { useRef, useEffect, useState } from "react";
import styles from "./HorizontalSlider.module.css";
import LandingPage1 from "../../Pages/LandingPage1/LandingPage1";
import LandingPage2 from "../../Pages/LandingPage2/LandingPage2";

const HorizontalSlider = () => {
  const sliderRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const { deltaY } = event;
      const pageWidth = sliderRef.current.offsetWidth;
      const newPage = Math.round(sliderRef.current.scrollLeft / pageWidth);
      setCurrentPage(newPage);
      event.preventDefault();
      sliderRef.current.scrollLeft += deltaY > 0 ? pageWidth : -pageWidth;
    };

    sliderRef.current.addEventListener("wheel", handleScroll, {
      passive: false,
    });

    return () => sliderRef.current.removeEventListener("wheel", handleScroll);
  }, []);

  const handleDotClick = (pageIndex) => {
    const pageWidth = sliderRef.current.offsetWidth;
    sliderRef.current.scrollLeft = pageWidth * pageIndex;
    setCurrentPage(pageIndex);
  };

  const renderDots = () => {
    const pageCount = 2; // Adjust this based on the number of pages
    const dots = [];
    for (let i = 0; i < pageCount; i++) {
      dots.push(
        <button
          key={i}
          className={currentPage === i ? styles.activeDot : styles.dot}
          onClick={() => handleDotClick(i)}
        />
      );
    }
    return dots;
  };

  return (
    <div className={styles.sliderContainer}>
      <div ref={sliderRef} className={styles.slider}>
        <div className={styles.page}>
          <LandingPage1 />
        </div>
        <div className={styles.page}>
          <LandingPage2 />
        </div>
      </div>
      <div className={styles.dotsContainer}>{renderDots()}</div>
    </div>
  );
};

export default HorizontalSlider;
