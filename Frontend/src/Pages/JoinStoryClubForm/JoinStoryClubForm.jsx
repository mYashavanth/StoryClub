import { Box, Input, Text, Textarea } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styles from "./JoinStoryClubForm.module.css";
import { AuthContext } from "../../Context/AuthContext";
import emailjs from "@emailjs/browser";
import { BsPerson } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { RiContactsBookLine } from "react-icons/ri";
import { HiLink } from "react-icons/hi";
import { PiFileText } from "react-icons/pi";
import Loading from "../../Components/Loading/Loading";

export default function JoinStoryClubForm() {
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();
  const { position, setPosition } = useContext(AuthContext);
  //   console.log(position);
  const [formData, setFormData] = useState({
    toName: "Sir",
    name: "",
    email: "",
    mobileNumber: "",
    position: position,
    resume: "",
    cv: "",
  });
  const h1Ref = useRef(null);
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
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setLoading(true);
      const response = await emailjs.send(
        "service_alph36b",
        "template_79qfb86",
        formData,
        "suPan_E9zNBGA0RdQ"
      );
      console.log("Email sent successfully:", response);
      // alert("Email sent successfully!");
      navigateTo("/formSubmitted");
      // navigateTo("/joinStoryClub");
      window.scrollTo(0, 0, "smooth");
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Email send failed!");
    } finally {
      setLoading(false);
    }
    // send data
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCancel = () => {
    navigateTo("/joinStoryClub");
    window.scrollTo(0, 0, "smooth");
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Box>
        <div className={styles.breadcrumbs}>
          <FaArrowLeftLong size={15} />
          <p onClick={() => navigateTo("/joinStoryClub")}>
            Back To Join Story Club
          </p>
          <p></p>
        </div>
        {/* Section 1 */}
        <Box
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
        >
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
          <Text>Fill out the form to become a team member of StoryClub</Text>
        </Box>
        {/* Section 2 */}
        <Box mt={"1rem"}>
          <Text
            // border={"1px solid black"}
            width={{ base: "80%", md: "50%", lg: "50%", xl: "30%" }}
            padding={"0.5rem"}
            textAlign={"center"}
            m={"auto"}
            bgColor={"#f5c365"}
            borderRadius={"2em"}
          >
            Position Applied For : {position}
          </Text>
          <form onSubmit={handleSubmit}>
            <Box>
              <Box
                w={{ base: "80%", md: "70%", lg: "60%", xl: "50%" }}
                // border={"1px solid black"}
                m={"auto"}
                p={"1rem"}
                display={"grid"}
                gridTemplateColumns={{
                  base: "1fr",
                  md: "1fr",
                  lg: "1fr 1fr",
                  xl: "1fr 1fr",
                }}
                gap={"1rem"}
              >
                <Box className={styles.formInput}>
                  <Box className={styles.formInputIcon}>
                    <BsPerson style={{ fontSize: "1.5rem" }} />
                  </Box>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleChange}
                    required
                  />
                </Box>
                <Box className={styles.formInput}>
                  <Box className={styles.formInputIcon}>
                    <TfiEmail style={{ fontSize: "1.5rem" }} />
                  </Box>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                </Box>
                <Box className={styles.formInput}>
                  <Box className={styles.formInputIcon}>
                    <RiContactsBookLine style={{ fontSize: "1.5rem" }} />
                  </Box>
                  <input
                    type="number"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    placeholder="Mobile Number"
                    onChange={handleChange}
                    required
                    border={"none"}
                    outline={"none"}
                  />
                </Box>

                <Box className={styles.formInput}>
                  <Box className={styles.formInputIcon}>
                    <HiLink style={{ fontSize: "1.5rem" }} />
                  </Box>
                  <input
                    type="text"
                    name="resume"
                    value={formData.resume}
                    placeholder="Resume Google Drive Link"
                    onChange={handleChange}
                    required
                  />
                </Box>
              </Box>
              <Text fontSize={"1em"} textAlign={"center"} mx={"2rem"}>
                Please ensure the Google Drive sharing settings are set to
                "Anyone with the link can access".
              </Text>
              <Box
                className={styles.formInput}
                w={{ base: "75%", md: "66%", lg: "57%", xl: "48%" }}
                m={"auto"}
              >
                <Box
                  className={styles.formInputIcon}
                  h={"4rem"}
                  borderRadius={"2em"}
                >
                  <PiFileText style={{ fontSize: "1.5rem" }} />
                </Box>
                <textarea
                  type="text"
                  name="cv"
                  value={formData.cv}
                  placeholder="Cover Letter"
                  onChange={handleChange}
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={{
                  base: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                gap={"1rem"}
                justifyContent={"center"}
                alignItems={"center"}
                w={{ base: "75%", md: "66%", lg: "57%", xl: "48%" }}
                m={"auto"}
                mt={"2rem"}
                className={styles.formInputButtons}
              >
                <button className={styles.btn} onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className={styles.btn}>
                  Submit
                </button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
