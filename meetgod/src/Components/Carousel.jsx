import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
      <div>
        <img src="https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg" alt="Carousel 1" />
      </div>
      <div>
        <img src="https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg" alt="Carousel 2" />
      </div>
      <div>
        <img src="https://wowslider.com/sliders/demo-5/data/images/sweden.jpg" alt="Carousel 3" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
