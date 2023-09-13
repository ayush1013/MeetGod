import React from "react";
import { Box, Button, Grid, Image, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      h="100vh"
      bgColor={"#F3F2EF"}
      pt={{ base: "20px", md: "40px", lg: "40px" }}
    >
      <Box
        m="auto"
        borderRadius={{ base: "8px", md: "15px", lg: "15px" }}
        w={{ base: "95%", md: "80%", lg: "400px" }}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
        <Image
          src="meetgod-logo2.png"
          w={{ base: "100%", md: "100%", lg: "100%" }}
          borderRadius={"10px 10px 0px 0px"}
        />
        <form>
          <Grid
            h={{ base: "70vh", md: "auto", lg: "auto" }}
            w="100%"
            rowGap={{ base: "10px", md: "20px", lg: "20px" }}
            backgroundColor="#3B3B3B"
            p={{ base: "50px 20px 60% 20px", md: "20px", lg: "20px" }}
            m="auto"
            borderRadius={"0px 0px 10px 10px"}
            color="#F7F7F7"
          >
            <Input
              placeholder="Email"
              value={""}
              name="last_name"
              onChange={""}
              focusBorderColor="#F7F7F7"
            />
            <Input
              placeholder="Password"
              value={""}
              name="password"
              onChange={""}
              focusBorderColor="#F7F7F7"
            />
            <Button
              display={"block"}
              w="50%"
              m="auto"
              color={"white"}
              h={{ base: "40px", md: "40px", lg: "40px" }}
              fontSize={{ base: "22px", md: "22px", lg: "22px" }}
              bgGradient="linear(to-l, #FFCC57, #F4C50F, #FFCC57)"
              _hover={{ opacity: 0.7 }}
              _focus={{ outline: "none" }}
            >
              Login
            </Button>
          </Grid>
        </form>
      </Box>

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
