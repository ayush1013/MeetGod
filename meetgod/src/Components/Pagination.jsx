import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <Flex align="center" justify="center" mt={4}>
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Previous Page"
        onClick={handlePreviousPage}
        isDisabled={isFirstPage}
        variant="ghost"
        colorScheme="gray"
      />

      <Box mx={2}>
        <Text fontSize="sm" fontWeight="bold">
          Page {currentPage} of {totalPages}
        </Text>
      </Box>

      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Next Page"
        onClick={handleNextPage}
        isDisabled={isLastPage}
        variant="ghost"
        colorScheme="gray"
      />
    </Flex>
  );
};

export default Pagination;
