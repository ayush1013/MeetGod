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
  useToast,
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

const activeInputTag = {
  name: false,
  mobile: false,
  address: false,
  town: false,
  pinCode: false,
  city: false,
  state: false,
  country: false,
};

const errorInputTag = {
  name: true,
  mobile: true,
  address: true,
  town: true,
  pinCode: true,
  city: true,
  state: true,
  country: true,
};

const address = JSON.parse(localStorage.getItem("address")) || [];

const AddressModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTag, setActiveTag] = useState(activeInputTag);
  const [formData, setFormData] = useState(addressData);
  const [formErrors, setFormErrors] = useState(errorInputTag);
  const toast = useToast()

  const handleFocus = (e) => {
    setActiveTag({ ...activeTag, [e.target.name]: true });
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setActiveTag({ ...activeTag, [e.target.name]: false });
    } else {
      setActiveTag({ ...activeTag, [e.target.name]: true });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setActiveTag({
      ...activeTag,
      [e.target.name]: e.target.value === "" ? false : true,
    });
  };
  // console.log(formData);

  const handleSubmit = (e) => {
    setFormErrors(activeTag);

    // console.log("formErrors", formErrors);
    // console.log(activeTag)

    const allFieldsFilled = Object.values(activeTag).every(
      (error) => error === true
    );

    console.log("Hello", allFieldsFilled);

    if (allFieldsFilled) {
      let arr = address;
      arr.push(formData);
      localStorage.setItem("address", JSON.stringify(arr));
      toast({
        title: 'Address Saved',
        description: "You have saved the address successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position:"top"
      })
      onClose();
    }else{
      toast({
        title: 'Can not save',
        description: "Please fill all the required fields",
        status: 'warning',
        duration: 2000,
        isClosable: true,
        position:"top"
      })
    }
  };

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
        <ModalContent>
          <ModalHeader
            fontSize={"md"}
            color="gray.400"
            borderBottom={"1px solid #EBEBEB"}
          >
            Add A New Address
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text fontSize={"sm"} fontWeight="500">
              Contect Details
            </Text>
            <StyledInputTag
              isActive={activeTag.address}
              error={formErrors.address}
              handleBlur={handleBlur}
              handleFocus={handleFocus}
              handleChange={handleChange}
              name={"address"}
              value={formData.address}
              InputName={"Address (House No, Building)"}
            />
            <StyledInputTag
              isActive={activeTag.town}
              error={formErrors.town}
              handleBlur={handleBlur}
              handleFocus={handleFocus}
              handleChange={handleChange}
              name={"town"}
              value={formData.town}
              InputName={"Town"}
            />
            <StyledInputTag
              isActive={activeTag.pinCode}
              error={formErrors.pinCode}
              handleBlur={handleBlur}
              handleFocus={handleFocus}
              handleChange={handleChange}
              name={"pinCode"}
              value={formData.pinCode}
              InputName={"Pin Code"}
            />
            <StyledInputTag
              isActive={activeTag.city}
              error={formErrors.city}
              handleBlur={handleBlur}
              handleFocus={handleFocus}
              handleChange={handleChange}
              name={"city"}
              value={formData.city}
              InputName={"City"}
            />
            <Flex gap="5px">
              <StyledInputTag
                isActive={activeTag.state}
                error={formErrors.state}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                handleChange={handleChange}
                name={"state"}
                value={formData.state}
                InputName={"State"}
              />
              <StyledInputTag
                isActive={activeTag.country}
                error={formErrors.country}
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
              isActive={activeTag.name}
              error={formErrors.name}
              handleBlur={handleBlur}
              handleFocus={handleFocus}
              handleChange={handleChange}
              name={"name"}
              value={formData.name}
              InputName={"Name"}
            />
            <StyledInputTag
              isActive={activeTag.mobile}
              error={formErrors.mobile}
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
              onClick={handleSubmit}
              // type="submit"
            >
              Save
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddressModal;
