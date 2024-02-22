import { Box, Image, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./StoryWritersP2.module.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdDownloadDone } from "react-icons/md";
import person from "./Images/person.png";
import { AuthContext } from "../../../Context/AuthContext";

export default function StoryWritersP2() {
  const navigateTo = useNavigate();
  const {storyTitle, setStoryTitle} = useContext(AuthContext)
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
  const handleNext = () => {
    if (storyTitle !== "") {
      navigateTo("/storyWriters/page3");
    } else {
      alert("Please enter a story title");
    }
  };
  return (
    <>
      <Box>
        <div className={styles.breadcrumbs}>
          <FaArrowLeftLong size={15} />
          <p onClick={() => navigateTo("/")}>Back to Homepage</p>
          <p></p>
        </div>
        <div className={styles.section1}>
          <p>
            Get your stories featured on Story Club in just <span>Rs 49</span>
          </p>
        </div>
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          p={"1rem"}
          gap={"1rem"}
          //   border={"1px solid black"}
          w={{ base: "100%", md: "100%", lg: "100%", xl: "100%" }}
          m={"auto"}
        >
          <Box
            // border={"1px solid black"}
            p={"1rem"}
            display={"flex"}
            flexDirection={"column"}
            gap={{ base: "1rem", md: "1rem", lg: "2rem", xl: "2rem" }}
            m={"auto"}
            mt={0}
          >
            <h1 ref={h1Ref} className={styles.animation}>
              Write your Story !
            </h1>
            <Text
              fontSize={"1rem"}
              mt={{ base: "-1.5rem", md: "-1.5rem", lg: "-3rem", xl: "-3rem" }}
            >
              In 100 - 500 words !
            </Text>
            <div
              style={{
                display: "flex",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              <p style={{ color: "red" }}>-</p>
              <p>-----</p>
              <p style={{ color: "red" }}>-</p>
            </div>
            <Text fontSize={"1.5rem"}>Add Title to your Story!</Text>
            <Box
              className={styles.box}
              h={"6rem"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <b>
                <i style={{ fontSize: "0.6rem" }}>Let the story begin...</i>
              </b>
              <input
                type="text"
                placeholder="Write your title here..."
                value={storyTitle}
                onChange={(e) => setStoryTitle(e.target.value)}
              />

              <Text color={"gray"} fontSize={"0.8rem"} textAlign={"end"}>
                just one step
              </Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>02/03</Text>
              <MdDownloadDone
                size={25}
                style={{
                  backgroundColor: "#f7ded5",
                  border: "1px solid black",
                  borderRadius: "50%",
                  padding: "0.2rem",
                  display: storyTitle.length > 0 ? "block" : "none",
                }}
              />
            </Box>
            <Box
              display={"flex"}
              gap={"1rem"}
              w={"100%"}
            //   border={"1px solid black"}
            >
              <button
                className={styles.btn}
                onClick={() => navigateTo("/storyWriters/page1")}
              >
                Go back
              </button>
              <button className={styles.btn} onClick={handleNext}>
                Next
              </button>
            </Box>
          </Box>
          <Box
            //   border={"1px solid black"}
            m={"auto"}
            mt={0}
            p={"1rem"}
          >
            <Image src={person} alt="person" w={"80%"} m={"auto"} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
