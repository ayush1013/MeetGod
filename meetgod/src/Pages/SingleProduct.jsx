import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import MobNav from "../Components/MobNav";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleData } from "../Redux/ProductsReducer/action";
import {
  Box,
  Flex,
  Grid,
  Image,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const SingleProduct = () => {
  const data = useSelector((store) => store.productReducer.singleProduct);
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log("id is", id)
  console.log("singleData", data);
  const [imageArray, setImageArray] = useState([]);
  const [mainImage, setMainImage] = useState(0);

  console.log("imageArray", imageArray);

  useEffect(() => {
    dispatch(getSingleData(id));
  }, [dispatch, id]);

  useEffect(() => {
    if ((data.image !== null, data.image_gallery !== undefined)) {
      setImageArray([data.image, ...data.image_gallery]);
    }
  }, [data]);

  return (
    <Box>
      <Navbar />
      <MobNav />
      <Flex bgColor={"white"}>
        {imageArray.length > 0 && (
          <Flex
            flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
            pt="20px"
            bgColor={"white"}
          >
            <Flex
              flexDirection={{ base: "row", md: "column", lg: "column" }}
              gap={{ base: "5px", md: "5px", lg: "5px" }}
              h="auto"
              ml={{ base: "5px", md: "10px", lg: "10px" }}
              mt={{ base: "5px", md: "0px", lg: "0px" }}
            >
              {imageArray.map((elem, i) => {
                return (
                  <Image
                    border={"1px solid gray"}
                    w={{ base: "auto", md: "40px", lg: "50px" }}
                    h={{ base: "40px", md: "auto", lg: "auto" }}
                    cursor={"pointer"}
                    src={elem}
                    key={i}
                    _hover={{ border: "1px solid blue" }}
                    onMouseOver={() => setMainImage(i)}
                    onClick={() => setMainImage(i)}
                  />
                );
              })}
            </Flex>
            <Box
              ml={{ base: "0px", md: "20px", lg: "20px" }}
              w={{ base: "auto", md: "340px", lg: "400px" }}
              // border="1px solid black"
            >
              <Image
                src={imageArray[mainImage]}
                h={{ base: "auto", md: "340px", lg: "400px" }}
              />
              <Text textAlign={"right"} color={"red"} fontSize={"12px"}>
                {data.god_name}
              </Text>
            </Box>
          </Flex>
        )}

        {data.title && (
          <Flex
            flexDirection={"column"}
            ml={{ base: "20px", md: "40px", lg: "50px" }}
            // border="1px solid blue"
            mt="20px"
          >
            <Text color={"#007C7C"} m="0px">
              {data.brand} - {data.category}{" "}
            </Text>
            <Text
              fontWeight={"500"}
              fontSize={{ base: "20px", md: "28px", lg: "30px" }}
              mt="-8px"
            >
              {data.title}
            </Text>
            <Flex textAlign={"center"}>
              {data.discount !== 0 && (
                <Text
                  color="green"
                  mr="10px"
                  fontSize={{ base: "20px", md: "26px", lg: "28px" }}
                >
                  -{data.discount}%
                </Text>
              )}
              <Text fontSize={{ base: "20px", md: "26px", lg: "28px" }}>
                ₹{Math.floor(data.price)}
              </Text>
            </Flex>
            {data.discount !== 0 && (
              <Text color="#707272" fontSize={"12px"}>
                M.R.P.
                <span
                  style={{ textDecoration: "line-through", marginLeft: "5px" }}
                >
                  ₹
                  {Math.floor(
                    Math.floor(data.price) / (1 - data.discount / 100)
                  )}
                </span>
              </Text>
            )}
            <Text mt="10px" w="450px" textAlign={"justify"} >
              {data.description} The DivineTouch transcends conventional
              boundaries, offering an unparalleled experience that resonates
              with the divine within you. Crafted with meticulous attention to detail, the DivineTouch exudes an aura of divine radiance
            </Text>

            <Text mt="20px" fontSize={{ lg: "20px", md: "18px", base: "16px" }}>
              Product Information
            </Text>
            <Table w="300px">
              <Tbody>
                <Tr>
                  <Th>Brand</Th>
                  <Th>{data.brand === null ? "N/A" : data.brand}</Th>
                </Tr>
                <Tr>
                  <Th>Color</Th>
                  <Th>{data.color === null ? "N/A" : data.color}</Th>
                </Tr>
                <Tr>
                  <Th>Size</Th>
                  <Th>{data.size === null ? "N/A" : data.size}</Th>
                </Tr>
                <Tr>
                  <Th>Height</Th>
                  <Th>{data.height === null ? "N/A" : data.height}</Th>
                </Tr>
                <Tr>
                  <Th>Width</Th>
                  <Th>{data.width === null ? "N/A" : data.width}</Th>
                </Tr>
                <Tr>
                  <Th>Length</Th>
                  <Th>{data.length === null ? "N/A" : data.length}</Th>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
        )}
        <Box ml="40px" mt="20px">
          <Text color={"#007C7C"} >Free Delivery</Text>
          <Text>Select delivery location</Text>
          <Text color={data.outOfStock?"red":"green"}>{data.outOfStock?"Out of Stock":"In Stock"}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleProduct;
