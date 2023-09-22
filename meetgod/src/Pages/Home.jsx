import React, { useEffect } from "react";
import Navbar from "../Components/Navbar_Components/Navbar";
import MobNav from "../Components/Navbar_Components/MobNav";
import { Flex } from "@chakra-ui/react";
import HomeLeftSection from "../Components/Home_Components/HomeLeftSection";
import HomeMiddleSection from "../Components/Home_Components/HomeMiddleSection";
import HomeRightSection from "../Components/Home_Components/HomeRightSection";

const Home = () => {

  useEffect(()=>{
    document.title = "Home"
  },[])


  return (
    <div>
      <Navbar />
      <MobNav />
      <Flex
        w="100%"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        justifyContent={"space-around"}
      >
        <HomeLeftSection />
        <HomeMiddleSection />
        <HomeRightSection />
      </Flex>
    </div>
  );
};

export default Home;
