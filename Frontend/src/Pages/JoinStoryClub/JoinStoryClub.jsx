import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import styles from "./JoinStoryClub.module.css";

export default function JoinStoryClub() {
  const marqueeRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const handleMouseOver = () => {
    marqueeRef.current.stop();
  };

  const handleMouseOut = () => {
    marqueeRef.current.start();
  };

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
    <Box>
      {/* Section 1 */}
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
      {/* Section 2 */}
      <Box className={styles.section2}>
        <h1 ref={h1Ref} className={styles.animation}>
          Join Story Club!
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
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </Text>
        <Box  className={styles.section2Video}>
          <iframe
            title="Embedded Video"
            src="https://www.youtube.com/embed/fIY5Fd1klNM?si=K7ZvJ7CcD_pY77sV"
            // width="100%"
            // height="400"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}
