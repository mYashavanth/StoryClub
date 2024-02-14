import React, { useEffect, useRef } from "react";
import styles from "./LandingPage2.module.css";
import left from "./Images/section2/left.png";
import right from "./Images/section2/right.png";

const LandingPage2 = () => {
  const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    marqueeRef.current.stop();
  };

  const handleMouseOut = () => {
    marqueeRef.current.start();
  };

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
    <div className={styles.landingPage2}>
      {/* section 1 */}
      <div className={styles.section1}>
        <marquee
          behavior="scroll"
          direction="left"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          ref={marqueeRef}
        >
          <div className={styles.section1Content}>
            <p>Connect width community</p>
            <p>Start sharing your Stories</p>
            <p>Welcome the recognition</p>
            <p>As you grow, join our featured projiles.</p>
          </div>
        </marquee>
      </div>

      {/* section 2 */}
      <div className={styles.section2}>
        <div className={styles.section2Content}>
          <div>
            <h1 ref={pRef} className={styles.animation}>
              Connecting
            </h1>
            <h1 ref={h1Ref} className={styles.animation}>
              StoryWriters and StoryTellers!
            </h1>
          </div>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={styles.section2Buttons}>
          <button className={styles.btn}>I am a StoryTeller</button>
          <button className={styles.btn}>I am a StoryWriter</button>
        </div>
        <div className={styles.section2Images}>
          <div className={styles.left}>
            <img src={left} alt="leftImg" />
          </div>
          <div className={styles.right}>
            <img src={right} alt="rightImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
