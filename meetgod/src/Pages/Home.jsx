import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import MobNav from "../Components/MobNav";
import { Box, Flex, Grid, Image, Input, Text } from "@chakra-ui/react";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { postData } from "../LocalData/Posts";
import PostsList from "../Components/Home_Components/PostsList";

const Home = () => {
  const fileRef = useRef("");
  const [doLike, setDoLike] = useState(false);
  const [doComment, setDoComment] = useState(false);

  const handleLike = () => {
    setDoLike(!doLike);
  };

  const handleComment = () => {
    setDoComment(!doComment);
  };

  const handleFileClick = () => {
    fileRef.current.click();
  };

  return (
    <div>
      <Navbar />
      <MobNav />
      <Flex w="100%" justifyContent={"space-between"}>
        <Box w="25%" border="1px solid red" bgColor="white">
          <Box m="auto" mt="50px" textAlign={"center"}>
            <Image
              src="Ayush_Verma_Profile_Pic.jpg"
              alt="Ayush"
              borderRadius={"50%"}
              w="100px"
              m="auto"
            />
            <Text fontWeight={"500"}> Ayush Verma </Text>
            <Text fontSize={"13px"} color="#666666">
              Devotee of - Bhagwan Vishnu
            </Text>
          </Box>
        </Box>
        <Box w="40%">
          <Box>
            <Flex
              // border="1px solid black"
              alignItems={"center"}
              w="100%"
              m="auto"
              mt="40px"
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
          <Grid mt="30px" rowGap={"10px"}>
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
        <Box w="25%" border="1px solid red"></Box>
      </Flex>
    </div>
  );
};

export default Home;
