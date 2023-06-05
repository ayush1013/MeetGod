import React from "react";
import { Box, Button, Grid, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box h="100vh">
      <Box
        m="auto"
        mt={{ base: "20px", md: "40px", lg: "40px" }}
        borderRadius={{ base: "8px", md: "15px", lg: "15px" }}
        w={{ base: "300px", md: "400px", lg: "400px" }}
        bgGradient="linear(to-l, #F79200, #F4C50F, #F79200)"
      >
        <Text
          textAlign={"center"}
          fontSize={{ base: "20px", md: "30px", lg: "30px" }}
          fontFamily="Trebuchet MS"
          fontWeight={"bold"}
          color={"white"}
          textShadow={"0 0 30px white"}
        >
          MEETGOD
        </Text>
      </Box>

      <form>
        <Grid
          w={{ base: "300px", md: "400px", lg: "400px" }}
          rowGap={{ base: "10px", md: "20px", lg: "20px" }}
          backgroundColor="white"
          p="20px"
          m="auto"
          mt="10px"
          borderRadius={"10px"}
        >
          <Input
            placeholder="Email"
            value={""}
            name="last_name"
            onChange={""}
          />
          <Input
            placeholder="Password"
            value={""}
            name="password"
            onChange={""}
          />
          <Button
            display={"block"}
            w="50%"
            m="auto"
            color={"white"}
            h={{ base: "30px", md: "40px", lg: "40px" }}
            fontSize={{ base: "18px", md: "22px", lg: "22px" }}
            bgGradient="linear(to-l, #F79200, #F4C50F, #F79200)"
            _hover={{ opacity: 0.7 }}
            _focus={{ outline: "none" }}
          >
            {" "}
            Signup{" "}
          </Button>
        </Grid>
      </form>
      <Box w={{ base: "300px", md: "400px", lg: "400px" }} m="auto">
        <Link to="/signup">
          <Text textAlign={"center"} color={"#1A0DAB"} mt="10px">
            Don't have an Account create now →
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
