import { Box, Flex, Image, Input } from "@chakra-ui/react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';
import SpaIcon from '@material-ui/icons/Spa';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import React from "react";

const Navbar = () => {
  return (
    <Flex
      h="70px"
      w="100%"
      alignItems={"center"}
      pl="65px"
      bgColor="white"
      boxSizing="borderBox"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
    >
      <Flex>
        <Box>
          <Image src="meetgod-logo.png" w="65px" />
        </Box>
        <Flex alignItems={"center"} pl="30px">
          <Input placeholder="Search" w="300px" />
          <Box cursor={"pointer"}>
            <SearchIcon fontSize="large" />
          </Box>
        </Flex>
      </Flex>
      <Flex>
        <Box>
            <HomeIcon fontSize="large" />
        </Box>
        <Box>
            <PostAddSharpIcon fontSize="large"/>
        </Box>
        <Box>
            <SpaIcon fontSize="large" />
        </Box>
        <Box>
            <ShoppingCartIcon fontSize="large"/>
        </Box>
        <Box>
            <AccountBoxIcon fontSize="large"/>
        </Box>
        <Box>
            <LocalMallIcon fontSize="large" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
