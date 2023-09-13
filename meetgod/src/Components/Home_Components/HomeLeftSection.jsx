import React, { useRef, useState } from "react";
import { Box, Button, Flex, Grid, Image, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { godsArray } from "../../LocalData/Posts";

const HomeLeftSection = () => {
  const fileRef = useRef("");
  const [doLike, setDoLike] = useState(false);
  const [doComment, setDoComment] = useState(false);
  const [show, setShow] = useState(false);

  const handleLike = () => {
    setDoLike(!doLike);
  };

  const handleComment = () => {
    setDoComment(!doComment);
  };

  const handleFileClick = () => {
    fileRef.current.click();
  };

  const handleShowAndHide = () => {
    setShow(!show);
  };

  return (
    <Box
      w={{ base: "100%", md: "35%", lg: "25%" }}
      display={{ base: "block", md: "block", lg: "block" }}
    >
      <Box
        w={{ base: "100%", md: "80%", lg: "80%" }}
        p="20px"
        m="auto"
        mt={{ base: "5px", md: "40px", lg: "40px" }}
        textAlign={"center"}
        bgColor="white"
        border={"1px solid #EBEBEB"}
        borderBottom={"2px solid #EBEBEB"}
        borderRadius="10px"
      >
        <Image
          src="Ayush_Verma_Profile_Pic.jpg"
          alt="Ayush"
          border={"1px solid #EBEBEB"}
          borderRadius={"50%"}
          w="150px"
          m="auto"
        />
        <Text fontWeight={"500"}> Ayush Verma </Text>
        <Text fontSize={"13px"} color="#666666">
          Devotee of - Bhagwan Vishnu
        </Text>
      </Box>
      <Box
        display={{ base: !show ? "block" : "none", md: "none", lg: "none" }}
        w={{ base: "100%", md: "80%", lg: "80%" }}
        p="5px"
        m="auto"
        mt={{ base: "5px", md: "10px", lg: "10px" }}
        textAlign={"center"}
        bgColor="white"
        border={"1px solid #EBEBEB"}
        borderBottom={"2px solid #EBEBEB"}
        // borderRadius="10px"
      >
        <Text onClick={handleShowAndHide}>Show More</Text>
      </Box>
      <Box
        display={{ bas: show ? "block" : "none", md: "block", lg: "block" }}
        w={{ base: "100%", md: "80%", lg: "80%" }}
        p="20px"
        m="auto"
        mt={{ base: "5px", md: "10px", lg: "10px" }}
        textAlign={"center"}
        bgColor="white"
        border={"1px solid #EBEBEB"}
        borderBottom={"2px solid #EBEBEB"}
        borderRadius="10px"
      >
        {/* <Image
              src="meetgod-logo2.png"
              w={{ base: "100%", md: "100%", lg: "100%" }}
              borderRadius={"10px"}
              mb="10px"
            /> */}
        <Text fontSize="14px" textAlign={"center"} fontWeight="500">
          Connect on a Deeper Level:
        </Text>
        <Text textAlign={"center"} fontSize={"13px"} color="#666666">
          Learn More about Your Favorite God
        </Text>
        <Grid mt="10px" gap="10px">
          {godsArray.length > 0 &&
            godsArray?.map((elem) => (
              <Flex
                textAlign={"left"}
                w="fit-content"
                fontSize="13px"
                cursor="pointer"
                _hover={{ color: "#1A0DAB" }}
              >
                <Text fontWeight={"500"}>
                  {elem.name}:{" "}
                  <span style={{ fontWeight: "normal", fontSize: "13px" }}>
                    {elem.specialty}
                  </span>
                </Text>
              </Flex>
            ))}
        </Grid>
        <Link to="/spiritual">
          <Text
            textAlign={"right"}
            pl="32px"
            fontSize="13px"
            color={"#1A0DAB"}
            mt="10px"
          >
            Explore more →
          </Text>
        </Link>
      </Box>
      <Text
        display={{ base: show ? "block" : "none", md: "none", lg: "none" }}
        textAlign={"center"}
        onClick={handleShowAndHide}
      >
        Show Less
      </Text>
    </Box>
  );
};

export default HomeLeftSection;
