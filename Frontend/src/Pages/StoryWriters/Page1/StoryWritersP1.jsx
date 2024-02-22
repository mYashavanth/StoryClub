import { Box, Heading, Text, calc } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styles from "./StoryWritersP1.module.css";
import { MdDownloadDone } from "react-icons/md";
import { AuthContext } from "../../../Context/AuthContext";

export default function StoryWritersP1() {
  const navigateTo = useNavigate();
  const {activeCategory, setActiveCategory} = useContext(AuthContext)
  const categories = [
    "Stories about social media",
    "Teenagers stories",
    "College stories",
    "Breakup Stores",
    "Dating Stories",
    "Gaming Stories",
    "Sports Stories",
    "School Stories",
    "Artificial intelligence Stories",
  ];
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
    if (activeCategory !== "Slelect Category...") {
      navigateTo("/storyWriters/page2");
    } else {
      alert("Please select a category");
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
              Have a Story to Share?
            </h1>
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
            <Text fontSize={"1.5rem"}>
              Share your story and get a chance to win 499₹
            </Text>
            <Box className={styles.box} h={"6rem"}>
              <b>
                <i style={{ fontSize: "0.6rem" }}>Let the story begin...</i>
              </b>
              <Text
                textAlign={"center"}
                color={
                  activeCategory !== "Slelect Category..." ? "black" : "gray"
                }
              >
                {activeCategory}
              </Text>
              <Text color={"gray"} fontSize={"0.8rem"} textAlign={"end"}>
                03/03
              </Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>01/03</Text>
              <MdDownloadDone
                size={25}
                style={{
                  backgroundColor: "#f7ded5",
                  border: "1px solid black",
                  borderRadius: "50%",
                  padding: "0.2rem",
                  display:
                    activeCategory !== "Slelect Category..." ? "flex" : "none",
                }}
              />
            </Box>
            <button className={styles.btn} onClick={handleNext}>
              Next
            </button>
          </Box>
          <Box
            //   border={"1px solid black"}
            m={"auto"}
            mt={0}
            p={"1rem"}
          >
            <Box
              display={"grid"}
              gridTemplateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
              }}
              //   gap={"1rem"}
            >
              {categories.map((category) => (
                <Box
                  w={{ base: "10rem", md: "12rem", lg: "13rem", xl: "13rem" }}
                  h={{ base: "8rem", md: "9rem", lg: "9rem", xl: "9rem" }}
                  border={"1px solid #f7ded5"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  onClick={() => setActiveCategory(category)}
                  p={"1rem"}
                  key={category}
                  cursor={"pointer"}
                  _hover={{
                    backgroundColor: "#f7ded5",
                    border: "1px solid #DC6E66",
                  }}
                >
                  {category}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
