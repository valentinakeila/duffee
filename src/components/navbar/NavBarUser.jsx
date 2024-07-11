import React from "react";
import logo from "../../assets/duffee-logo.png";

function NavBarUser() {
  return (
    <nav className="d-flex bg-black text-light" style={{ height: "5rem" }}>
      <style jsx>{`
        .hover-color:hover {
          color: #ffc091 !important;
          //esta etiqueta te deja poner estilos css directamente en el componente
        }
      `}</style> 
      <div className="col-4 d-flex align-items-center ps-5">
        <a href="" className="text-white text-decoration-none fs-3 hover-color">
          Nuestra Carta
        </a>
        <a
          href=""
          className="text-white text-decoration-none fs-3 pe-5 m-5 hover-color"
        >
          Quienes somos
        </a>
      </div>
      <div className="col-4 d-flex justify-content-center bg-red">
        <img
          src={logo}
          href=""
          alt=""
          srcSet=""
          className="z-3"
          style={{
            width: "9rem",
            alignSelf: "center",
            position: "absolute",
            marginTop: "4.2rem",
          }}
        />
      </div>
      <div className="col-4 d-flex align-items-center ps-5 justify-content-end gap-5">
        <a href="" className="text-white text-decoration-none fs-3 hover-color">
          Pedidos
        </a>
        <button
          className="btn btn-link text-white p-0 hover-color"
          style={{ width: "2.5rem", height: "2.8rem" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="currentColor"
            className="bi bi-cart4"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>
        </button>
        <a
          href=""
          className="text-white text-decoration-none fs-3 pe-5 hover-color"
        >
          Cerrar sesión
        </a>
      </div>
    </nav>
  );
}

export default NavBarUser;

