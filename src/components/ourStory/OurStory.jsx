import React from "react";
import duffeGif from "./duffeGif.mp4"

function OurStory() {
  return (
    <div className="d-flex justify-content-center gap-4 p-4 align-items-center " style={{height:"70vh", width: "100%", backgroundColor:"#E8E3DD"}}>
     
     <div class="col-md-4">
     <video width="500" height="500" autoPlay loop muted>
          <source src={duffeGif}/>
        </video>
        
      </div>

      <div class="col-md-7 d-flex flex-column gap-5">
        <h2 class="featurette-heading fw-normal lh-1 display-1">Duffee, <span class="text-body-secondary">nuestra historia:</span></h2>
        <p class="lead fs-3 "> Fundada en 1922 por un grupo de programadores apasionados por el café,{" "}
          <span className="fw-bold">Duffee</span> nació con la misión de ofrecer
          café de alta calidad en un entorno donde las personas puedan
          relajarse, trabajar y socializar. La cafetería ha crecido gracias a su
          compromiso con la excelencia y su enfoque en la comunidad local. Duffee en un refugio digital para trabajadores remotos y freelancers, haciendo que la misión de la cafetería de ser un lugar para trabajar, socializar y relajarse sea más relevante que nunca.</p>
      </div>
      


    </div>
  );
}

export default OurStory;
