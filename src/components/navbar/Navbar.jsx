import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/duffee-logo.png"

function Navigation() {
  return (
   
<nav class="d-flex bg-dark text-light" style={{height:"5rem"}}>
        <div class="col-4 d-flex align-items-center ps-5">
        <a href="" class="text-white text-decoration-none fs-3">Nuestra Carta</a>
        </div>
        <div class="col-4 d-flex justify-content-center bg-red">
        <img src={logo} href="" alt="" srcset="" class="z-3" style={{width:"9rem",alignSelf:"center",position:"absolute",marginTop:"4.2rem"}} />
        </div>
        <div class="col-4 d-flex align-items-center ps-5 justify-content-end gap-5">
        <a href="" class="text-white text-decoration-none fs-3 pe-5">Quienes somos</a>
        <a href="" class="text-white text-decoration-none fs-3 pe-5">Login</a>
        </div>
      </nav>
  );
}

export default Navigation;
