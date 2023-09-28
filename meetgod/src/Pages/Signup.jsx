import {
  Box,
  Button,
  Grid,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signupReset, userSignupPost } from "../Redux/AuthReducer/action";

const intialUserData = {
  name: "",
  lastname: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [userData, setUserData] = useState(intialUserData);
  const [confirmPass, setConfirmPass] = useState("");
  const signupStatus = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const buttonPressRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData, confirmPass);

    if (
      userData.email &&
      userData.password &&
      userData.name &&
      userData.lastname
    ) {
      if (confirmPass === userData.password) {
        dispatch(userSignupPost(userData));
      } else {
        // alert("Passwords do not match");
        toast({
          title: "Wrong Password",
          description: "Passwords do not match",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    } else {
      toast({
        title: "Wrong Credentials",
        description: "please fill all required fields",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };
  console.log("signupSuccess", signupStatus.signupSuccess);
  console.log("isLoading", signupStatus.isLoading);

  useEffect(() => {
    if (signupStatus.signupSuccess === "Successfull") {
      toast({
        title: "Signup Success",
        description: "You have uccessfully signed up please login",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      navigate("/login");
      dispatch(signupReset());
    } else if (signupStatus.signupSuccess === "User already exists") {
      toast({
        title: "Email Already Exists",
        description:
          "This email is already registered please use a different email address",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  }, [signupStatus.signupSuccess]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      buttonPressRef.current.click();
    }
  };

  useEffect(() => {
    document.title = "Signup";
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
            p="20px"
            m="auto"
            borderRadius={"0px 0px 10px 10px"}
            color="#F7F7F7"
          >
            <Input
              placeholder="First Name"
              value={userData.name}
              name="name"
              onChange={handleChange}
              focusBorderColor="#F7F7F7"
              onKeyDown={handleKeyPress}
            />
            <Input
              placeholder="Last Name"
              value={userData.lastname}
              name="lastname"
              onChange={handleChange}
              focusBorderColor="#F7F7F7"
              onKeyDown={handleKeyPress}
            />
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
            <Input
              placeholder="Confirm Password"
              value={confirmPass}
              name="con_pass"
              onChange={(e) => setConfirmPass(e.target.value)}
              focusBorderColor="#F7F7F7"
              onKeyDown={handleKeyPress}
            />
            <Button
              isLoading={signupStatus.isLoading}
              loadingText="Signing up..."
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
              {" "}
              Signup{" "}
            </Button>
          </Grid>
        </form>
      </Box>

      <Box w={{ base: "300px", md: "400px", lg: "400px" }} m="auto">
        <Link to="/login">
          <Text textAlign={"center"} color={"#1A0DAB"} mt="10px">
            Already have an Account Login here →
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Signup;
