import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/duffee-logo.png";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="d-flex bg-black text-light" style={{ height: "5rem" }}>
      <style jsx>{`
        .hover-color:hover {
          color: #ffc091 !important;
          //esta etiqueta te deja poner estilos css directamente en el componente
        }
      `}</style>
      <div className="col-4 d-flex align-items-center ps-5">
        <a
          href="#"
          onClick={() => navigate("/menu")}
          className="text-white text-decoration-none fs-3 hover-color"
        >
          Nuestra Carta
        </a>
      </div>
      <div className="col-4 d-flex justify-content-center bg-red">
        <img
          src={logo}
          href="#"
          alt="Duffee Logo"
          className="z-3"
          onClick={() => navigate("/")}
          style={{ width: "9rem", alignSelf: "center", position: "absolute", marginTop: "4.2rem" }}
        />
      </div>
      <div className="col-4 d-flex align-items-center ps-5 justify-content-end gap-5">
        <a
          href="#"
          onClick={() => navigate("/")}
          className="text-white text-decoration-none fs-3 pe-5 hover-color"
        >
          Quienes somos
        </a>
        <a
          href="#"
          onClick={() => navigate("/login")}
          className="text-white text-decoration-none fs-3 pe-5 hover-color"
        >
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navigation;