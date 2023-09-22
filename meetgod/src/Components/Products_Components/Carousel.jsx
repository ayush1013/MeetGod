import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
      <div className="carousel-image">
        <img src="Picsart_23-05-22_17-43-45-991.jpg" alt="Carousel 2" />
        <div className="caption-overlay">
          <div className="caption-text">
          Invoke the strength of Hanuman—Discover the transformative power of the Hanuman Chalisa, a sacred hymn for spiritual growth.
          </div>
        </div>
      </div>

      <div className="carousel-image">
        <img src="1684758058732.jpg" alt="Carousel 3" />
        <div className="caption-overlay">
          <div className="caption-text">
            Embrace the gods' creativity—Bring home a slice of the divine
            through this extraordinary painting.
          </div>
        </div>
      </div>
      <div className="carousel-image">
        <img src="Picsart_23-05-22_17-22-12-360.jpg" alt="Carousel 1" />
        <div className="caption-overlay">
          <div className="caption-text">
          Embrace the divine essence—Carry the gods' blessings close to your heart with this enchanting locket.
          </div>
        </div>
      </div>

      <div className="carousel-image">
        <img src="Picsart_23-05-22_17-44-19-365.jpg" alt="Carousel 3" />
        <div className="caption-overlay">
          <div className="caption-text">
          A divine armory—Wrap your wrist with this kada and feel their empowering presence with every movement.
          </div>
        </div>
      </div>
      <div className="carousel-image">
        <img src="Picsart_23-05-22_17-47-57-060 (1).jpg" alt="Carousel 3" />
        <div className="caption-overlay">
          <div className="caption-text">
          An emblem of divine connection—Wear the Om locket as a reminder of their love and guidance.
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
