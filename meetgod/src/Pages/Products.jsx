import React, { useEffect, useState } from "react";
import CarouselComponent from "../Components/Carousel";
import {
  Box,
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

const Products = () => {
  const data = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  console.log("sort", sort);

  console.log("data =>", data);

  const handleRadioChange = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Box>
      <CarouselComponent />
      <Box
        w={{ base: "0px", md: "200px", lg: "260px" }}
        mt="40px"
        h="100vh"
        bgColor={"white"}
        borderRight={"2px solid #DDDDDD"}
        boxSizing="borderBox"
        p="20px"
        ml="30px"
      >
        <Box>
          <Text
            fontSize={"20px"}
            fontWeight={"bold"}
            h="35px"
            borderBottom={"2px solid #DDDDDD"}
          >
            Sort By
          </Text>

          <Grid rowGap={"5px"} mt="10px">
            <Flex gap="5px">
              <input type="radio" name="sortp" />
              <label> Price - Low to High </label>
            </Flex>
            <Flex gap="5px">
              <input
                type="radio"
                name="sortp"
                style={{ backgroundColor: "red" }}
              />
              <label> Price - High to Low </label>
            </Flex>
          </Grid>
          <Grid columnGap={"5px"} rowGap={"5px"} mt="10px">
            <Flex gap="5px">
              <input type="radio" name="sortA" />
              <label> Title - A to Z </label>
            </Flex>
            <Flex gap="5px">
              <input type="radio" name="sortA" />
              <label> Title - Z to A </label>
            </Flex>
          </Grid>
        </Box>
        <Box>
        <Text
            fontSize={"20px"}
            fontWeight={"bold"}
            h="35px"
            borderBottom={"2px solid #DDDDDD"}
            mt="20px"
          >
            Filter
          </Text>
        </Box>
      </Box>
      {data.map((elem) => {
        return <div>{elem.category}</div>;
      })}
    </Box>
  );
};

export default Products;
