import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import MobNav from "../Components/MobNav";
import { Box, Flex, Grid, Image, Input, Text } from "@chakra-ui/react";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import { postData } from "../LocalData/Posts";

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
              src="https://scontent.fbho4-4.fna.fbcdn.net/v/t39.30808-6/347823893_940297803683423_4736240409875839683_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xdIx_8veQVAAX9oNdVm&_nc_ht=scontent.fbho4-4.fna&oh=00_AfA2oy_fu7wyrwqQWlX0YiG4UOiz93ab62wYBCjOndYw1Q&oe=649C2762"
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
                src="https://scontent.fbho4-4.fna.fbcdn.net/v/t39.30808-6/347823893_940297803683423_4736240409875839683_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xdIx_8veQVAAX9oNdVm&_nc_ht=scontent.fbho4-4.fna&oh=00_AfA2oy_fu7wyrwqQWlX0YiG4UOiz93ab62wYBCjOndYw1Q&oe=649C2762"
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
                style={{ color: "#8F88D6", cursor:"pointer" }}
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
                <Box
                  key={elem.id}
                  bgColor={"white"}
                  borderRadius={"20px"}
                  p="10px"
                  border={"1px solid #EBEBEB"}
                  borderBottom={"2px solid #EBEBEB"}
                >
                  <Flex alignItems={"center"}>
                    <Image
                      w="40px"
                      borderRadius={"50%"}
                      src={elem.profilePic}
                    />
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

                  <Flex
                    w="80%"
                    m="auto"
                    justifyContent={"space-between"}
                    p="5px"
                  >
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
                </Box>
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
