import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          style={{
            width: '100%',
            height: 'auto',
            display: index === currentSlide ? 'block' : 'none',
          }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentSlide ? 'black' : 'gray',
              margin: '5px',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
