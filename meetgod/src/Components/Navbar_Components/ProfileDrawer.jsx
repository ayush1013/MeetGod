import React, { useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileDrawer = ({ handleMouseHover, handleMouseOut }) => {
  const { token, userDetails } = useSelector((store) => store.AuthReducer);

  useEffect(() => {}, [token, userDetails]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    window.location.reload();
  };

  return (
    <Box
      position={"absolute"}
      // border="1px solid black"
      top={"0px"}
      left={"-80px"}
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseOut}
    >
      <Box
        position="relative"
        zIndex="10"
        bgColor="white"
        mt="56px"
        w="200px"
        p="10px"
        borderRadius={"5px"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        textAlign={"left"}
        fontWeight={"500"}
      >
        {token ? (
          <Flex alignItems={"center"} gap="10px">
            <Image src="profileIcon3.png" w="40px" />
            <Text>
              {userDetails[0].name} {userDetails[0].lastname}
            </Text>
          </Flex>
        ) : (
          <Box>
            <Link to="/login">
              <Text>Login</Text>
            </Link>
            <Link to="/signup">
              <Text>Create an Account</Text>
            </Link>
          </Box>
        )}
        <Box
          textAlign={"center"}
          mt={"1rem"}
          color={"#FF6F61"}
          _hover={{ color: "#FF6900" }}
        >
          <Text onClick={handleLogout}>Logout</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileDrawer;
