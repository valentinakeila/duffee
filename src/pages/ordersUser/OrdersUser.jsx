import { useEffect, useState, useContext } from "react";
import { AuthenticationContext } from "../../components/services/authentication/UserAuthenticationContext";
import NavBarUser from "../../components/navbar/NavBarUser";
import Footer from "../../components/footer/Footer";
import OrdersUserList from "./OrdersUserList";

function OrdersUser() {
    const [orders, setOrders] = useState([]);
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
            console.log(data)
            const userOrders = data.filter((order) => order.userId === currentUser.id);
            setOrders(userOrders);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetAllOrders();
    }, []);

    return (
        <>
            <NavBarUser />
            <OrdersUserList orders={orders} GetAllOrders={GetAllOrders} />
            <Footer />
        </>
    );
}

export default OrdersUser;
