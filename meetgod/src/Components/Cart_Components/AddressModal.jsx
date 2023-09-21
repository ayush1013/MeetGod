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
} from "@chakra-ui/react";

const AddressModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
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
              <Box position="relative" mt="10px" >
                <Input
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  variant="outline"
                  size="md"
                  mt={isActive ? "24px" : "0px"}
                  position="relative"
                  transition={"0.2s"}
                />
                <FormLabel
                  position="absolute"
                  top={isActive ? "0" : "8px"}
                  left={isActive? "0" : "1rem"}
                  fontSize={"sm"}
                  color={isActive ? "#2D72B9" : "gray.500"}
                  pointerEvents="none"
                  transition="0.2s"
                  zIndex="1"
                  // border="1px solid black"
                >
                  Address (House No., Building)
                </FormLabel>
              </Box>

              <Box position="relative" mt="10px" >
                <Input
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  variant="outline"
                  size="md"
                  mt={isActive ? "24px" : "0px"}
                  position="relative"
                  transition={"0.2s"}
                />
                <FormLabel
                  position="absolute"
                  top={isActive ? "0" : "8px"}
                  left={isActive? "0" : "1rem"}
                  fontSize={"sm"}
                  color={isActive ? "#2D72B9" : "gray.500"}
                  pointerEvents="none"
                  transition="0.2s"
                  zIndex="1"
                  // border="1px solid black"
                >
                  Town
                </FormLabel>
              </Box>

              <Box position="relative" mt="10px" >
                <Input
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  variant="outline"
                  size="md"
                  mt={isActive ? "24px" : "0px"}
                  position="relative"
                  transition={"0.2s"}
                />
                <FormLabel
                  position="absolute"
                  top={isActive ? "0" : "8px"}
                  left={isActive? "0" : "1rem"}
                  fontSize={"sm"}
                  color={isActive ? "#2D72B9" : "gray.500"}
                  pointerEvents="none"
                  transition="0.2s"
                  zIndex="1"
                  // border="1px solid black"
                >
                  Pin Code
                </FormLabel>
              </Box>

              <Box position="relative" mt="10px" >
                <Input
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  variant="outline"
                  size="md"
                  mt={isActive ? "24px" : "0px"}
                  position="relative"
                  transition={"0.2s"}
                />
                <FormLabel
                  position="absolute"
                  top={isActive ? "0" : "8px"}
                  left={isActive? "0" : "1rem"}
                  fontSize={"sm"}
                  color={isActive ? "#2D72B9" : "gray.500"}
                  pointerEvents="none"
                  transition="0.2s"
                  zIndex="1"
                  // border="1px solid black"
                >
                  City/District
                </FormLabel>
              </Box>
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
