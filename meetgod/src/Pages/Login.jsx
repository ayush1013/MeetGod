import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLoginPost } from "../Redux/AuthReducer/action";

const intialUserData = {
  email: "",
  password: "",
};

const Login = () => {
  const [userData, setUserData] = useState(intialUserData);
  const [confirmPass, setConfirmPass] = useState("");
  const { token, isLoading, isError } = useSelector(
    (store) => store.AuthReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const location = useLocation();
  const buttonPressRef = useRef(null);

  console.log("location in login", location);
  const reirectTo = location.state?.redirectPath || "/";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData, confirmPass);

    if (userData.email && userData.password) {
      dispatch(userLoginPost(userData));
    } else {
      toast({
        title: "Wrong Credentials",
        description: "Wrong Email or Password",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  // console.log("token", token);
  // console.log("isError", isError);

  const handleKeyPress = (e) => {
    // console.log(e);
    if (e.key === "Enter") {
      e.preventDefault();
      buttonPressRef.current.click();
    }
  };

  useEffect(() => {
    if (token && !isError) {
      toast({
        title: "Login Success",
        description: "You have uccessfully Loged in",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      setTimeout(() => {
        navigate(reirectTo);
      }, 1000);
    } else if (isError === "Wrong password") {
      toast({
        title: "Wrong Password",
        description: "Wrong Password",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else if (isError === "User does not exist with this email") {
      toast({
        title: "Email Is Not Valid",
        description: "User does not exist with this email",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  }, [isError, token]);

  useEffect(() => {
    document.title = "Login";
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

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
        <form onSubmit={handleSubmit}>
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
              value={userData.email}
              name="email"
              onChange={handleChange}
              focusBorderColor="#F7F7F7"
              onKeyDown={handleKeyPress}
            />
            <Input
              placeholder="Password"
              value={userData.password}
              name="password"
              onChange={handleChange}
              focusBorderColor="#F7F7F7"
              onKeyDown={handleKeyPress}
            />
            <Button
              isLoading={isLoading}
              loadingText="Loging..."
              type="submit"
              // display={"block"}
              w="50%"
              m="auto"
              color={"white"}
              h={{ base: "40px", md: "40px", lg: "40px" }}
              fontSize={{ base: "22px", md: "22px", lg: "22px" }}
              bgGradient="linear(to-l, #FFCC57, #F4C50F, #FFCC57)"
              _hover={{ opacity: 0.7 }}
              _focus={{ outline: "none" }}
              ref={buttonPressRef}
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
