import React, { useState } from "react";
import Navbar from "../Components/Navbar_Components/Navbar";
import MobNav from "../Components/Navbar_Components/MobNav";
import { Box, Flex, Grid, Image, Text, Button } from "@chakra-ui/react";
import CartProducts from "../Components/Cart_Components/CartProducts";
import { products } from "../LocalData/Posts";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <MobNav />
      <Flex
        w="100%"
        justifyContent={"center"}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        gap={{ base: "10px", md: "20px", lg: "30px" }}
        mt={{ base: "10px", md: "20px", lg: "20px" }}
        fontSize={"14px"}
      >

        <Grid
          w={{ base: "100%", md: "65%", lg: "50%" }}
          gap="10px"
          bgColor={"white"}
          p="10px"
        >
          {products.length > 0 &&
            products?.map((elem) => {
              return <CartProducts elem={elem} />
            })}
        </Grid>

        <Box
          // border="1px solid black"
          w={{ base: "100%", md: "28%", lg: "25%" }}
          bgColor="white"
        >
          <Text>Price Details </Text>
        </Box>
      </Flex>
    </div>
  );
};

export default Cart;
