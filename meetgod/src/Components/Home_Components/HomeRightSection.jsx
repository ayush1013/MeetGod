import React, { useRef, useState } from "react";
import { Box, Button, Flex, Grid, Image, Input, Text } from "@chakra-ui/react";
import { godsArray, postData, products } from "../../LocalData/Posts";
import { Link } from "react-router-dom";

const HomeRightSection = () => {
  return (
    <Box
      display={{ base: "none", md: "none", lg: "block" }}
      w="25%"
      // border="1px solid red"
      h="90vh"
      pb="20px"
      pt={{ base: "20px", md: "30px", lg: "40px" }}
      top="65px"
      position="sticky"
      overflowY="scroll"
      sx={{
        "&::-webkit-scrollbar": {
          width: "0px",
          // visibility:"hidden"
        },
      }}
    >
      <Box
        textAlign="center"
        bgColor={"white"}
        w={{ base: "100%", md: "68%", lg: "80%" }}
        m="auto"
        p="15px"
        borderRadius={"10px"}
      >
        <Text fontSize="18px" fontWeight="500">
          Sacred Savings Await
        </Text>
        <Text fontWeight="500" color="#666666">
          Shop Now for the Best Deals!
        </Text>
      </Box>
      {/* <Text>Sacred Savings Await: Shop Now for the Best Deals</Text> */}
      <Grid
        m="auto"
        mt={{ base: "10px", md: "10px", lg: "10px" }}
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(1,1fr)",
        }}
        w={{ base: "100%", md: "68%", lg: "80%" }}
        // border="1px solid black"
        gap={{ base: "20px", md: "25px", lg: "10px" }}
        // bgColor={"white"}
        // p="20px"
      >
        {products?.map((elem) => {
          return (
            <Box
              key={elem._id}
              // border="1px solid black"
              p="15px"
              bgColor={"white"}
              borderRadius={"10px"}
              border={"1px solid #EBEBEB"}
              borderBottom={"2px solid #EBEBEB"}
            >
              <Link to={`/product/${elem._id}`}>
                <Image
                  src={elem.image}
                  h={{ base: "150px", md: "200px", lg: "200px" }}
                  m="auto"
                />
              </Link>
              <Box
                mt={"5px"}
                // border={"1px solid black"}
                // h={{ md: "", lg: "80px" }}
              >
                <Link to={`/product/${elem._id}`}>
                  <Text
                    fontSize={{ base: "16px", md: "18px", lg: "18px" }}
                    fontWeight={{ base: "500", md: "bold", lg: "bold" }}
                    h={{ base: "23px", md: "auto", lg: "auto" }}
                    overflow={"hidden"}
                  >
                    {elem.title}
                  </Text>
                </Link>
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "16px" }}
                  color={"green"}
                  fontWeight={{ base: "500", md: "bold", lg: "bold" }}
                >
                  ₹{elem.price}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Grid>
      <Link to="/products">
        <Text textAlign={"left"} pl="32px" color={"#1A0DAB"} mt="10px">
          Explore more →
        </Text>
      </Link>
    </Box>
  );
};

export default HomeRightSection;
