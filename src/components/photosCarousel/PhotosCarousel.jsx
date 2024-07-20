import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cafe from './cafe.jpg';
import cafetorta from './cafetorta.jpg';
import cafetorta2 from './cafetorta2.webp';
import cafetorta3 from './cafetorta3.jpg';
import cafetorta4 from './cafetorta4.jpg';
import cafetorta5 from './cafetorta5.webp';
import "./carousel.css"

function PhotosCarousel() {
  return (
    <div className='logos w-100 d-flex justify-content-center' style={{height:"50%",  background: `url(${cafetorta})`}}>
      <div className='logos-slide'>
        <img src={cafe}/>
        <img src={cafetorta}/>
        <img src={cafetorta2}/>
        <img src={cafetorta3}/>
        <img src={cafetorta4}/>
        <img src={cafetorta5}/>
      </div>

      <div className='logos-slide'>
        <img src={cafe}/>
        <img src={cafetorta}/>
        <img src={cafetorta2}/>
        <img src={cafetorta3}/>
        <img src={cafetorta4}/>
        <img src={cafetorta5}/>
      </div>

      <div className='logos-slide'>
        <img src={cafe}/>
        <img src={cafetorta}/>
        <img src={cafetorta2}/>
        <img src={cafetorta3}/>
        <img src={cafetorta4}/>
        <img src={cafetorta5}/>
      </div>
    </div>
  )
}

export default PhotosCarousel;
