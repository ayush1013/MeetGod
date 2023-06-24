import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import MobNav from "../Components/MobNav";
import { Box, Flex, Grid, Image, Input, Text } from "@chakra-ui/react";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import {postData} from "../LocalData/Posts"

const Home = () => {
  const fileRef = useRef("");

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
        <Box w="40%" border="1px solid red">
          <Box>
            <Flex
              // border="1px solid black"
              alignItems={"center"}
              w="95%"
              m="auto"
              mt="40px"
              h="80px"
              borderRadius={"10px"}
              bgColor="white"
              gap="20px"
              pl="10px"
              pr="10px"
            >
              <Image
                src="https://scontent.fbho4-4.fna.fbcdn.net/v/t39.30808-6/347823893_940297803683423_4736240409875839683_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xdIx_8veQVAAX9oNdVm&_nc_ht=scontent.fbho4-4.fna&oh=00_AfA2oy_fu7wyrwqQWlX0YiG4UOiz93ab62wYBCjOndYw1Q&oe=649C2762"
                w="50px"
                borderRadius={"50%"}
              />
              <Input placeholder="Share your thoughts" bgColor="#F3F2EF" border="none" />

              <AddPhotoAlternateIcon
                fontSize="large"
                onClick={handleFileClick}
                style={{ color: "#8F88D6" }}
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
          <Grid>
            {
              postData.map((elem)=> {
                return(
                  <Box key={elem.id}>
                    <Flex>
                      <Image src={elem.profilePic}/>

                    </Flex>
                  </Box>
                )
              } )
            }
          </Grid>
        </Box>
        <Box w="25%" border="1px solid red"></Box>
      </Flex>
    </div>
  );
};

export default Home;
