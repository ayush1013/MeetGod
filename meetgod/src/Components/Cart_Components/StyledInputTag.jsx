import { Box, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const StyledInputTag = ({ isActive, handleFocus, handleBlur, InputName }) => {
  return (
    <Box position="relative" pt="10px" pb="3px">
      <Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        variant="outline"
        size="md"
        position="relative"
        transition={"0.2s"}
        bgColor="white"
        
      />
      <FormLabel
        position="absolute"
        top={isActive ? "0px" : "20px"}
        left={"1rem"}
        fontSize={"12"}
        color={"gray.500"}
        pointerEvents="none"
        transition="0.2s"
        zIndex="1"
        bgColor="white"
        // border="1px solid black"
      >
        {InputName}
      </FormLabel>
    </Box>
  );
};

export default StyledInputTag;
