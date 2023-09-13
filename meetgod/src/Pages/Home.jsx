import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import MobNav from "../Components/MobNav";
import { Flex } from "@chakra-ui/react";
import HomeLeftSection from "../Components/Home_Components/HomeLeftSection";
import HomeMiddleSection from "../Components/Home_Components/HomeMiddleSection";
import HomeRightSection from "../Components/Home_Components/HomeRightSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MobNav />
      <Flex
        w="100%"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        justifyContent={"space-around"}
      >
        {/* Home Left Section */}
        <HomeLeftSection />

        {/* Home Middle Section */}
        <HomeMiddleSection />

        {/* Home Right Section */}
        <HomeRightSection />
      </Flex>
    </div>
  );
};

export default Home;
