import React, { useRef, useState } from "react";
import { Box, Flex, Grid, Image, Input, Text } from "@chakra-ui/react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import SendIcon from "@material-ui/icons/Send";
import CommentBox from "./CommentBox";

const PostsList = ({ elem, handleLike, handleComment, doLike, doComment }) => {
  const comments = elem.comments;

  const firstTwoComments = comments.slice(0, 2);

  return (
    <Box
      key={elem.id}
      bgColor={"white"}
      borderRadius={"20px"}
      p="10px"
      border={"1px solid #EBEBEB"}
      borderBottom={"2px solid #EBEBEB"}
    >
      <Flex alignItems={"center"}>
        <Image w="40px" borderRadius={"50%"} src={elem.profilePic} />
        <Box ml="10px" mt="-5px">
          <Text fontWeight={"500"}>{elem.fullName}</Text>
          <Text color="#666666" mt="-5px" fontSize={"12px"}>
            Devotee of Shiva
          </Text>
        </Box>
      </Flex>

      <Box mt="10px" w="100%">
        <Text fontSize={"14px"} fontWeight={"500"}>
          {elem.title}
        </Text>
        <Text fontSize={"13px"}>{elem.content}</Text>
        <Image m="auto" src={elem.imageUrl} mt="10px" />
      </Box>

      <Flex
        justifyContent={"space-between"}
        p="10px"
        borderBottom={"1px solid #EBEBEB"}
      >
        <Flex alignItems={"center"}>
          <ThumbUpAltIcon
            style={{
              color: "#D0E8FF",
              backgroundColor: "#4F83B6",
              fontSize: "14px",
              padding: "2px",
              borderRadius: "50%",
            }}
          />
          <Text fontSize={"12px"} color="#666666">
            {elem.likes}
          </Text>
        </Flex>
        <Text fontSize={"12px"} color="#666666">
          {elem.comments?.length} Comments
        </Text>
      </Flex>

      <Flex w="80%" m="auto" justifyContent={"space-between"} p="5px">
        <Flex
          alignItems={"center"}
          cursor={"pointer"}
          p="5px 10px"
          borderRadius={"5px"}
          _hover={{ backgroundColor: "#F3F2EF" }}
          onClick={handleLike}
        >
          <ThumbUpAltIcon
            style={{
              color: doLike ? "#4F83B6" : "black",
              fontSize: "30px",
              padding: "2px",
              borderRadius: "50%",
            }}
          />
          <Text
            fontSize={"14px"}
            color={doLike ? "#4F83B6" : "none"}
            fontWeight={"500"}
          >
            Like
          </Text>
        </Flex>

        <Flex
          alignItems={"center"}
          cursor={"pointer"}
          p="5px 10px"
          borderRadius={"5px"}
          _hover={{ backgroundColor: "#F3F2EF" }}
          onClick={handleComment}
        >
          <CommentIcon
            style={{
              color: doComment ? "#4F83B6" : "black",
              fontSize: "30px",
              padding: "2px",
              borderRadius: "50%",
            }}
          />
          <Text
            fontSize={"14px"}
            color={doComment ? "#4F83B6" : "black"}
            fontWeight={"500"}
          >
            Comment
          </Text>
        </Flex>
      </Flex>

      {/*Comments Section*/}

      <Flex
        alignItems={"center"}
        w="100%"
        m="auto"
        gap="10px"
        p="10px 10px"
        borderTop={"1px solid #EBEBEB"}
      >
        <Image
          src="Ayush_Verma_Profile_Pic.jpg"
          w="40px"
          borderRadius={"50%"}
        />
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          bgColor="#F3F2EF"
          borderRadius={"5px"}
          w="90%"
          pr="10px"
        >
          <Input
            placeholder="Write a comment"
            bgColor="#F3F2EF"
            border="none"
            focusBorderColor="none"
            mr="10px"
          />
          <SendIcon style={{ cursor: "pointer" }} />
        </Flex>
      </Flex>

      <Grid p="10px" gap="10px">
        {firstTwoComments.length > 0 &&
          firstTwoComments.map((com) => {
            return (
              <Flex key={com.id}>
                <Image
                  src={com.avatar}
                  mt="10px"
                  w="35px"
                  h="35px"
                  overflow={"hidden"}
                  borderRadius={"50%"}
                />
                <Box>
                  <Box
                    bgColor={"#F3F2EF"}
                    borderRadius={"10px"}
                    ml="10px"
                    p="5px 10px"
                  >
                    <Text fontWeight={"500"}>{com.userName}</Text>
                    <Text>{com.content}</Text>
                  </Box>
                  <Flex
                    ml="15px"
                    fontSize={"12px"}
                    fontWeight={"500"}
                    gap="10px"
                  >
                    <Text>{com.likesOfComment} Like </Text>
                    <Text>Reply</Text>
                    <Text>2d</Text>
                  </Flex>
                </Box>
              </Flex>
            );
          })}
      </Grid>
      {elem.comments.length > 2 && (
        // <Text
        //   ml="10px"
        //   fontWeight={"500"}
        //   fontSize={"14px"}
        //   display="inline-block"
        //   p="3px 5px"
        //   borderRadius={"5px"}
        //   cursor={"pointer"}
        //   _hover={{ backgroundColor: "#F3F2EF" }}
        // >
        //   Load more comments
        // </Text>
        <CommentBox/>
      )}
    </Box>
  );
};

export default PostsList;
