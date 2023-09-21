import React from "react";
import { Box, Flex, Grid, Image, Text, Button } from "@chakra-ui/react";
import { products } from "../../LocalData/Posts";

const PriceDetails = () => {
  return (
    <Box
      // border="1px solid black"
      w={{ base: "100%", md: "100%", lg: "100%" }}
    >
      

      {/* Price Details */}

      <Box pt="5px" borderTop="1px solid #EBEBEB">
        <Text fontSize="16px" fontWeight="500" color="#666666">
          Price Details
          <span style={{ paddingLeft: "5px", color: "tomato" }}>
            (
            {products.length > 0 && products.length === 1
              ? `${products.length} Item`
              : `${products.length} Items`}
            )
          </span>
        </Text>
        <Grid
          gap="5px"
          mt="5px"
          pb="5px"
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
      </Box>

      {/* Total Amount And Order */}

      <Box mt="5px">
        <Flex justifyContent={"space-between"} fontWeight={"500"}>
          <Text>Total Amount</Text>
          <Text>₹500</Text>
        </Flex>
        <Button colorScheme="purple" w="100%" mt="20px">
          Place Order
        </Button>
      </Box>
    </Box>
  );
};

export default PriceDetails;
