import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import styles from "./SubmissionDone.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import submitted from "./Images/submitted.png";

export default function SubmissionDone({data}) {
    console.log(data)
  const navigateTo = useNavigate();
  const h1Ref = useRef(null);
  const h1Ref2 = useRef(null);
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
    if (h1Ref2.current) {
      spanText(h1Ref2.current);
    }
  }, []);
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={"1rem"} className={styles.section1}>
        <div className={styles.breadcrumbs}>
          <FaArrowLeftLong size={15} />
          <p onClick={() => navigateTo("/")}>Back to Homepage</p>
          <p></p>
        </div>
        <Box>
          <Image src={submitted} alt="submitted" m={"auto"} />
        </Box>
        <Box
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
          p={"1rem"}
        >
          <h1 ref={h1Ref} className={styles.animation}>
            Congratulations!
          </h1>
          <h1 ref={h1Ref2} className={styles.animation}>
            Your {data} has been Succesfully Submitted
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
            Confirmation email has been sent to your registered email address{" "}
            <span style={{ color: "#dc6e66" }}> storyclub2024@gmail.com</span>{" "}
            We will call you in case you are shortlisted.
          </Text>
        </Box>
      </Box>
    </>
  );
}
