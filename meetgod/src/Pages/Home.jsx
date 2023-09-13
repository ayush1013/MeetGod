import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import MobNav from "../Components/MobNav";
import { Box, Button, Flex, Grid, Image, Input, Text } from "@chakra-ui/react";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { godsArray, postData, products } from "../LocalData/Posts";
import PostsList from "../Components/Home_Components/PostsList";
import { Link } from "react-router-dom";

const Home = () => {
  const fileRef = useRef("");
  const [doLike, setDoLike] = useState(false);
  const [doComment, setDoComment] = useState(false);
  const [show, setShow] = useState(false);

  const handleLike = () => {
    setDoLike(!doLike);
  };

  const handleComment = () => {
    setDoComment(!doComment);
  };

  const handleFileClick = () => {
    fileRef.current.click();
  };

  const handleShowAndHide = () => {
    setShow(!show);
  };

  return (
    <div>
      <Navbar />
      <MobNav />
      <Flex
        w="100%"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        justifyContent={"space-around"}
      >
        {/* Home Left Section */}

        <Box
          w={{ base: "100%", md: "35%", lg: "25%" }}
          display={{ base: "block", md: "block", lg: "block" }}
        >
          <Box
            w={{ base: "100%", md: "80%", lg: "80%" }}
            p="20px"
            m="auto"
            mt={{ base: "5px", md: "40px", lg: "40px" }}
            textAlign={"center"}
            bgColor="white"
            border={"1px solid #EBEBEB"}
            borderBottom={"2px solid #EBEBEB"}
            borderRadius="10px"
          >
            <Image
              src="Ayush_Verma_Profile_Pic.jpg"
              alt="Ayush"
              border={"1px solid #EBEBEB"}
              borderRadius={"50%"}
              w="150px"
              m="auto"
            />
            <Text fontWeight={"500"}> Ayush Verma </Text>
            <Text fontSize={"13px"} color="#666666">
              Devotee of - Bhagwan Vishnu
            </Text>
          </Box>
          <Box
            display={{ base: !show ? "block" : "none", md: "none", lg: "none" }}
            w={{ base: "100%", md: "80%", lg: "80%" }}
            p="5px"
            m="auto"
            mt={{ base: "5px", md: "10px", lg: "10px" }}
            textAlign={"center"}
            bgColor="white"
            border={"1px solid #EBEBEB"}
            borderBottom={"2px solid #EBEBEB"}
            // borderRadius="10px"
          >
            <Text onClick={handleShowAndHide}>Show More</Text>
          </Box>
          <Box
            display={{ bas: show ? "block" : "none", md: "block", lg: "block" }}
            w={{ base: "100%", md: "80%", lg: "80%" }}
            p="20px"
            m="auto"
            mt={{ base: "5px", md: "10px", lg: "10px" }}
            textAlign={"center"}
            bgColor="white"
            border={"1px solid #EBEBEB"}
            borderBottom={"2px solid #EBEBEB"}
            borderRadius="10px"
          >
            {/* <Image
              src="meetgod-logo2.png"
              w={{ base: "100%", md: "100%", lg: "100%" }}
              borderRadius={"10px"}
              mb="10px"
            /> */}
            <Text fontSize="14px" textAlign={"center"} fontWeight="500">
              Connect on a Deeper Level:
            </Text>
            <Text textAlign={"center"} fontSize={"13px"} color="#666666">
              Learn More about Your Favorite God
            </Text>
            <Grid mt="10px" gap="10px">
              {godsArray.length > 0 &&
                godsArray?.map((elem) => (
                  <Flex
                    textAlign={"left"}
                    w="fit-content"
                    fontSize="13px"
                    cursor="pointer"
                    _hover={{ color: "#1A0DAB" }}
                  >
                    <Text fontWeight={"500"}>
                      {elem.name}:{" "}
                      <span style={{ fontWeight: "normal", fontSize: "13px" }}>
                        {elem.specialty}
                      </span>
                    </Text>
                  </Flex>
                ))}
            </Grid>
            <Link to="/spiritual">
              <Text
                textAlign={"right"}
                pl="32px"
                fontSize="13px"
                color={"#1A0DAB"}
                mt="10px"
              >
                Explore more →
              </Text>
            </Link>
          </Box>
          <Text
            display={{ base: show ? "block" : "none", md: "none", lg: "none" }}
            textAlign={"center"}
            onClick={handleShowAndHide}
          >
            Show Less
          </Text>
        </Box>
        {/* Home Middle Section */}

        <Box w={{ base: "100%", md: "60%", lg: "40%" }}>
          <Box>
            <Flex
              // border="1px solid black"
              alignItems={"center"}
              w="100%"
              m="auto"
              mt={{ base: "5px", md: "40px", lg: "40px" }}
              h="80px"
              borderRadius={"10px"}
              bgColor="white"
              gap="20px"
              pl="10px"
              pr="10px"
              border={"1px solid #EBEBEB"}
              borderBottom={"2px solid #EBEBEB"}
            >
              <Image
                src="Ayush_Verma_Profile_Pic.jpg"
                w="50px"
                borderRadius={"50%"}
              />
              <Input
                placeholder="Share your thoughts"
                bgColor="#F3F2EF"
                border="none"
                focusBorderColor="none"
              />

              <AddPhotoAlternateIcon
                fontSize="large"
                onClick={handleFileClick}
                style={{ color: "#8F88D6", cursor: "pointer" }}
              />
              <Input
                type="file"
                ref={fileRef}
                w="40px"
                visibility={"hidden"}
                ml="-40px"
                variant={"flushed"}
              ></Input>
            </Flex>
          </Box>
          <Grid mt={{ base: "5px", md: "30px", lg: "30px" }} rowGap={"10px"}>
            {postData.map((elem) => {
              return (
                <PostsList
                  elem={elem}
                  handleLike={handleLike}
                  handleComment={handleComment}
                  doLike={doLike}
                  doComment={doComment}
                />
              );
            })}
          </Grid>
        </Box>

        {/* Home Right Section */}

        <Box
          display={{ base: "none", md: "none", lg: "block" }}
          w="25%"
          // border="1px solid red"
          h="90vh"
          pb="20px"
          pt={{ base: "20px", md: "30px", lg: "40px" }}
          top="65px"
          position="sticky"
          overflowY="scroll"
          sx={{
            "&::-webkit-scrollbar": {
              width: "0px",
              // visibility:"hidden"
            },
          }}
        >
          <Box
            textAlign="center"
            bgColor={"white"}
            w={{ base: "100%", md: "68%", lg: "80%" }}
            m="auto"
            p="15px"
            borderRadius={"10px"}
          >
            <Text fontSize="18px" fontWeight="500">
              Sacred Savings Await
            </Text>
            <Text fontWeight="500" color="#666666">
              Shop Now for the Best Deals!
            </Text>
          </Box>
          {/* <Text>Sacred Savings Await: Shop Now for the Best Deals</Text> */}
          <Grid
            m="auto"
            mt={{ base: "10px", md: "10px", lg: "10px" }}
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(1,1fr)",
            }}
            w={{ base: "100%", md: "68%", lg: "80%" }}
            // border="1px solid black"
            gap={{ base: "20px", md: "25px", lg: "10px" }}
            // bgColor={"white"}
            // p="20px"
          >
            {products?.map((elem) => {
              return (
                <Box
                  key={elem._id}
                  // border="1px solid black"
                  p="15px"
                  bgColor={"white"}
                  borderRadius={"10px"}
                  border={"1px solid #EBEBEB"}
                  borderBottom={"2px solid #EBEBEB"}
                >
                  <Link to={`/product/${elem._id}`}>
                    <Image
                      src={elem.image}
                      h={{ base: "150px", md: "200px", lg: "200px" }}
                      m="auto"
                    />
                  </Link>
                  <Box
                    mt={"5px"}
                    // border={"1px solid black"}
                    // h={{ md: "", lg: "80px" }}
                  >
                    <Link to={`/product/${elem._id}`}>
                      <Text
                        fontSize={{ base: "16px", md: "18px", lg: "18px" }}
                        fontWeight={{ base: "500", md: "bold", lg: "bold" }}
                        h={{ base: "23px", md: "auto", lg: "auto" }}
                        overflow={"hidden"}
                      >
                        {elem.title}
                      </Text>
                    </Link>
                    <Text
                      fontSize={{ base: "14px", md: "16px", lg: "16px" }}
                      color={"green"}
                      fontWeight={{ base: "500", md: "bold", lg: "bold" }}
                    >
                      ₹{elem.price}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Grid>
          <Link to="/products">
            <Text textAlign={"left"} pl="32px" color={"#1A0DAB"} mt="10px">
              Explore more →
            </Text>
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default Home;
