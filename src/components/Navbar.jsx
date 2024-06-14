import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/duffee-logo.png"

function Navigation() {
  return (
   
<nav class="d-flex bg-dark text-light" style={{height:"5rem"}}>
        <div class="col-5 d-flex align-items-center ps-5">
        Nuestra Carta
        </div>
        <div class="col">
        <img src={logo} href="" alt="" srcset="" class="z-3" style={{width:"5rem",alignSelf:"center",position:"absolute",marginTop:"1.4rem"}} />
        </div>
        <div class="col d-flex align-items-center ps-5 justify-content-end">
        Quienes Somos
        </div>
        <div class="col d-flex align-items-center pe-5 justify-content-end">
        Login
        </div>
      </nav>
  );
}

export default Navigation;
