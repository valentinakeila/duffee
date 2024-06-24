import React from "react";

function OurStory() {
  return (
    <div className="d-flex justify-content-center gap-4 p-4 align-items-center " style={{height:"70vh", width: "100%", backgroundColor:"#E8E3DD"}}>
     
     <div class="col-md-4">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
      </div>

      <div class="col-md-7 d-flex flex-column gap-5">
        <h2 class="featurette-heading fw-normal lh-1 display-1">Duffee, <span class="text-body-secondary">nuestra historia:</span></h2>
        <p class="lead fs-3 "> Fundada en 1922 por un grupo de programadores apasionados por el café,{" "}
          <span className="fw-bold">Duffee</span> nació con la misión de ofrecer
          café de alta calidad en un entorno donde las personas puedan
          relajarse, trabajar y socializar. La cafetería ha crecido gracias a su
          compromiso con la excelencia y su enfoque en la comunidad local.</p>
      </div>
      


    </div>
  );
}

export default OurStory;
