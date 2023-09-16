import React, { useState } from "react";
import Navbar from "../Components/Navbar_Components/Navbar";
import MobNav from "../Components/Navbar_Components/MobNav";
import { Box, Flex, Grid, Image, Text, Button } from "@chakra-ui/react";
import { products } from "../LocalData/Posts";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (num) => {
    setQuantity((prev) => prev + num);
  };

  return (
    <div>
      <Navbar />
      <MobNav />
      <Flex w="100%" justifyContent={"center"} gap="30px" mt="20px" fontSize={"14px"} >
        <Grid w="50%" gap="10px" bgColor={"white"} p="10px">
          {products.length > 0 &&
            products?.map((elem) => {
              return (
                <Flex
                  bgColor="white"
                  p="10px"
                  key={elem._id}
                  border={"1px solid #EBEBEB"}
                  borderRadius="5px"
                  gap="10px"
                >
                  <Image src={elem.image} w={{ base: "", md: "", lg: "28%" }} />
                  <Grid justifyContent={"space-between"}>
                    <Box>
                      <Text color="#666666">Product by {elem.brand}</Text>
                      <Text fontWeight={"500"}>{elem.title}</Text>
                    </Box>
                    <Flex textAlign={"center"} gap="5px">
                      {elem.discount !== 0 && (
                        <Text color="green">-{elem.discount}%</Text>
                      )}
                      <Text fontWeight={"500"}>₹{Math.floor(elem.price)}</Text>
                    </Flex>

                    <Box>
                      <Text>Qty</Text>
                      <Flex gap="2px">
                        <Button
                          size="xs"
                          onClick={() => handleQuantity(-1)}
                          isDisabled={quantity == 1}
                        >
                          -
                        </Button>
                        <Button size="xs">{quantity}</Button>
                        <Button
                          size="xs"
                          onClick={() => handleQuantity(1)}
                          isDisabled={quantity === 10}
                        >
                          +
                        </Button>
                      </Flex>
                    </Box>

                    {elem.discount !== 0 && (
                      <Text color="green">
                        You are saving ₹
                        {Math.floor((elem.price / 100) * elem.discount)} on this{" "}
                        {elem.category}
                      </Text>
                    )}
                    <Flex gap="2px">
                      <Button size="xs" >Move to Wishlist</Button>
                      <Button size="xs" >Remove</Button>
                    </Flex>
                  </Grid>
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
