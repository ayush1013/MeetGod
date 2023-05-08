import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PostAddSharpIcon from "@material-ui/icons/PostAddSharp";
import SpaIcon from "@material-ui/icons/Spa";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import React, { useState } from "react";

const Navbar = () => {
  const [section, setSection] = useState("home");

  console.log(section);

  return (
    <Flex
      h="65px"
      w="100%"
      alignItems={"center"}
      pl={["0px","10px","20px","80px"]}
      bgColor="white"
      boxSizing="borderBox"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
    >
      <Flex>
          <Image src="meetgod-logo.png" w={["65px","65px","65px","65px"]} />
        <Flex alignItems={"center"} pl="30px">
          <Input placeholder="Search" w={["100px","150px","200px","300px"]} />
          <Box cursor={"pointer"}>
            <SearchIcon fontSize="large" />
          </Box>
        </Flex>
      </Flex>

      <Flex gap={["10px","20px","20px","40px"]} ml="16%" cursor={"pointer"}>
        <Box onClick={() => setSection("home")} value="home" textAlign={"center"}>
          <HomeIcon
            style={{
              color: section == "home" ? "black" : "#666666",
              fontSize: "32px",
              marginBottom: "-8px",
            }}
          />
          <Text
            color={section == "home" ? "black" : "#666666"}
            textAlign={"center"}
            fontSize={"12px"}
            borderBottom={section == "home" ? "2px solid black":"none"}
          >
            Home
          </Text>
        </Box>
        <Box onClick={() => setSection("post")} value="post" textAlign={"center"}>
          <PostAddSharpIcon
            style={{
              color: section == "post" ? "black" : "#666666",
              fontSize: "32px",
              marginBottom: "-8px",
            }}
          />
          <Text
            color={section == "post" ? "black" : "#666666"}
            textAlign={"center"}
            fontSize={"12px"}
            borderBottom={section == "post" ? "2px solid black":"none"}
          >
           My Posts
          </Text>
        </Box>
        
        <Box onClick={() => setSection("spiritual")} value="spiritual" textAlign={"center"}>
          <SpaIcon
            style={{
              color: section == "spiritual" ? "black" : "#666666",
              fontSize: "32px",
              marginBottom: "-8px",
            }}
          />
          <Text
            color={section == "spiritual" ? "black" : "#666666"}
            textAlign={"center"}
            fontSize={"12px"}
            borderBottom={section == "spiritual" ? "2px solid black":"none"}
          >
            Spiritual
          </Text>
        </Box>
        <Box onClick={() => setSection("profile")} value="profile" textAlign={"center"}>
          <AccountBoxIcon
            style={{
              color: section == "profile" ? "black" : "#666666",
              fontSize: "32px",
              marginBottom: "-8px",
            }}
          />
          <Text
            color={section == "profile" ? "black" : "#666666"}
            textAlign={"center"}
            fontSize={"12px"}
            borderBottom={section == "profile" ? "2px solid black":"none"}
          >
            Profile
          </Text>
        </Box>
        <Box onClick={() => setSection("shop")} value="shop" textAlign={"center"}>
          <ShoppingCartIcon
            style={{
              color: section == "shop" ? "black" : "#666666",
              fontSize: "32px",
              marginBottom: "-8px",
            }}
          />
          <Text
            color={section == "shop" ? "black" : "#666666"}
            textAlign={"center"}
            fontSize={"12px"}
            borderBottom={section == "shop" ? "2px solid black":"none"}
          >
            Shop
          </Text>
        </Box>
        
        <Box onClick={() => setSection("cart")} value="cart" textAlign={"center"}>
          <LocalMallIcon
            style={{
              color: section == "cart" ? "black" : "#666666",
              fontSize: "32px",
              marginBottom: "-8px",
            }}
          />
          <Text
            color={section == "cart" ? "black" : "#666666"}
            fontSize={"12px"}
            textAlign={"center"}
            borderBottom={section == "cart" ? "2px solid black":"none"}
          >
            Cart
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
