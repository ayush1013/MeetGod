import React, { useState } from "react";
import { Box, Flex, Grid, Image, Text, Button } from "@chakra-ui/react";

const CartProducts = ({ elem, handleQuantity,quantity }) => {

  return (
    <Flex
      bgColor="white"
      p="10px"
      key={elem._id}
      border={"1px solid #EBEBEB"}
      borderRadius="5px"
      gap="10px"
      h="fit-content"
    >
      <Box w={{ base: "30%", md: "25%", lg: "28%" }}>
        <Image src={elem.image} w={{ base: "100%", md: "100%", lg: "100%" }} />
      </Box>
      <Grid justifyContent={"space-between"}>
        <Box>
          <Text color="#666666">Product by {elem.brand}</Text>
          <Text fontWeight={"500"}>{elem.title}</Text>
        </Box>
        <Flex textAlign={"center"} gap="5px">
          {elem.discount !== 0 && <Text color="green">-{elem.discount}%</Text>}

          {elem.discount !== 0 && (
            <Text
              color="#B096AB"
              fontSize={"13px"}
              textDecoration={"line-through"}
            >
              {Math.floor(elem.price)}
            </Text>
          )}

          <Text fontWeight={"500"}>
            ₹
            {elem.discount !== 0
              ? Math.floor(elem.price - (elem.price / 100) * elem.discount)
              : elem.price}
          </Text>
        </Flex>

        <Box>
          <Text>Qty</Text>
          <Flex gap="2px"  >
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
            You are saving ₹{Math.floor((elem.price / 100) * elem.discount)} on
            this {elem.category}
          </Text>
        )}
        <Flex gap="2px">
          <Button size="xs" variant="outline" colorScheme="purple">Move to Wishlist</Button>
          <Button size="xs" variant="outline" colorScheme="red"  >Remove</Button>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default CartProducts;
