import { Box, Flex, Text, Grid } from "@chakra-ui/react";

function FilterSortBar() {
  return (
    <Box
      display={{ base: "none", md: "block", lg: "block" }}
      w={{ base: "0px", md: "210px", lg: "18%" }}
      mt={{md:"30px",lg:"40px"}}
      h="100vh"
      bgColor={"white"}
      borderRight={"2px solid #DDDDDD"}
      boxSizing="borderBox"
      p="20px"
      ml={{md:"20px",lg:"30px"}}
      zIndex={5}
      position={"sticky"}
      top="65px"
    >
      <Box>
        <Text
          fontSize={{ md: "18px", lg: "20px" }}
          fontWeight={"bold"}
          h="35px"
          borderBottom={{ md: "2px solid #DDDDDD", lg: "2px solid #DDDDDD" }}
        >
          Sort By
        </Text>

        <Grid rowGap={"5px"} mt="10px" borderBottom={"1px solid #DDDDDD"} pb="5px">
          <Flex gap="5px">
            <input type="radio" name="sortp" />
            <Text> Price - Low to High </Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="radio"
              name="sortp"
              style={{ backgroundColor: "red" }}
            />
            <Text> Price - High to Low </Text>
          </Flex>
        </Grid>
        <Grid columnGap={"5px"} rowGap={"5px"} mt="5px">
          <Flex gap="5px">
            <input type="radio" name="sortA" />
            <Text> Title - A to Z </Text>
          </Flex>
          <Flex gap="5px">
            <input type="radio" name="sortA" />
            <Text> Title - Z to A </Text>
          </Flex>
        </Grid>
      </Box>
      <Box>
        <Text
          fontSize={{ md: "18px", lg: "20px" }}
          fontWeight={"bold"}
          h="35px"
          borderBottom={{ md: "2px solid #DDDDDD", lg: "2px solid #DDDDDD" }}
          mt="20px"
        >
          Filter
        </Text>
        <Grid rowGap={"5px"}>
          <Flex gap="5px" mt="10px">
            <input
              type="checkbox"
              // checked={category.includes("Novel")}
              value="book"
              // onChange={handleCheckbox}
            />
            <Text>Books</Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="checkbox"
              // checked={category.includes("Motivational")}
              value="statue"
              // onChange={handleCheckbox}
            />
            <Text>Murti</Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="checkbox"
              // checked={category.includes("Science_Fiction")}
              value="artwork"
              // onChange={handleCheckbox}
            />
            <Text>Art-Works</Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="checkbox"
              // checked={category.includes("Thriller")}
              value="frame"
              // onChange={handleCheckbox}
            />
            <Text>Frame</Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="checkbox"
              // checked={category.includes("Thriller")}
              value="locket"
              // onChange={handleCheckbox}
            />
            <Text>Locket</Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="checkbox"
              // checked={category.includes("Thriller")}
              value="kada"
              // onChange={handleCheckbox}
            />
            <Text>Kada</Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="checkbox"
              // checked={category.includes("Thriller")}
              value="audio"
              // onChange={handleCheckbox}
            />
            <Text>Bhajan</Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="checkbox"
              // checked={category.includes("Thriller")}
              value="jewellery"
              // onChange={handleCheckbox}
            />
            <Text>Jewellery</Text>
          </Flex>
        </Grid>
      </Box>
    </Box>
  );
}

export default FilterSortBar;
