import { Box, Button, Center, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "./Images/logo.png";
import { RiFacebookFill } from "react-icons/ri";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";

export default function Footer() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for subscribing");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <Box bgGradient="linear(to-t, #0D0D0D, #4B4B4B)" pb={10}>
      <Center
        display={"flex"}
        flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
        justifyContent={"space-evenly"}
        p={5}
        gap={"1em"}
        py={10}
        // border={"1px solid white"}
      >
        <Box>
          <Image src={logo} alt="logo" />
        </Box>
        <Box w={{ base: "100%", md: "100%", lg: "40%", xl: "40%" }}>
          <Box
            display={"flex"}
            flexDirection={{
              base: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
            justifyContent={"space-between"}
            gap={"1em"}
            // border={"1px solid white"}
            fontSize={"1.2rem"}
            textAlign={"center"}
          >
            <Text color={"white"}>About us</Text>
            <Text color={"white"}>Contact us</Text>
            <Text color={"white"}>Workshops</Text>
            <Text color={"white"}>FAQ’s</Text>
            <Text color={"white"}>Membership</Text>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box
              display={"flex"}
              width={{ base: "100%", md: "60%", lg: "70%", xl: "50%" }}
              m={"1em auto 0"}
              border={"1px solid white"}
              borderRadius={"2rem"}
              p={"0.2em"}
            >
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                name="email"
                onChange={handleChange}
                border={"none"}
                outline={"none"}
                borderRadius={"2rem"}
                color={"white"}
                required
                background={"transparent"}
              />
              <Button
                type="submit"
                backgroundColor={"#DC6E66"}
                color={"white"}
                borderRadius={"2rem"}
                _hover={{
                  color: "#DC6E66",
                  backgroundColor: "white",
                  border: "1px solid #DC6E66",
                }}
              >
                Subscribe
              </Button>
            </Box>
          </form>
        </Box>
        <Center color={"white"} display={"flex"} gap={"0.8em"} p={"0.5em"}>
          <Box
            backgroundColor={"#DC6E66"}
            p={"0.5em"}
            border={"1.6px solid white"}
            borderRadius={"50%"}
          >
            <RiFacebookFill fontSize={"1.2em"} />
          </Box>
          <Box
            backgroundColor={"#DC6E66"}
            p={"0.5em"}
            border={"1.6px solid white"}
            borderRadius={"50%"}
          >
            <BiLogoInstagramAlt fontSize={"1.2em"} />
          </Box>
          <Box
            backgroundColor={"#DC6E66"}
            p={"0.5em"}
            border={"1.6px solid white"}
            borderRadius={"50%"}
          >
            <BsYoutube fontSize={"1.2em"} />
          </Box>
        </Center>
      </Center>
      <Box
        color={"white"}
        display={"flex"}
        flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
        justifyContent={"space-between"}
        w={"80%"}
        m={"auto"}
        borderTop={"1px solid white"}
        gap={"1em"}
        textAlign={"center"}
      >
        <Box
          display={"flex"}
          gap={{ base: "0", md: "0", lg: "2em", xl: "2em" }}
          flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
        >
          <Text>Privacy Policy</Text>
          <Text>Terms & Conditions</Text>
        </Box>
        <Box>
          <Text>Copyright @ 2024 | StoryClub</Text>
        </Box>
      </Box>
    </Box>
  );
}
