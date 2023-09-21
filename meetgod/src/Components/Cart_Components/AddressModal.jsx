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

const addressData = {
  name: "",
  mobile: "",
  address: "",
  town: "",
  pinCode: "",
  city: "",
  state: "",
  country: "",
};

const AddressModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isActive, setIsActive] = useState(false);

  const [formData, setFormData] = useState(addressData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

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
                handleChange={handleChange}
                name={"address"}
                value={formData.address}
                InputName={"Address (House No, Building)"}
              />
              <StyledInputTag
                isActive={isActive}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                handleChange={handleChange}
                name={"town"}
                value={formData.town}
                InputName={"Town"}
              />
              <StyledInputTag
                isActive={isActive}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                handleChange={handleChange}
                name={"pinCode"}
                value={formData.pinCode}
                InputName={"Pin Code"}
              />
              <StyledInputTag
                isActive={isActive}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                handleChange={handleChange}
                name={"city"}
                value={formData.city}
                InputName={"City"}
              />
              <Flex gap="5px">
                <StyledInputTag
                  isActive={isActive}
                  handleBlur={handleBlur}
                  handleFocus={handleFocus}
                  handleChange={handleChange}
                  name={"state"}
                  value={formData.state}
                  InputName={"State"}
                />
                <StyledInputTag
                  isActive={isActive}
                  handleBlur={handleBlur}
                  handleFocus={handleFocus}
                  handleChange={handleChange}
                  name={"country"}
                  value={formData.country}
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
                handleChange={handleChange}
                name={"name"}
                value={formData.name}
                InputName={"Name"}
              />
              <StyledInputTag
                isActive={isActive}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                handleChange={handleChange}
                name={"mobile"}
                value={formData.mobile}
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
