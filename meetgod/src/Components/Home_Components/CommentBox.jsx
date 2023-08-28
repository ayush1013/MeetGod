import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  Box,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const CommentBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      {/* <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button> */}
      <Text
          ml="10px"
          fontWeight={"500"}
          fontSize={"14px"}
          display="inline-block"
          p="3px 5px"
          borderRadius={"5px"}
          cursor={"pointer"}
          _hover={{ backgroundColor: "#F3F2EF" }}
          onClick={onOpen}
        >
          Load more comments
        </Text>
      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent w={{base:"100%", md:"60%", lg:"60%"}} m="auto" top="100px" >
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default CommentBox;
