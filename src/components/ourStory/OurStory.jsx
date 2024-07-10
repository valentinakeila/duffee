import React from "react";
import duffeGif from "./duffeGif.mp4";

function OurStory() {
  return (
    <div
      className="d-flex justify-content-center gap-4 p-4 align-items-center "
      style={{ height: "70vh", width: "100%", backgroundColor: "#E8E3DD" }}
    >
      <div
        className="rounded-circle overflow-hidden"
        style={{ width: "500px", height: "500px", position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            overflow: "hidden",
            borderRadius: "50%",
          }}
        >
          <video
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            style={{ objectFit: "cover", borderRadius: "50%" }}
          >
            <source src={duffeGif} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="col-md-7 d-flex flex-column gap-5">
        <h2 className="featurette-heading fw-normal lh-1 display-1">
          Duffee, <span className="text-body-secondary">nuestra historia:</span>
        </h2>
        <p className="lead fs-3 ">
          {" "}
          Fundada en 1922 por un grupo de programadores apasionados por el café,{" "}
          <span className="fw-bold">Duffee</span> nació con la misión de ofrecer
          café de alta calidad en un entorno donde las personas puedan
          relajarse, trabajar y socializar. La cafetería ha crecido gracias a su
          compromiso con la excelencia y su enfoque en la comunidad local.
          Duffee en un refugio digital para trabajadores remotos y freelancers,
          haciendo que la misión de la cafetería de ser un lugar para trabajar,
          socializar y relajarse sea más relevante que nunca.
        </p>
      </div>
    </div>
  );
}

export default OurStory;
