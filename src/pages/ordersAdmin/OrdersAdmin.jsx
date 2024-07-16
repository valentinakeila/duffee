import { useEffect, useState } from "react";
import NavBarAdmin from '../../components/navbar/NavBarAdmin'
import Footer from '../../components/footer/Footer'
import OrdersList from './OrdersList'
import { AuthenticationContext } from "../../components/services/authentication/UserAuthenticationContext";
import { useContext } from "react";

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
