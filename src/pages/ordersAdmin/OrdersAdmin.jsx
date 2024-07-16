import { useEffect, useState } from "react";
import { AuthenticationContext } from "../../components/services/authentication/UserAuthenticationContext";
import { useContext } from "react";
import NavBarAdmin from '../../components/navbar/NavBarAdmin'
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

  return (
    <div>
      <NavBarAdmin/>
      <OrdersList orders={orders} GetAllOrders={GetAllOrders}/>
      <Footer/>
    </div>
  )
}

export default OrdersAdmin
