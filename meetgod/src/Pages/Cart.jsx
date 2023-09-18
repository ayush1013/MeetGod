import React, { useState } from "react";
import Navbar from "../Components/Navbar_Components/Navbar";
import MobNav from "../Components/Navbar_Components/MobNav";
import { Box, Flex, Grid, Image, Text, Button } from "@chakra-ui/react";
import CartProducts from "../Components/Cart_Components/CartProducts";
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
          h="fit-content"
        >
          {products.length > 0 &&
            products?.map((elem) => {
              return (
                <CartProducts
                  quantity={quantity}
                  handleQuantity={handleQuantity}
                  elem={elem}
                />
              );
            })}
        </Grid>

        <Box
          // border="1px solid black"
          w={{ base: "100%", md: "28%", lg: "25%" }}
          bgColor="white"
          p="10px"
          border="1px solid #EBEBEB"
        >
          <Text fontSize="16px" fontWeight="500" color="#666666" >
            Price Details
            <span style={{ paddingLeft: "5px", color: "tomato" }}>
              ({products.length > 0 && products.length} Items)
            </span>
          </Text>
          <Grid
            gap="5px"
            mt="5px"
            pt="5px"
            pb="5px"
            borderTop="1px solid #EBEBEB"
            borderBottom="1px solid #EBEBEB"
            gridTemplateColumns={"repeat(2, 1fr)"}
            justifyContent={"space-between"}
          >
            <Text>Totla MRP</Text>
            <Text textAlign={"right"}>₹500</Text>
            <Text>Discount on MRP</Text>
            <Text textAlign={"right"} color="green.500">
              -₹50
            </Text>
            <Text> Coupon Discount</Text>
            <Text textAlign={"right"} cursor="pointer" color="tomato">
              {" "}
              Apply Coupon{" "}
            </Text>
            <Text> Convenience Fee </Text>
            <Text textAlign={"right"}>₹100</Text>
          </Grid>
          <Flex justifyContent={"space-between"} mt="5px"  fontWeight={"500"} >
            <Text>Total Amount</Text>
            <Text>₹500</Text>
          </Flex>
          <Button colorScheme="purple" w="100%" mt="20px" >
            Place Order
          </Button>
        </Box>
      </Flex>
    </div>
  );
};

export default Cart;
