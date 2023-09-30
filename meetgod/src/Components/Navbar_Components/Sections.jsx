import { Box, Flex, Text } from "@chakra-ui/react";
import HomeIcon from "@material-ui/icons/Home";
import PostAddSharpIcon from "@material-ui/icons/PostAddSharp";
import SpaIcon from "@material-ui/icons/Spa";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProfileDrawer from "./ProfileDrawer";

const Sections = ({ section, setSection, setIsHover, isHover }) => {
  const handleMouseHover = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <Flex
      display={{ base: "none", md: "flex", lg: "flex" }}
      // gap={{ base: "30px", md: "30px", lg: "40px" }}
      justifyContent={"space-around"}
      ml={{ base: "10%", md: "10%", lg: "16%" }}
      cursor={"pointer"}
      w={{ base: "40%", md: "45%", lg: "40%" }}
    >
      <Link to="/">
        <Box onClick={() => setSection("/")} value="/" textAlign={"center"}>
          <HomeIcon
            style={{
              color: section == "/" ? "black" : "#666666",
              fontSize: "32px",
              marginBottom: "-8px",
            }}
          />
          <Text
            color={section == "/" ? "black" : "#666666"}
            textAlign={"center"}
            fontSize={"12px"}
            borderBottom={section == "/" ? "2px solid black" : "none"}
          >
            Home
          </Text>
        </Box>
      </Link>

      <Link to="/posts">
        <Box
          onClick={() => setSection("/posts")}
          value="/posts"
          textAlign={"center"}
          w="fit-content"
        >
          <PostAddSharpIcon
            style={{
              color: section == "/posts" ? "black" : "#666666",
              fontSize: "32px",
              marginBottom: "-8px",
            }}
          />
          <Text
            color={section == "/posts" ? "black" : "#666666"}
            textAlign={"center"}
            fontSize={"12px"}
            borderBottom={section == "/posts" ? "2px solid black" : "none"}
          >
            My Posts
          </Text>
        </Box>
      </Link>

      <Link to="/spiritual">
        <Box
          onClick={() => setSection("/spiritual")}
          value="/spiritual"
          textAlign={"center"}
          position={"relative"}
          zIndex={"11"}
        >
          <SpaIcon
            style={{
              color: section == "/spiritual" ? "black" : "#666666",
              fontSize: "32px",
              marginBottom: "-8px",
            }}
          />
          <Text
            color={section == "/spiritual" ? "black" : "#666666"}
            textAlign={"center"}
            fontSize={"12px"}
            borderBottom={section == "/spiritual" ? "2px solid black" : "none"}
          >
            Spiritual
          </Text>
        </Box>
      </Link>

      <Box
        position="relative"
        onClick={() => setSection("/profile")}
        value="/profile"
        textAlign={"center"}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        zIndex="10"
        // border={"1px solid black"}
      >
        <AccountBoxIcon
          style={{
            color: section == "/profile" ? "black" : "#666666",
            fontSize: "32px",
            marginBottom: "-8px",
          }}
        />
        <Text
          color={section == "/profile" ? "black" : "#666666"}
          textAlign={"center"}
          fontSize={"12px"}
          borderBottom={section == "/profile" ? "2px solid black" : "none"}
        >
          Profile
        </Text>

        {isHover && (
          <ProfileDrawer
            handleMouseHover={handleMouseHover}
            handleMouseOut={handleMouseOut}
          />
        )}
      </Box>

      <Link to="/products">
        <Box
          onClick={() => setSection("/products")}
          value="/products"
          textAlign={"center"}
          position={"relative"}
          zIndex={"11"}
        >
          <ShoppingCartIcon
            style={{
              color: section == "/products" ? "black" : "#666666",
              fontSize: "32px",
              marginBottom: "-8px",
            }}
          />
          <Text
            color={section == "/products" ? "black" : "#666666"}
            textAlign={"center"}
            fontSize={"12px"}
            borderBottom={section == "/products" ? "2px solid black" : "none"}
          >
            Shop
          </Text>
        </Box>
      </Link>

      <Link to="/cart">
        <Box
          onClick={() => setSection("/cart")}
          value="/cart"
          textAlign={"center"}
        >
          <LocalMallIcon
            style={{
              color: section == "/cart" ? "black" : "#666666",
              fontSize: "32px",
              marginBottom: "-8px",
            }}
          />
          <Text
            color={section == "/cart" ? "black" : "#666666"}
            fontSize={"12px"}
            textAlign={"center"}
            borderBottom={section == "/cart" ? "2px solid black" : "none"}
          >
            Cart
          </Text>
        </Box>
      </Link>
    </Flex>
  );
};

export default Sections;

// {isHover && (
//   <Box
//     w={"18%"}
//     position={"absolute"}
//     top={"58px"}
//     // ml="150px"
//     m="auto"
//     borderRadius={"0.5rem"}
//     backgroundColor={"white"}
//     zIndex={"10"}
//     boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
//     fontSize={"0.8rem"}
//     fontWeight={"bold"}
//     // border={"1px solid black"}
//     p={"0.7rem"}
//     onMouseOver={() => setIsHover(true)}
//     onMouseOut={() => setIsHover(false)}
//   >
//     <Grid justify={"space-between"} rowGap={"10px"} w={"95%"}>
//       <Link to="/login">
//         <Text>Login</Text>
//       </Link>
//       <Link to="/signup">
//         <Text>Create an Account</Text>
//       </Link>
//     </Grid>
//     <Box
//       textAlign={"center"}
//       mt={"1rem"}
//       color={"#FF6F61"}
//       _hover={{ color: "#FF6900" }}
//     >
//       <Link to="">Logout</Link>
//     </Box>
//   </Box>
// )}
