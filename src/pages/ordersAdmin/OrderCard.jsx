import React from 'react';
import { AuthenticationContext } from "../../components/services/authentication/UserAuthenticationContext";
import { useContext } from "react";
import "./checkbox.css"

function OrderCard({ order,GetAllOrders }) {

    const { currentUser } = useContext(AuthenticationContext);

    const deleteHandler = async (e) => {
        e.preventDefault();
    
        if (window.confirm('¿Estás seguro de borrar esta orden?')) {
          try {
            const response = await fetch(`http://localhost:8000/orders/${order.id}`, {
              method: 'DELETE',
              headers: {
                accept: 'application/json',
                authorization: `Bearer ${currentUser.accessToken}`
              },
            });
    
            if (response.ok) {
              GetAllOrders()
            } else {
              console.error('Error al borrar la orden');
            }
          } catch (error) {
            console.error('Error al borrar la orden:', error);
          }
        }
      };


  return (
    <div className='p-2 px-3 mx-2 rounded' style={{border:"solid 2px #CAB4FF",backgroundColor:"rgba(255, 249, 247, 0.97)",width:"60%",color:"#384048"}}>
         <div className='w-100 d-flex fs-5 fw-bolder'>
        <div className='w-100 d-flex flex-column gap-2 fs-4'>
        <h3>Orden N°{order.id}</h3>
        {order.shoppingCart.map((item, index) => (
        <p key={index} className='mb-0'>
           <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    <p className='p-0 m-0'>x{item.quantity} {item.name}</p>
  </label>
</div>
        </p>
      ))}
      <p className='fw-bold fs-4 w-100' style={{textAlign:"end"}}>Importe: ${order.totalPrice}</p>
     </div>

     <button className='border-0 text-white fw-bold py-3 px-4 rounded' style={{ fontSize: "1.5rem", backgroundColor: "#CAB4FF", height:"fit-content",width:"fit-content",borderBottomRightRadius:"4px"}} onClick={deleteHandler}>QUITAR</button>
    </div>
    
    </div>
   
  );
}

export default OrderCard;
