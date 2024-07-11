import React from "react";
import logo from "../../assets/duffee-logo.png";

function NavBarAdmin() {
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

export default NavBarAdmin;
