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
import StyledInputTag from "./StyledInputTag";

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

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "md", lg: "md" }}
      >
        <ModalOverlay />
        <ModalContent border="1px solid black">
          <ModalHeader
            fontSize={"md"}
            color="gray.400"
            borderBottom={"1px solid #EBEBEB"}
          >
            Add A New Address
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={isError}>
              <Text fontSize={"sm"} fontWeight="500">
                Contect Details
              </Text>
              <StyledInputTag
                isActive={isActive}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                InputName={"Address (House No, Building)"}
              />
              <StyledInputTag
                isActive={isActive}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                InputName={"Town"}
              />
              <StyledInputTag
                isActive={isActive}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                InputName={"Pin Code"}
              />
              <StyledInputTag
                isActive={isActive}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                InputName={"City"}
              />
              <Flex gap="5px">
                <StyledInputTag
                  isActive={isActive}
                  handleBlur={handleBlur}
                  handleFocus={handleFocus}
                  InputName={"State"}
                />
                <StyledInputTag
                  isActive={isActive}
                  handleBlur={handleBlur}
                  handleFocus={handleFocus}
                  InputName={"Country"}
                />
              </Flex>

              <Text fontSize={"sm"} fontWeight="500" mt="10px">
                Contect Details
              </Text>
              <StyledInputTag
                isActive={isActive}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                InputName={"Name"}
              />
              <StyledInputTag
                isActive={isActive}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                InputName={"Mobile No."}
              />

              <Button
                display="block"
                m="auto"
                mt="10px"
                w="100px"
                colorScheme="blue"
                mr={0}
                onClick={onClose}
              >
                Save
              </Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddressModal;
