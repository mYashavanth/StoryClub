import React, { useEffect, useRef } from "react";
import styles from "./LandingPage1.module.css";
import { FaPlay } from "react-icons/fa";
import left from "./Images/section2/left.png";
import right from "./Images/section2/right.png";
import { FiArrowRight } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const LandingPage1 = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const spanText = (text) => {
      let string = text.innerText;
      let spanned = "";
      for (let i = 0; i < string.length; i++) {
        if (string.substring(i, i + 1) === " ")
          spanned += string.substring(i, i + 1);
        else spanned += "<span>" + string.substring(i, i + 1) + "</span>";
      }
      text.innerHTML = spanned;

      let animations = text.querySelectorAll("span");
      animations.forEach((letter, i) => {
        letter.style.animationDelay = i * 0.1 + "s";
      });
    };

    if (h1Ref.current) {
      spanText(h1Ref.current);
    }

    if (pRef.current) {
      spanText(pRef.current);
    }
  }, []);

  return (
    <div className={styles.landingPage1} 
    // style={{ height: "100vh" }}
    >
      {/* section 1 */}
      <div className={styles.section1}>
        <p>
          Get your stories featured on Story Club in just <span>Rs 49</span>
        </p>
      </div>

      {/* section 2 */}
      <div className={styles.section2}>
        <div className={styles.left}>
          <img src={left} alt="leftImg" />
        </div>

        <div className={styles.section2Content}>
          <h1 ref={h1Ref} className={styles.animation}>
            Real People, Real Stories!
          </h1>
          <div
            style={{
              display: "flex",
              fontSize: "1.5rem",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: "-1rem",
            }}
          >
            <p style={{ color: "red" }}>-</p>
            <p>-----</p>
            <p style={{ color: "red" }}>-</p>
          </div>
          <p>Everybody has a Story to Tell...</p>
          <div className={styles.section2Video}>
            <iframe
              title="Embedded Video"
              src="https://drive.google.com/file/d/1pjUV9cyiHr5VJFEdd-2cz2pZPlvsrL_f/preview"
              // width="100%"
              // height="400"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          <button className={styles.btn}>
            More About Us <FaPlay />
          </button>
          <div className={styles.slide}>
            <h4 className={styles.icon}>Slide to the next page.</h4>
            <IoIosArrowForward className={styles.icon} />
            <IoIosArrowForward className={styles.icon} />
          </div>
          {/* <div className={styles.section2Buttons}>
            <div className={styles.but}>
              <button>
                Audio Stories <FiArrowRight className={styles.icon} />
              </button>
            </div>
            <div className={styles.but}>
              <button>
                Video Stories <FiArrowRight className={styles.icon} />
              </button>
            </div>
          </div> */}
        </div>
        <div className={styles.right}>
          <img src={right} alt="rightImg" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage1;
