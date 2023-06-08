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
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FilterSortBar from "./FilterSortBar";
import Sections from "./Sections";

const token = true;

const Navbar = ({ page }) => {
  const location = useLocation();
  const route = location.pathname;
  const [section, setSection] = useState(route || "/");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isHover, setIsHover] = useState(false);

  console.log(isHover && "Hello!");

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
          <DrawerHeader fontSize={"18px"}>
            Create your account / Login
          </DrawerHeader>

          <DrawerBody>
            <FilterSortBar page={page} />
          </DrawerBody>

          <DrawerFooter>
            <Button w="100%">Logout</Button>
          </DrawerFooter>
          
        </DrawerContent>
      </Drawer>

      <Sections
        setSection={setSection}
        section={section}
        isHover={isHover}
        setIsHover={setIsHover}
      />
    </Flex>
  );
};

export default Navbar;
