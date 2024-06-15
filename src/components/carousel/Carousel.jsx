import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel1 from "./Duffee-Carrusel1.jpg";
import carousel2 from "./Duffee-Carrusel2.jpg";
import carousel3 from "./Duffee-Carrusel3.jpg";

function AppCarousel() {
  return (
    <Carousel interval={2000} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default AppCarousel;