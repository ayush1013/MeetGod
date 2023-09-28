import React, { useRef, useState } from "react";
import { Box, Button, Flex, Grid, Image, Input, Text } from "@chakra-ui/react";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { godsArray, postData, products } from "../../LocalData/Posts";
import PostsList from "./PostsList";
import { Link } from "react-router-dom";

const HomeMiddleSection = () => {
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
              key={elem.id}
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
  );
};

export default HomeMiddleSection;
