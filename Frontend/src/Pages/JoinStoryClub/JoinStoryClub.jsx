import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import styles from "./JoinStoryClub.module.css";
import FlipCard from "../../Components/FlipCard/FlipCard";
import storyTeller from "./Images/storyTeller.png";
import actorModel from "./Images/actorModel.png";
import filmmaker from "./Images/filmmaker.png";
import anchor from "./Images/anchor.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
export default function JoinStoryClub() {
  const marqueeRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const navigateTo = useNavigate();

  const hiringData = [
    {
      id: 1,
      position: "Story Teller",
      jd: " We are currently seeking a Storyteller to join our creative team. This individual will be the heart ofour narrative, weaving captivating stories to engage our audience. Your role involves craftingcompelling content for various platforms, evoking emotions, and conveying messages effectively.The ideal candidate will have a passion for storytelling, a vivid imagination, and the ability to bringstories to life. Experience in content creation, whether through writing, video, or other mediums, ishighly valued. Join us in creating and sharing stories that leave a lasting impact on our audience.",
      image: storyTeller,
    },
    {
      id: 2,
      position: "Actor / Model",
      jd: "We are currently seeking an Actor/Model to become the face of our creative projects.This versatileindividual will play a pivotal role in bringing our stories and concepts to life through performanceand visual representation. Your responsibilities will include embodying characters, conveyingemotions, and participating in photoshoots or video productions. The ideal candidate will possessexceptional acting or modeling skills, a strong stage or on-camera presence, and a passion forstorytelling through performance. Join us in showcasing our vision through your talent and charisma,creating a lasting impact on our audience.",
      image: actorModel,
    },
    {
      id: 3,
      position: "Filmmaker",
      jd: "We are currently seeking a Filmmaker to join our creative team. This individual will be responsiblefor bringing our stories to life through the art of film. Your role involves concept development,scriptwriting, directing, and overseeing the production process. The ideal candidate will have astrong passion for filmmaking, a keen eye for visual storytelling, and experience in creatingcompelling cinematic content. Join us in producing films that captivate, entertain, and inspire ouraudience",
      image: filmmaker,
    },
    {
      id: 4,
      position: "Anchor",
      jd: "Join Mentoons as an Anchor, where you'll connect with our audience through YouTube videos and social media Your role includes introducing new products and conducting insightful interviews with experts. We seek excellent communication skills, video hosting experience, and a passion for our mission. Familiarity with LinkedIn, Facebook, Instagram, and Pinterest is a plus. We embrace diversity and are proud to be an equal opportunity employer. Ready to make learning fun and easy? Apply now and let's explore potential together! ",
      image: anchor,
    },
    // {
    //   id: 5,
    //   position: "Content Writer",
    //   jd: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    //   image: require(""),
    // },
    // {
    //   id: 6,
    //   position: "Backend Developer",
    //   jd: "We are currently seeking a Backend Developer to join our dynamic team. This individual will play avital role enabling the development of e-commerce, managing databases, assisting in podcas creation and supporting YouTube channel content. The ideal candidate will have an extensive experience of working with full Stack MERN and managing MongoDB databases",
    //   image: require("../Images/blogprev2.png"),
    // },
  ];
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
    <>
      <Box>
        <div className={styles.breadcrumbs}>
          <p onClick={() => navigateTo("/")}>Home</p>
          <FaArrowRightLong size={10} />
          <p>Join Story Club</p>
        </div>
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
          {/* <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </Text> */}
          <Box className={styles.section2Video}>
            <iframe
              title="Embedded Video"
              src="https://www.youtube.com/embed/fIY5Fd1klNM?si=K7ZvJ7CcD_pY77sV"
              // width="100%"
              // height="400"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </Box>
          <Box
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(1, 1fr)",
              lg: "repeat(2, 1fr)",
              xl: "repeat(2, 1fr)",
            }}
            justifyContent={"center"}
            gap="6rem"
            alignItems={"center"}
            p={"4em"}
            width={{ base: "100%", md: "100%", lg: "90%", xl: "90%" }}
            margin={"auto"}
          >
            {hiringData.map((data) => {
              return <FlipCard key={data.id} data={data} />;
            })}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
