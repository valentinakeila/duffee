import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cafe from './cafe.jpg';
import cafetorta from './cafetorta.jpg';
import cafetorta2 from './cafetorta2.webp';
import cafetorta3 from './cafetorta3.jpg'
import cafetorta4 from "./cafetorta4.jpg"
import cafetorta5 from './cafetorta5.webp'
import duffeelogo from './duffeelogo.png'; 

const boxes = [
  { id: 1, image: cafe },
  { id: 2, image: cafetorta2 },
  { id: 3, image: cafetorta3 },
  { id: 4, image: cafetorta4 },
   {id:5, image: cafetorta5},
  
];

const containerStyle = {
  maxWidth: '100%',
  overflow: 'hidden',
  margin: '50px auto',
  position: 'relative', // Permite el overlay
  backgroundColor: 'black',
  backgroundImage: `url(${cafetorta})`,
};

const bannerStyle = {
  display: 'flex',
  animation: 'bannermove 10s linear infinite',
};

const boxStyle = {
  width: '500px',
  height: '400px',
  margin: '0.3rem',
  backgroundColor: '#000',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const keyframesStyle = `
@keyframes bannermove {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-${boxes.length * 500}px); /*para la distancia  */
  }
}
`;

const logoStyle = {
  position: 'absolute',
  top: '-10%', 
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1, // esta arriba del carrusel
  width: '1000px', 
  height: '500px',
};

function PhotosCarousel() {
  return (
    <div className="container mt-0 mb-0" style={containerStyle}>
      <style>{keyframesStyle}</style>
      <img src={duffeelogo} alt="Duffee Logo" style={logoStyle} /> 
      <div className="carousel slide">
        <div className="carousel-inner" style={bannerStyle}>
          {boxes.map((box, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{
                ...boxStyle,
                backgroundImage: `url(${box.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <img src={box.image} style={{ display: 'none' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotosCarousel;

