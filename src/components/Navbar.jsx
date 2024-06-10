import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/duffee-logo.png"

function Navigation() {
  return (
    <>
      
      <nav style={{width:"100%", height:"8vh", backgroundColor:"black",display:"flex",alignItems:"center"}}>
        <div style={{width:"45%", height:"100%", backgroundColor:"black",display:"flex",justifyContent:"flex-start",alignItems:"center",paddingLeft:"10%",paddingRight:"10%"}}>
          <a href="" style={{textDecoration:"none",color:"white"}}>• Nuestra Carta</a>
        </div>
        <div style={{width:"55%", height:"100%", backgroundColor:"black",display:"flex",justifyContent:"flex-start",alignItems:"center", gap:"20%"}}>
          <img src={logo} href="" alt="" srcset="" style={{width:"5rem",alignSelf:"center",position:"relative",marginTop:"1.4rem"}} />
          <a href="" style={{textDecoration:"none",color:"white"}}>• Quienes somos</a>
          <a href="" style={{textDecoration:"none",color:"white"}}>• Login</a>
        </div>
        
        
      </nav>
      
    </>
  );
}

export default Navigation;