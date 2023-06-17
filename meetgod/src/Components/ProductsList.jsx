import React, { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/ProductsReducer/action";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const ProductsList = ({ page }) => {
  const data = useSelector((store) => store.productReducer.products.items);
  const dispatch = useDispatch();

  const location = useLocation();
  console.log("Data is", data);

  useEffect(() => {
    if (location || data.length === 0) {
      dispatch(getData(location.search));
    }
  }, [location.search]);

  return (
    <Grid
      m="auto"
      mt={{ base: "20px", md: "30px", lg: "40px" }}
      ml={{ md: "30px", lg: "40px" }}
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
      }}
      w={{ base: "100%", md: "68%", lg: "75%" }}
      // border="1px solid black"
      gap={{ base: "20px", md: "25px", lg: "30" }}
      bgColor={"white"}
      p="20px"
    >
      {data?.map((elem) => {
        return (
          <Box
            key={elem._id}
            // border="1px solid black"
            p="5px"
          >
            <Link to={`/product/${elem._id}`}>
              <Image
                src={elem.image}
                h={{ base: "auto", md: "200px", lg: "200px" }}
                m="auto"
              />
            </Link>
            <Box
              mt={"5px"}
              // border={"1px solid black"}
              h={{ md: "", lg: "80px" }}
            >
              <Link to={`/product/${elem._id}`}>
              <Text
                fontSize={{ base: "22px", md: "18px", lg: "18px" }}
                fontWeight={"bold"}
              >
                {elem.title}
              </Text>
              </Link>
              <Text
                fontSize={{ base: "20px", md: "16px", lg: "16px" }}
                color={"green"}
                fontWeight={"bold"}
              >
                ₹{elem.price}
              </Text>
            </Box>
            <Button
              m="auto"
              display={"block"}
              bgGradient="linear(to-l, #F79200, #F4C50F, #F79200)"
              w="75%"
              mt="5px"
              _hover={{ opacity: 0.7 }}
              _focus={{ outline: "none" }}
              borderRadius={"40px"}
              borderBottomRadius={"none"}
              color="white"
            >
              Add to Cart
            </Button>
          </Box>
        );
      })}
    </Grid>
  );
};

export default ProductsList;
