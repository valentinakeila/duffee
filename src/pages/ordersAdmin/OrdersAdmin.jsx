import { useEffect, useState } from "react";
import { AuthenticationContext } from "../../components/services/authentication/UserAuthenticationContext";
import { useContext } from "react";
import NavBarAdmin from '../../components/navbar/NavBarAdmin'
import NavBarSysAdmin from "../../components/navbar/NavBarSysAdmin";
import Footer from '../../components/footer/Footer'
import OrdersList from './OrdersList'


function OrdersAdmin() {

  const [orders, setOrders] = useState([])
  const { currentUser } = useContext(AuthenticationContext);

  const GetAllOrders = async () => {
    try {
      const response = await fetch("http://localhost:8000/orders", {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          "authorization": `Bearer ${currentUser.accessToken}`
        },
      });
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  }



   useEffect(() => {
    GetAllOrders();
    const intervalId = setInterval(GetAllOrders, 60000); // 60000ms = 1 minuto
    
    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);
  
  let navBarComponent;
  if (currentUser === null) {
    navBarComponent = <Navigation />;
  } else if (currentUser.isSysAdmin) {
    navBarComponent = <NavBarSysAdmin />;
  } else if (currentUser.adminRole) {
    navBarComponent = <NavBarAdmin />;
  } 
  return (
    <div>
      {navBarComponent}
      <OrdersList orders={orders} GetAllOrders={GetAllOrders}/>
      <Footer/>
    </div>
  )
}

export default OrdersAdmin
