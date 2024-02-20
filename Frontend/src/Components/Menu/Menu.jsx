import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import menuBackground from "./Images/menuBackground.png";
import styles from "./Menu.module.css";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigateTo = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        backgroundColor="#DC6E66"
        color={"white"}
        _hover={{
          backgroundColor: "#F9ECE3",
          color: "#DC6E66",
          border: "1px solid #DC6E66",
        }}
        onClick={onOpen}
        borderRadius={"50%"}
        w={"3em"}
        h={"3em"}
        p={"0.5em"}
      >
        <RiMenu4Fill size={"1.5em"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent backgroundImage={menuBackground} p={"1.5em"}>
          <DrawerCloseButton
            color={"white"}
            backgroundColor={"#DC6E66"}
            borderRadius={"50%"}
            mt={"2em"}
            mr={"1.5em"}
            _hover={{
              backgroundColor: "#F9ECE3",
              color: "#DC6E66",
              border: "1px solid #DC6E66",
            }}
            w={"4em"}
            h={"4em"}
          />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody border={"1px solid white"} borderRadius={"1em"}>
            <Box
              display={"grid"}
              gridTemplateColumns={{
                base: "1fr",
                md: "1fr",
                lg: "1fr 1fr",
                xl: "1fr 1fr",
              }}
              placeItems={"center"}
              gap={"2em"}
              // border={"1px solid white"}
              w={{ base: "100%", md: "100%", lg: "80%", xl: "80%" }}
              m={"auto"}
              p={"0.5em"}
              h={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}
            >
              <Center
                display={"flex"}
                justifyContent={"space-between"}
                width={{ base: "100%", md: "60%", lg: "85%", xl: "70%" }}
                borderBottom={"2px solid #DC6E66"}
                p={"0.3em"}
                borderRadius={"0.5em"}
                _hover={{ backgroundColor: "#FAF2E7", color: "#DC6E66" }}
                className={styles.active}
                onClick={() => {
                  navigateTo("/");
                  onClose();
                }}
              >
                <Heading>Home</Heading>
                <FaArrowRight className={styles.icon} />
              </Center>
              <Center
                display={"flex"}
                justifyContent={"space-between"}
                width={{ base: "100%", md: "60%", lg: "85%", xl: "70%" }}
                borderBottom={"2px solid #DC6E66"}
                p={"0.3em"}
                borderRadius={"0.5em"}
                _hover={{ backgroundColor: "#FAF2E7", color: "#DC6E66" }}
                className={styles.active}
                onClick={() => {
                  navigateTo("/storyWriters/page1");
                  onClose();
                }}
              >
                <Heading>Story Writers</Heading>
                <FaArrowRight className={styles.icon} />
              </Center>
              <Center
                display={"flex"}
                justifyContent={"space-between"}
                width={{ base: "100%", md: "60%", lg: "85%", xl: "70%" }}
                borderBottom={"2px solid #DC6E66"}
                p={"0.3em"}
                borderRadius={"0.5em"}
                _hover={{ backgroundColor: "#FAF2E7", color: "#DC6E66" }}
                className={styles.active}
                onClick={() => {
                  navigateTo("/storyTellers");
                  onClose();
                }}
              >
                <Heading>Story Tellers</Heading>
                <FaArrowRight className={styles.icon} />
              </Center>
              <Center
                display={"flex"}
                justifyContent={"space-between"}
                width={{ base: "100%", md: "60%", lg: "85%", xl: "70%" }}
                borderBottom={"2px solid #DC6E66"}
                p={"0.3em"}
                borderRadius={"0.5em"}
                _hover={{ backgroundColor: "#FAF2E7", color: "#DC6E66" }}
                className={styles.active}
                onClick={() => {
                  navigateTo("/aboutUs");
                  onClose();
                }}
              >
                <Heading>Our Story Club</Heading>
                <FaArrowRight className={styles.icon} />
              </Center>
              <Center
                display={"flex"}
                justifyContent={"space-between"}
                width={{ base: "100%", md: "60%", lg: "85%", xl: "70%" }}
                borderBottom={"2px solid #DC6E66"}
                p={"0.3em"}
                borderRadius={"0.5em"}
                _hover={{ backgroundColor: "#FAF2E7", color: "#DC6E66" }}
                className={styles.active}
                onClick={() => {
                  navigateTo("/joinStoryClub");
                  onClose();
                }}
              >
                <Heading>Join Story Club</Heading>
                <FaArrowRight className={styles.icon} />
              </Center>

              {/* <Center
                color={"black"}
                display={"flex"}
                gap={"0.8em"}
                p={"0.5em"}
              >
                <Box
                  backgroundColor={"#F2B86B80"}
                  p={"0.2em"}
                  border={"1.6px solid white"}
                  borderRadius={"0.5em"}
                >
                  <RiFacebookFill fontSize={"1.5em"} />
                </Box>
                <Box
                  backgroundColor={"#F2B86B80"}
                  p={"0.2em"}
                  border={"1.6px solid white"}
                  borderRadius={"0.5em"}
                >
                  <BiLogoInstagramAlt fontSize={"1.5em"} />
                </Box>
                <Box
                  backgroundColor={"#F2B86B80"}
                  p={"0.2em"}
                  border={"1.6px solid white"}
                  borderRadius={"0.5em"}
                >
                  <FaLinkedinIn fontSize={"1.5em"} />
                </Box>
                <Box
                  backgroundColor={"#F2B86B80"}
                  p={"0.2em"}
                  border={"1.6px solid white"}
                  borderRadius={"0.5em"}
                >
                  <FaTwitter fontSize={"1.5em"} />
                </Box>
              </Center> */}
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Center
              display={"flex"}
              w={"100%"}
              className={styles.footer}
              flexDirection={{
                base: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
            >
              <Text
                px={"1em"}
                borderRight={{
                  base: "none",
                  md: "1px solid gray",
                  lg: "1px solid gray",
                  xl: "1px solid gray",
                }}
              >
                FAQ’S
              </Text>
              <Text
                px={"1em"}
                borderRight={{
                  base: "none",
                  md: "1px solid gray",
                  lg: "1px solid gray",
                  xl: "1px solid gray",
                }}
              >
                Privacy Policy
              </Text>
              <Text
                px={"1em"}
                borderRight={{
                  base: "none",
                  md: "1px solid gray",
                  lg: "1px solid gray",
                  xl: "1px solid gray",
                }}
              >
                Terms & Condition
              </Text>
              <Text px={"1em"}>Contact us</Text>
            </Center>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
