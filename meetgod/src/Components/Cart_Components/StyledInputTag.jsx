import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const StyledInputTag = ({
  isActive,
  handleFocus,
  handleBlur,
  InputName,
  name,
  value,
  handleChange,
  error
}) => {
  return (
    <FormControl position="relative" pt="10px" pb="3px" isInvalid={!error} >
      <Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        variant="outline"
        size="md"
        position="relative"
        transition={"0.2s"}
        bgColor="white"
        name={name}
        value={value}
        onChange={handleChange}
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
        pl="2px"
        pr="2px"
        // border="1px solid black"
      >
        {InputName}
      </FormLabel>
    </FormControl>
  );
};

export default StyledInputTag;
