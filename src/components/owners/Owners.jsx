import React from "react";
import Nicoduffee from "./Nicoduffee.jpg"
import Valenduffee from "./Valenduffee.jpg"
import Manuduffee from "./Manuduffee.jpg"

function Owners() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh", width: "100%", backgroundColor:"#f5e8c6"}}>
      <div className="row text-center">
        <div className="col-lg-4" style={{maxWidth:"300px",margin:"100px"}}>
        <img
            src={Nicoduffee}
            className="rounded-circle"
            width="140"
            height="140"
            alt="Nicolas Cataldi"
          />
          <h2 className="fw-normal">Nicolas Cataldi</h2>
          <p>
          Nicolas Cataldi, un amante del café y un programador de profesión, siempre soñó con un lugar donde la tecnología y la tradición del café se encontraran. Nieto de uno de los fundadores originales de Duffee, decidio honrar ese legado y continuar con el negocio familiar, Nicolas estudió tanto programación, como técnicas avanzadas para preparar café. 
         
          </p>
         
        </div>
        <div className="col-lg-4" style={{maxWidth:"300px",margin:"100px"}}>
        <img
            src={Valenduffee}
            className="rounded-circle"
            width="140"
            height="140"
            alt="Valentina Garrido"
          />
          <h2 className="fw-normal">Valentina Garrido</h2>
          <p>
          Valentina Garrido se unió a Duffee con una pasión innata por el café y una vasta experiencia en gestión de empresas. Habiendo trabajado en varias startups tecnológicas, Valentina aportó un enfoque fresco y dinámico a la operación de Duffee. Su visión de Duffee es un lugar donde las ideas florecen y las amistades se forman, todo mientras se disfruta de una taza de café excepcional.
          </p>
        
        </div>
        <div className="col-lg-4" style={{maxWidth:"300px",margin:"100px"}}>
        <img
            src={Manuduffee}
            className="rounded-circle"
            width="140"
            height="140"
            alt="Manuel Cecarelli"
          />
          <h2 className="fw-normal">Manuel Cecarelli</h2>
          <p>
          Manuel Cecarelli, un experto en redes y seguridad informática, siempre encontró en el café su fuente de inspiración y concentración. Conocido entre sus colegas como el "hacker del café", Manuel veía en cada taza una oportunidad para descifrar nuevos desafíos. Se unió a Duffee atraído por su historia y su enfoque comunitario. 
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Owners;
