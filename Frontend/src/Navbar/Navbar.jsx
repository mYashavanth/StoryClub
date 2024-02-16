import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "./Images/logo.png";
import Menu from "../Components/Menu/Menu";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigateTo = useNavigate();
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      px={"2em"}
      position={"sticky"}
      top={0}
      zIndex={999}
      //   border={"1px solid black"}
      backgroundColor={"white"}
      boxShadow={
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
      }
    >
      <Center
        // border={"1px solid black"}
        p={2}
        w={"55%"}
        display={"flex"}
        justifyContent={"flex-end"}
      >
        <Image
          src={logo}
          alt="logo"
          w={"10rem"}
          onClick={() => navigateTo("/")}
        />
      </Center>
      <Center
        w={"40%"}
        // border={"1px solid black"}
        display={"flex"}
        justifyContent={"flex-end"}
      >
        {/* Login section */}
        {/* <Center
          display={"flex"}
          gap={4}
          border={"2px solid #DC6E66"}
          h={"3rem"}
          pl={"1rem"}
          borderRadius={"2.5rem"}
        >
          <Text>Become a Member</Text>
          <Button
            colorScheme="red"
            backgroundColor={"#DC6E66"}
            _hover={{ backgroundColor: "#DC6E6F", color: "black" }}
            borderRadius={"2.5rem"}
            color={"white"}
            w={"8rem"}
            h={"3rem"}
          >
            Login
          </Button>
        </Center> */}
        <Menu />
      </Center>
    </Flex>
  );
}
