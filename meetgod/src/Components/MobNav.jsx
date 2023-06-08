import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Grid,
    Image,
    Input,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import SearchIcon from "@material-ui/icons/Search";
  import HomeIcon from "@material-ui/icons/Home";
  import PostAddSharpIcon from "@material-ui/icons/PostAddSharp";
  import SpaIcon from "@material-ui/icons/Spa";
  import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
  import LocalMallIcon from "@material-ui/icons/LocalMall";
  import AccountBoxIcon from "@material-ui/icons/AccountBox";
  import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
  import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
  import React, { useState } from "react";
  import { Link, useLocation } from "react-router-dom";
  import FilterSortBar from "./FilterSortBar";
  import Sections from "./Sections";

const MobNav = () => {
    const location = useLocation();
  const route = location.pathname;
  const [section, setSection] = useState(route || "/");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isHover, setIsHover] = useState(false);

  console.log(isHover && "Hello!");
  return (
    <Flex
        display={{ base: "flex", md: "none", lg: "none" }}
        // gap={{ base: "30px", md: "30px", lg: "40px" }}
        justifyContent={"space-around"}
        w={"100%"}
        ml={{ base: "auto", md: "10%", lg: "16%" }}
        cursor={"pointer"}
        border={"1px solid red"}
        position={"fixed"}
        bgColor={"white"}
        zIndex={"10"}
        top={"50px"}
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
              borderBottom={
                section == "/spiritual" ? "2px solid black" : "none"
              }
            >
              Spiritual
            </Text>
          </Box>
        </Link>
        <Box
          onClick={() => setSection("/profile")}
          value="/profile"
          textAlign={"center"}
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
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
        </Box>

        {isHover && (
          <Box
            w={"18%"}
            position={"absolute"}
            top={"58px"}
            ml="150px"
            borderRadius={"0.5rem"}
            backgroundColor={"white"}
            zIndex={"10"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            fontSize={"0.8rem"}
            fontWeight={"bold"}
            // border={"1px solid black"}
            p={"0.7rem"}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            <Grid justify={"space-between"} rowGap={"10px"} w={"95%"}>
              <Link to="/login">
                <Text>Login</Text>
              </Link>
              <Link to="/signup">
                <Text>Create an Account</Text>
              </Link>
            </Grid>
            <Box
              textAlign={"center"}
              mt={"1rem"}
              color={"#FF6F61"}
              _hover={{ color: "#FF6900" }}
            >
              <Link to="">Logout</Link>
            </Box>
          </Box>
        )}

        <Link to="/products">
          <Box
            onClick={() => setSection("/products")}
            value="/products"
            textAlign={"center"}
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
  )
}

export default MobNav