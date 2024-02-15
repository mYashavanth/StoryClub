import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderComponent.module.css";
import mahesh from "./Images/section2/mahesh.png";
import { FaPlay } from "react-icons/fa";

export default function SliderComponent() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive: [
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div className={styles.swiper}>
      <Slider {...settings}>
        <div className={styles["swiper-slide"]}>
          <div className={styles.card} onClick={() => console.log("clicked1")}>
            <div className={styles.cardContent}>
              <img src={mahesh} alt="mahesh" />
              <h4>Mahesh</h4>
            </div>
            <div className={styles.playIcon}>
              <FaPlay />
            </div>
          </div>
        </div>
        <div className={styles["swiper-slide"]}>
          <div className={styles.card} onClick={() => console.log("clicked1")}>
            <div className={styles.cardContent}>
              <img src={mahesh} alt="mahesh" />
              <h4>Mahesh</h4>
            </div>
            <div className={styles.playIcon}>
              <FaPlay />
            </div>
          </div>
        </div>
        <div className={styles["swiper-slide"]}>
          <div className={styles.card} onClick={() => console.log("clicked1")}>
            <div className={styles.cardContent}>
              <img src={mahesh} alt="mahesh" />
              <h4>Mahesh</h4>
            </div>
            <div className={styles.playIcon}>
              <FaPlay />
            </div>
          </div>
        </div>
        <div className={styles["swiper-slide"]}>
          <div className={styles.card} onClick={() => console.log("clicked1")}>
            <div className={styles.cardContent}>
              <img src={mahesh} alt="mahesh" />
              <h4>Mahesh</h4>
            </div>
            <div className={styles.playIcon}>
              <FaPlay />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
