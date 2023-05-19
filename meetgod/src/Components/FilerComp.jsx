import { Box, Flex, Select, Input, Button } from '@chakra-ui/react';

function FilterSortBar({ onFilterChange, onSortChange }) {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align={{ base: 'stretch', md: 'center' }}
      justify={{ base: 'flex-start', md: 'space-between' }}
      px={4}
      py={2}
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Box flex={{ base: 'none', md: '1' }} mr={4} mb={{ base: 2, md: 0 }}>
        <Input
          placeholder="Search"
          onChange={(e) => onFilterChange(e.target.value)}
        />
      </Box>
      <Flex align="center">
        <Select
          placeholder="Sort By"
          mr={4}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="name_asc">Name: A to Z</option>
          <option value="name_desc">Name: Z to A</option>
        </Select>
        <Button colorScheme="teal" size="sm">
          Apply Filters
        </Button>
      </Flex>
    </Flex>
  );
}

export default FilterSortBar;
