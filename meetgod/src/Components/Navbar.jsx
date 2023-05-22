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
import {Link} from "react-router-dom"

const Navbar = () => {
  const [section, setSection] = useState("home");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  console.log(section);

  return (
    <Flex
      h={{ base: "50px", md: "65px", lg: "65" }}
      w="100%"
      alignItems={"center"}
      pl={["0px", "10px", "20px", "80px"]}
      bgColor="white"
      boxSizing="borderBox"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      zIndex={10}
      position={"sticky"}
      top="0"
    >
      <Flex w={{ base: "90%", md: "auto", lg: "auto" }}>
        <Image
          src="meetgod-logo.png"
          w={{ base: "48px", md: "62px", lg: "62px" }}
          borderRadius={"15%"}
        />
        <Flex
          alignItems={"center"}
          pl={{ base: "8px", md: "20px", lg: "30px" }}
          w={{ base: "100%", md: "auto", lg: "auto" }}
        >
          <Input
            placeholder="Search"
            h={{ base: "35px", md: "40px", lg: "40px" }}
            w={{ base: "100%", md: "220px", lg: "300px" }}
          />
          <Box cursor={"pointer"}>
            <SearchIcon fontSize="large" />
          </Box>
        </Flex>
      </Flex>

      {/* Hamburger */}

      <Box
        ref={btnRef}
        onClick={onOpen}
        display={{ base: "box", md: "none", lg: "none" }}
        ml="5px"
      >
        <MenuRoundedIcon
          style={{
            fontSize: "32px",
          }}
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={"18px"} >Create your account / Login</DrawerHeader>

          <DrawerBody>
            <Grid
              gridTemplateColumns="repeat(2,1fr)"
              rowGap={"20px"}
            >
              <Box
                onClick={() => setSection("home")}
                value="home"
                textAlign={"center"}
              >
                <HomeIcon
                  style={{
                    color: section == "home" ? "black" : "#666666",
                    fontSize: "32px",
                    // marginBottom: "-8px",
                  }}
                />
                <Text
                  color={section == "home" ? "black" : "#666666"}
                  textAlign={"center"}
                  // fontSize={"12px"}
                  borderBottom={section == "home" ? "2px solid black" : "none"}
                >
                  Home
                </Text>
              </Box>
              <Box
                onClick={() => setSection("post")}
                value="post"
                textAlign={"center"}
              >
                <PostAddSharpIcon
                  style={{
                    color: section == "post" ? "black" : "#666666",
                    fontSize: "32px",
                    // marginBottom: "-8px",
                  }}
                />
                <Text
                  color={section == "post" ? "black" : "#666666"}
                  textAlign={"center"}
                  // fontSize={"12px"}
                  borderBottom={section == "post" ? "2px solid black" : "none"}
                >
                  My Posts
                </Text>
              </Box>

              <Box
                onClick={() => setSection("spiritual")}
                value="spiritual"
                textAlign={"center"}
              >
                <SpaIcon
                  style={{
                    color: section == "spiritual" ? "black" : "#666666",
                    fontSize: "32px",
                    // marginBottom: "-8px",
                  }}
                />
                <Text
                  color={section == "spiritual" ? "black" : "#666666"}
                  textAlign={"center"}
                  // fontSize={"12px"}
                  borderBottom={
                    section == "spiritual" ? "2px solid black" : "none"
                  }
                >
                  Spiritual
                </Text>
              </Box>

              <Box
                onClick={() => setSection("shop")}
                value="shop"
                textAlign={"center"}
              >
                <ShoppingCartIcon
                  style={{
                    color: section == "shop" ? "black" : "#666666",
                    fontSize: "32px",
                    // marginBottom: "-8px",
                  }}
                />
                <Text
                  color={section == "shop" ? "black" : "#666666"}
                  textAlign={"center"}
                  // fontSize={"12px"}
                  borderBottom={section == "shop" ? "2px solid black" : "none"}
                >
                  Shop
                </Text>
              </Box>

              <Box
                onClick={() => setSection("cart")}
                value="cart"
                textAlign={"center"}
              >
                <LocalMallIcon
                  style={{
                    color: section == "cart" ? "black" : "#666666",
                    fontSize: "32px",
                    // marginBottom: "-8px",
                  }}
                />
                <Text
                  color={section == "cart" ? "black" : "#666666"}
                  // fontSize={"12px"}
                  textAlign={"center"}
                  borderBottom={section == "cart" ? "2px solid black" : "none"}
                >
                  Cart
                </Text>
              </Box>

              <Box
                onClick={() => setSection("profile")}
                value="profile"
                textAlign={"center"}
              >
                <SettingsRoundedIcon
                  style={{
                    color: section == "profile" ? "black" : "#666666",
                    fontSize: "32px",
                    // marginBottom: "-8px",
                  }}
                />
                <Text
                  color={section == "profile" ? "black" : "#666666"}
                  textAlign={"center"}
                  // fontSize={"12px"}
                  borderBottom={
                    section == "profile" ? "2px solid black" : "none"
                  }
                >
                  Settings
                </Text>
              </Box>
            </Grid>
          </DrawerBody>
          <DrawerFooter >
              <Button w="100%">
                Logout
              </Button>
            </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Flex
        display={{ base: "none", md: "flex", lg: "flex" }}
        gap={{base:"30px", md: "30px", lg: "40px"}}
        ml={{base:"10%", md: "10%", lg: "16%"}}
        cursor={"pointer"}
      >
        <Link to="/">
        <Box
          onClick={() => setSection("home")}
          value="home"
          textAlign={"center"}
        >
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
            borderBottom={section == "home" ? "2px solid black" : "none"}
          >
            Home
          </Text>
        </Box>
        </Link>
      
      <Link to="/posts">
        <Box
          onClick={() => setSection("post")}
          value="post"
          textAlign={"center"}
        >
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
            borderBottom={section == "post" ? "2px solid black" : "none"}
          >
            My Posts
          </Text>
        </Box>
        </Link>
        
      <Link to="/spiritual" >
        <Box
          onClick={() => setSection("spiritual")}
          value="spiritual"
          textAlign={"center"}
        >
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
            borderBottom={section == "spiritual" ? "2px solid black" : "none"}
          >
            Spiritual
          </Text>
        </Box>
        </Link>
        <Box
          onClick={() => setSection("profile")}
          value="profile"
          textAlign={"center"}
        >
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
            borderBottom={section == "profile" ? "2px solid black" : "none"}
          >
            Profile
          </Text>
        </Box>

        <Link to="/products">
        <Box
          onClick={() => setSection("shop")}
          value="shop"
          textAlign={"center"}
        >
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
            borderBottom={section == "shop" ? "2px solid black" : "none"}
          >
            Shop
          </Text>
        </Box>
        </Link>
        
        <Link to="cart" >
        <Box
          onClick={() => setSection("cart")}
          value="cart"
          textAlign={"center"}
        >
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
            borderBottom={section == "cart" ? "2px solid black" : "none"}
          >
            Cart
          </Text>
        </Box>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
