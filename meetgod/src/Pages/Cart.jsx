import React, { useState } from "react";
import Navbar from "../Components/Navbar_Components/Navbar";
import MobNav from "../Components/Navbar_Components/MobNav";
import { Box, Flex, Grid, Image, Text, Button } from "@chakra-ui/react";
import CartProducts from "../Components/Cart_Components/CartProducts";
import { products } from "../LocalData/Posts";
import PriceDetails from "../Components/Cart_Components/PriceDetails";
import AddressModal from "../Components/Cart_Components/AddressModal";

const address = JSON.parse(localStorage.getItem("address")) || [];

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [addressData, setAddressData] = useState(address || []);

  const handleQuantity = (num) => {
    setQuantity((prev) => prev + num);
  };

  return (
    <Box pb="50px">
      <Navbar />
      <MobNav />

      {/* <Flex border="1px solid black" width={"fit-content"} position="relative" w="500px" h="200px">
        <Box w="100px" h="100px" border="1px solid blue">
          1
        </Box>
        <Box w="100px" h="100px" border="1px solid red">
          2
        </Box>
        <Box w="100px" h="100px" border="1px solid yellow" position="absolute" right="0" bottom="0">
          3
        </Box>
        <Box w="100px" h="100px" border="1px solid green">
          4
        </Box>
      </Flex> */}

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
                  key={elem._id}
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
            <Box pb="10px" mt="10px" position={"relative"} >
              {addressData.length > 0 && (
                <Box border="1px solid #EBEBEB" p="5px" borderRadius="5px" >
                  <Text>{addressData[0].name}</Text>
                  <Text>+91 {addressData[0].mobile}</Text>
                  <Text>
                    {addressData[0].address}, {addressData[0].town}
                  </Text>
                  <Text>{addressData[0].pinCode}</Text>
                  <Text>
                    {addressData[0].city}, {addressData[0].state}
                  </Text>
                </Box>
              )}
              <Box
                width={"fit-content"}
                position={addressData.length > 0 ? "absolute" : "static"}
                right="0"
                top="-4"
                zIndex={1}
                bgColor="white"
                // border="1px solid black"
              >
                <AddressModal />
              </Box>
            </Box>
          </Box>

          {/* Price Details */}

          <PriceDetails />
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
