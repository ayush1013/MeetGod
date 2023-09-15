import React from "react";
import Navbar from "../Components/Navbar_Components/Navbar";
import MobNav from "../Components/Navbar_Components/MobNav";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { products } from "../LocalData/Posts";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <MobNav />
      <Flex w="100%" justifyContent={"center"} gap="30px">
        <Grid border="1px solid black" w="50%">
          {products.length > 0 &&
            products?.map((elem) => {
              return (
                <Flex key={elem._id}>
                  <Image src={elem.image} />
                  <Box>
                    <Box></Box>
                    <Flex></Flex>
                    <Text></Text>
                  </Box>
                </Flex>
              );
            })}
        </Grid>
        <Box border="1px solid black" w="25%"></Box>
      </Flex>
    </div>
  );
};

export default Cart;
