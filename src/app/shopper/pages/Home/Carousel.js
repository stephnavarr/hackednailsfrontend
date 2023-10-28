import React, { useState } from 'react';
import classes from './Carousel.module.css';
const brightNude = require('../../assets/brightNudeYellow.jpg');
const clearCoffin = require('../../assets/clearCoffin.jpg');
const burgundyNailsLong = require('../../assets/burgundyNailsLong.jpg');

function Carousel() {
  const images = [brightNude, clearCoffin, burgundyNailsLong]; // Add your image URLs
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      prevSlide => (prevSlide - 1 + images.length) % images.length,
    );
  };

  return (
    <div className={classes.carouselContainer}>
      <div
        className={classes.carousel}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className={classes.carouselSlide} key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default Carousel;
