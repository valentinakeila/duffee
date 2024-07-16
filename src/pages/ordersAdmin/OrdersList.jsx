import React from 'react';
import OrderCard from './OrderCard';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OrdersList({ orders,GetAllOrders }) {
  return (
    <div className='w-100 d-flex flex-column justify-content-center gap-5 h-100 p-4' style={{ alignItems:"center"}}>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition: Bounce/>
      {orders.length > 0 && orders != null ? (
        orders.map((order) => <OrderCard order={order} key={order.id} GetAllOrders={GetAllOrders}/>)
      ) : (
        <span className='text-center mt-5 display-4 font-italic' style={{ width: '100%', color: '#dd8541', fontStyle: 'italic', fontWeight: 'normal' }}>
          No hay órdenes pendientes
        </span>
      )}
    </div>
  );
}

export default OrdersList;
