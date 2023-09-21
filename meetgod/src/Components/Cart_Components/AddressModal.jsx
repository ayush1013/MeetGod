import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Text,
} from "@chakra-ui/react";

const AddressModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setIsActive(false);
    }
  };

  const isError = false;

  return (
    <Box>
      <Button
        size={"sm"}
        variant="outline"
        colorScheme="purple"
        onClick={onOpen}
      >
        Add OR Change Address
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={isError}>
            <Text fontSize={"sm"} fontWeight="500">Contect Details</Text>
              <Box position="relative" >
                <Input
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  mt={isActive?"12px":"0px"}
                  variant="outline"
                  size="md"
                  position="relative"
                  transition={"0.2s"}
                />
                <FormLabel
                  position="absolute"
                  top={isActive ? "0px" : "8px"}
                  left={"1rem"}
                  fontSize={"sm"}
                  color={"gray.500"}
                  pointerEvents="none"
                  transition="0.2s"
                  zIndex="1"
                  bgColor="white"
                  // border="1px solid black"
                >
                  Address (House No., Building)
                </FormLabel>
              </Box>

              <Box position="relative" mt="5px">
                <Input
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  mt={isActive?"12px":"0px"}
                  variant="outline"
                  size="md"
                  position="relative"
                  transition={"0.2s"}
                />
                <FormLabel
                  position="absolute"
                  top={isActive ? "0px" : "8px"}
                  left={"1rem"}
                  fontSize={"sm"}
                  color={"gray.500"}
                  pointerEvents="none"
                  transition="0.2s"
                  zIndex="1"
                  bgColor="white"
                  // border="1px solid black"
                >
                  Town
                </FormLabel>
              </Box>

              <Box position="relative" mt="5px">
                <Input
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  mt={isActive?"12px":"0px"}
                  variant="outline"
                  size="md"
                  position="relative"
                  transition={"0.2s"}
                />
                <FormLabel
                  position="absolute"
                  top={isActive ? "0px" : "8px"}
                  left={"1rem"}
                  fontSize={"sm"}
                  color={"gray.500"}
                  pointerEvents="none"
                  transition="0.2s"
                  zIndex="1"
                  bgColor="white"
                  // border="1px solid black"
                >
                  Pin Code
                </FormLabel>
              </Box>

              <Box position="relative" mt="5px">
                <Input
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  mt={isActive?"12px":"0px"}
                  variant="outline"
                  size="md"
                  position="relative"
                  transition={"0.2s"}
                />
                <FormLabel
                  position="absolute"
                  top={isActive ? "0px" : "8px"}
                  left={"1rem"}
                  fontSize={"sm"}
                  color={"gray.500"}
                  pointerEvents="none"
                  transition="0.2s"
                  zIndex="1"
                  bgColor="white"
                  // border="1px solid black"
                >
                  City/District
                </FormLabel>
              </Box>

              <Flex gap="5px" >
                <Box position="relative" mt="5px">
                  <Input
                     onFocus={handleFocus}
                     onBlur={handleBlur}
                     mt={isActive?"12px":"0px"}
                     variant="outline"
                     size="md"
                     position="relative"
                     transition={"0.2s"}
                   />
                   <FormLabel
                     position="absolute"
                     top={isActive ? "0px" : "8px"}
                     left={"1rem"}
                     fontSize={"sm"}
                     color={"gray.500"}
                     pointerEvents="none"
                     transition="0.2s"
                     zIndex="1"
                     bgColor="white"
                    // border="1px solid black"
                  >
                    State
                  </FormLabel>
                </Box>

                <Box position="relative" mt="5px">
                  <Input
                     onFocus={handleFocus}
                     onBlur={handleBlur}
                     mt={isActive?"12px":"0px"}
                     variant="outline"
                     size="md"
                     position="relative"
                     transition={"0.2s"}
                   />
                   <FormLabel
                     position="absolute"
                     top={isActive ? "0px" : "8px"}
                     left={"1rem"}
                     fontSize={"sm"}
                     color={"gray.500"}
                     pointerEvents="none"
                     transition="0.2s"
                     zIndex="1"
                     bgColor="white"
                    // border="1px solid black"
                  >
                    Country
                  </FormLabel>
                </Box>
              </Flex>

              <Text fontSize={"sm"} fontWeight="500" mt="10px" >Contect Details</Text>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddressModal;
