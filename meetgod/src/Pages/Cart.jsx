import React, { useState } from "react";
import Navbar from "../Components/Navbar_Components/Navbar";
import MobNav from "../Components/Navbar_Components/MobNav";
import { Box, Flex, Grid, Image, Text, Button } from "@chakra-ui/react";
import CartProducts from "../Components/Cart_Components/CartProducts";
import { products } from "../LocalData/Posts";
import PriceDetails from "../Components/Cart_Components/PriceDetails";
import AddressModal from "../Components/Cart_Components/AddressModal";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (num) => {
    setQuantity((prev) => prev + num);
  };

  return (
    <Box pb="50px">
      <Navbar />
      <MobNav />
      <Flex
        w="100%"
        justifyContent={"center"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        gap={{ base: "10px", md: "20px", lg: "30px" }}
        mt={{ base: "10px", md: "20px", lg: "20px" }}
        fontSize={"14px"}
      >
        <Grid
          w={{ base: "100%", md: "100%", lg: "50%" }}
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
          w={{ base: "100%", md: "100%", lg: "26%" }}
          bgColor="white"
          p="10px"
          border="1px solid #EBEBEB"
          h="fit-content"
        >
          {/* Address Section */}

          <Box borderTop="1px solid #EBEBEB" pt="5px">
            <Text fontSize="16px" fontWeight="500" color="#666666">
              Address?
            </Text>
            <Flex pb="10px" mt="10px">
              <AddressModal/>
            </Flex>
          </Box>

          {/* Price Details */}

          <PriceDetails />
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
