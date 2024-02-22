import { Box, Image, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdDownloadDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styles from "./StoryWritersP3.module.css";
import person from "./Images/person.png";
import fileImg from "./Images/fileImg.png";
import { AuthContext } from "../../../Context/AuthContext";

export default function StoryWritersP3() {
  const { activeCategory, setActiveCategory, storyTitle, setStoryTitle } =
    useContext(AuthContext);

  const navigateTo = useNavigate();
  const h1Ref = useRef(null);
  const h1Ref2 = useRef(null);
  const [file, setFile] = useState(null);

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && isValidFileType(selectedFile)) {
      setFile(selectedFile);
    } else {
      alert("Please select a PDF or Word file.");
      // Clear the file input
      e.target.value = null;
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && isValidFileType(droppedFile)) {
      setFile(droppedFile);
    } else {
      alert("Please drop a PDF or Word file.");
    }
  };

  const isValidFileType = (file) => {
    const acceptedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    return acceptedTypes.includes(file.type);
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
    if (h1Ref2.current) {
      spanText(h1Ref2.current);
    }
  }, []);
  const handleSubmit = () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }
    console.log({ activeCategory, storyTitle, file });
    setFile(null);
    setStoryTitle("");
    setActiveCategory("Slelect Category...");
    navigateTo("/storyWriters/submitted");
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
              Let the World Read!
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
            <Text fontSize={"1.5rem"}>Publish your Story</Text>
            {/* <Box
              className={styles.box}
              h={"6rem"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <b>
                <i style={{ fontSize: "0.6rem" }}>Let the story begin...</i>
              </b>

              <Text color={"gray"} fontSize={"0.8rem"} textAlign={"end"}>
                just one step
              </Text>
            </Box> */}
            <Box
              className={styles.box}
              p={4}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <Image src={fileImg} alt="file" />
              {file && (
                <Text fontSize={"1.3rem"}>Selected File: {file.name}</Text>
              )}
              {!file && (
                <Text fontSize={"1.3rem"}>
                  Drag & Drop a file here or click to select
                </Text>
              )}
              <input
                type="file"
                onChange={handleFileSelect}
                accept=".pdf,.doc,.docx"
              />
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>03/03</Text>
              <MdDownloadDone
                size={25}
                style={{
                  backgroundColor: "#f7ded5",
                  border: "1px solid black",
                  borderRadius: "50%",
                  padding: "0.2rem",
                  display: file ? "block" : "none",
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
                onClick={() => navigateTo("/storyWriters/page2")}
              >
                Go back
              </button>
              <button className={styles.btn} onClick={handleSubmit}>
                Add Story
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
