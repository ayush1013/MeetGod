import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductSlider = ({ products }) => {
  // Settings for the Slider
  let cards = 5;
  if(products?.length===4){
    cards = 4
  }else if(products?.length===3){
    cards = 3
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: cards,
    slidesToScroll: cards,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const scrollToTop = ()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
  };

  return (
    <Slider {...settings}>
      {products.map((elem) => (
        <Link to={`/product/${elem._id}`} key={elem._id}>
          <div className="product-card" onClick={scrollToTop} >
            <Image
              h={{ lg: "250px", md: "250px", base: "200px" }}
              src={elem.image}
              alt={elem.title}
            />
            <Text fontWeight={"500"}>{elem.title}</Text>
            <Text color={"#007C7C"} h="50px" overflow={"hidden"}>
              {elem.description}
            </Text>
            <Text fontWeight={"500"}>₹{elem.price}</Text>
          </div>
        </Link>
      ))}
    </Slider>
  );
};

export default ProductSlider;
