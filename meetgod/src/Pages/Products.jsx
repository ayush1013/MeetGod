import React, { useEffect, useState } from "react";
import CarouselComponent from "../Components/Products_Components/Carousel";
import FilterSortBar from "../Components/Products_Components/FilterSortBar";
import Pagination from "../Components/Products_Components/Pagination";
import ProductsList from "../Components/Products_Components/ProductsList";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar_Components/Navbar";
import MobNav from "../Components/Navbar_Components/MobNav";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex } from "@chakra-ui/react";

const Products = () => {
  const { currentPage, totalPages } = useSelector(
    (store) => store.productReducer.products
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = searchParams.get("page");

  const [page, setPage] = useState(initialPage || 1);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    document.title = "Shop";
  }, []);

  // console.log("initialPage",initialPage)

  return (
    <Box>
      <Navbar page={page} />
      <MobNav />
      <CarouselComponent />
      <Flex>
        <Box
          display={{ base: "none", md: "block", lg: "block" }}
          w={{ base: "100%", md: "210px", lg: "18%" }}
          ml={{ md: "20px", lg: "30px" }}
        >
          <FilterSortBar page={page} />
        </Box>
        <ProductsList page={page} />
      </Flex>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default Products;
