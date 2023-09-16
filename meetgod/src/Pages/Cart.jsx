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
      <Flex w="100%" justifyContent={"center"} gap="30px" mt="20px">
        <Grid w="50%" gap="10px" bgColor={"white"} p="10px">
          {products.length > 0 &&
            products?.map((elem) => {
              return (
                <Flex
                  bgColor="white"
                  p="5px"
                  key={elem._id}
                  border={"1px solid #EBEBEB"}
                  borderRadius="10px"
                  gap="10px"
                >
                  <Image src={elem.image} w={{ base: "", md: "", lg: "26%" }} />
                  <Box>
                    <Box>
                      <Text>Product by {elem.brand}</Text>
                      <Text>{elem.title}</Text>
                    </Box>
                    <Flex></Flex>
                    <Flex textAlign={"center"} gap="5px">
                      {elem.discount !== 0 && (
                        <Text color="green">-{elem.discount}%</Text>
                      )}
                      <Text>₹{Math.floor(elem.price)}</Text>
                    </Flex>
                    {elem.discount !== 0 && (
                      <Text color="green">
                        You are saving ₹
                        {Math.floor((elem.price / 100) * elem.discount)} on this{" "}
                        {elem.category}
                      </Text>
                    )}
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
