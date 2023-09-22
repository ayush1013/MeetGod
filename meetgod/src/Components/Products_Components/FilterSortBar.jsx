import { Box, Flex, Text, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function FilterSortBar({ page }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.getAll("category");
  const initialSort = searchParams.get("sort");
  const initialOrder = searchParams.get("order");

  const [category, setCategory] = useState(initialCategory || []);
  const [sort, setSort] = useState(initialSort || []);
  const [order, setOrder] = useState(initialOrder || "");

  const handleCheckbox = (e) => {
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  // console.log(category); 

  const handleSort = (e) => {
    if(e.target.name === "sortT"){
      setSort("title")
    }else{
      setSort("price")
    }
    setOrder(e.target.value);
  };

  // console.log("searchParams",initialSort);

  useEffect(() => {
    let params = {};
    params.category = category;
    sort && (params.sort = sort);
    order && (params.order = order);
    params.page = page;
    setSearchParams(params);
  }, [order, category, page]);

  return (
    <Box
      display={{ base: "block", md: "block", lg: "block" }}
      w={{ base: "100%", md: "210px", lg: "100%" }}
      mt={{ md: "30px", lg: "40px" }}
      h="100vh"
      bgColor={"white"}
      borderRight={{
        base: "none",
        md: "2px solid #DDDDDD",
        lg: "2px solid #DDDDDD",
      }}
      boxSizing="borderBox"
      p="20px"
      // ml={{ md: "20px", lg: "30px" }}
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

        <Grid
          rowGap={"5px"}
          mt="10px"
          borderBottom={"1px solid #DDDDDD"}
          pb="5px"
          onChange={handleSort}
        >
          <Flex gap="5px">
            <input
              type="radio"
              name="sortp"
              value="asc"
              defaultChecked={order === "asc"}
            />
            <Text> Price - Low to High </Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="radio"
              name="sortp"
              value="desc"
              defaultChecked={order === "desc"}
            />
            <Text> Price - High to Low </Text>
          </Flex>
        </Grid>
        <Grid columnGap={"5px"} rowGap={"5px"} mt="5px" onChange={handleSort}>
          <Flex gap="5px">
            <input
              type="radio"
              name="sortT"
              value="asc"
              defaultChecked={order === "asc"}
            />
            <Text> Title - A to Z </Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="radio"
              name="sortT"
              value="desc"
              defaultChecked={order === "desc"}
            />
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
              checked={category.includes("book")}
              value="book"
              onChange={handleCheckbox}
            />
            <Text>Books</Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="checkbox"
              checked={category.includes("statue")}
              value="statue"
              onChange={handleCheckbox}
            />
            <Text>Murti</Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="checkbox"
              checked={category.includes("artwork")}
              value="artwork"
              onChange={handleCheckbox}
            />
            <Text>Art-Works</Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="checkbox"
              checked={category.includes("frame")}
              value="frame"
              onChange={handleCheckbox}
            />
            <Text>Frame</Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="checkbox"
              checked={category.includes("locket")}
              value="locket"
              onChange={handleCheckbox}
            />
            <Text>Locket</Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="checkbox"
              checked={category.includes("kada")}
              value="kada"
              onChange={handleCheckbox}
            />
            <Text>Kada</Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="checkbox"
              checked={category.includes("audio")}
              value="audio"
              onChange={handleCheckbox}
            />
            <Text>Bhajan</Text>
          </Flex>
          <Flex gap="5px">
            <input
              type="checkbox"
              checked={category.includes("jewelry")}
              value="jewelry"
              onChange={handleCheckbox}
            />
            <Text>Jewellery</Text>
          </Flex>
        </Grid>
      </Box>
    </Box>
  );
}

export default FilterSortBar;
