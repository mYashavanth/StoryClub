import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "./Images/logo.png";
import Menu from "../Components/Menu/Menu";

export default function Navbar() {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      p={2}
      position={"sticky"}
      top={0}
      zIndex={999}
      border={"1px solid black"}
    >
      <Center
        border={"1px solid black"}
        p={2}
        w={"53%"}
        display={"flex"}
        justifyContent={"flex-end"}
      >
        <Image src={logo} alt="logo" w={"10rem"} />
      </Center>
      <Center
        w={"40%"}
        border={"1px solid black"}
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
