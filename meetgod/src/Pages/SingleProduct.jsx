import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import MobNav from "../Components/MobNav";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleData } from "../Redux/ProductsReducer/action";
import RoomIcon from "@material-ui/icons/Room";
import {
  Box,
  Button,
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
    <Box pb="70px" bgColor={"white"}>
      <Navbar />
      <MobNav />
      <Flex
        bgColor={"white"}
        justifyContent={"space-between"}
        flexDirection={{ lg: "row", md: "row", base: "column" }}
        w={"100%"}
        // border={"1px solid black"}
      >
        {imageArray.length > 0 && (
          <Flex
            mt={{ base: "0px", md: "15px", lg: "20px" }}
            flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
            bgColor={"white"}
            justifyContent={"space-between"}
            w={{ base: "100%", md: "33%", lg: "33%" }}
            // border="1px solid green"
          >
            <Flex
              flexDirection={{ base: "row", md: "column", lg: "column" }}
              gap={{ base: "5px", md: "5px", lg: "5px" }}
              h="auto"
              w={{ base: "auto", md: "13%", lg: "13%" }}
              ml={{ base: "5px", md: "5px", lg: "10px" }}
              mt={{ base: "-10px", md: "0px", lg: "0px" }}
            >
              {imageArray.map((elem, i) => {
                return (
                  <Image
                    border={"1px solid gray"}
                    w={{ base: "auto", md: "100%", lg: "100%" }}
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
              // ml={{ base: "0px", md: "10px", lg: "20px" }}
              w={{ base: "auto", md: "83%", lg: "83%" }}
              // border="1px solid black"
            >
              <Image
                src={imageArray[mainImage]}
                // h={{ base: "auto", md: "auto", lg: "auto" }}
                w={{ base: "100%", md: "100%", lg: "100%" }}
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
            // ml={{ base: "0px", md: "15px", lg: "25px" }}
            // border="1px solid blue"
            mt={{ base: "0px", md: "15px", lg: "20px" }}
            p={{ base: "10px", md: "0px", lg: "0px" }}
            pt={{ base: "10px", md: "0px", lg: "0px" }}
            w={{ base: "100%", md: "40%", lg: "42%" }}
          >
            <Text
              color={"#007C7C"}
              m="0px"
              fontSize={{ lg: "16px", md: "14px", base: "12px" }}
            >
              {data.brand} - {data.category}{" "}
            </Text>
            <Text
              fontWeight={"500"}
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
              mt="-8px"
            >
              {data.title}
            </Text>
            <Flex textAlign={"center"}>
              {data.discount !== 0 && (
                <Text
                  color="green"
                  mr="10px"
                  fontSize={{ base: "20px", md: "23px", lg: "28px" }}
                >
                  -{data.discount}%
                </Text>
              )}
              <Text fontSize={{ base: "20px", md: "23px", lg: "28px" }}>
                ₹{Math.floor(data.price)}
              </Text>
            </Flex>
            {data.discount !== 0 && (
              <Text
                color="#707272"
                fontSize={{ base: "10px", md: "10px", lg: "12px" }}
              >
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
            <Text
              mt={{ lg: "10px", md: "5px", base: "0px" }}
              textAlign={"justify"}
              fontSize={{ lg: "16px", md: "12px", base: "12px" }}
            >
              {data.description} The DivineTouch transcends conventional
              boundaries, offering an unparalleled experience that resonates
              with the divine within you. Crafted with meticulous attention to
              detail, the DivineTouch exudes an aura of divine radiance
            </Text>

            <Text
              mt={{ lg: "20px", md: "8px", base: "5px" }}
              fontSize={{ lg: "20px", md: "18px", base: "16px" }}
            >
              Product Information
            </Text>
            <Table w={{ lg: "300px", md: "250px", base: "300px" }}>
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

        <Box
          // border="1px solid red"
          w={{ base: "100%", md: "23%", lg: "20%" }}
          mt={{ base: "0px", md: "15px", lg: "20px" }}
          pl={{ base: "10px" }}
        >
          <Text
            color={"#007C7C"}
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
          >
            Free Delivery
          </Text>
          <Text
            cursor="pointer"
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
          >
            Select delivery location
            <RoomIcon
              style={{
                color: "#666666",
                margin: "auto",
                textAlign: "center",
                fontSize: "22px",
              }}
            />{" "}
          </Text>
          <Text
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            color={data.outOfStock ? "red" : "green"}
          >
            {data.outOfStock ? "Out of Stock" : "In Stock"}
          </Text>
          <Text
            color={"green"}
            fontSize={{ base: "20px", md: "23px", lg: "28px" }}
          >
            ₹{Math.floor(data.price)}
          </Text>
          <Button
            display={"block"}
            m={{ base: "auto", md: "none", lg: "none" }}
            bgGradient="linear(to-l, #F79200, #F4C50F, #F79200)"
            w="75%"
            mt="10px"
            _hover={{ opacity: 0.7 }}
            _focus={{ outline: "none" }}
            color="white"
          >
            Add to Cart
          </Button>
          <Button
            m={{ base: "auto", md: "none", lg: "none" }}
            display={"block"}
            bgGradient="linear(to-l, #F4C50F, #F79200, #F4C50F)"
            w="75%"
            mt="20px"
            _hover={{ opacity: 0.7 }}
            _focus={{ outline: "none" }}
            color="white"
          >
            Buy Now
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleProduct;
