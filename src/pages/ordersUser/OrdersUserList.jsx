import React from 'react'
import OrderUserCard from './OrderUserCard'

function OrdersUserList({ orders,GetAllOrders }) {
  return (
    <div className='w-100 d-flex flex-column justify-content-center gap-5 h-100 p-4 mt-5' style={{ alignItems:"center"}}>
      {orders.length > 0 && orders != null ? (
          <div style={{ width: "60%" }}>
          <fieldset style={{ padding: "20px", position: "relative" }}>
              <legend style={{ fontSize: "1.9em", color: "#CAB4FF", padding: "0 10px", position: "absolute", top: "-15px", left: "10px" }}>Tus ordenes</legend>
              <div className='f-flex flex-column justify-content-center gap-5 h-100 p-4'>
                  {orders.map((order) => <OrderUserCard order={order} key={order.id} GetAllOrders={GetAllOrders} />)}
              </div>
          </fieldset>
      </div>
        
      ) : (
        <span className='text-center mt-5 display-4 font-italic' style={{ width: '100%', color: '#dd8541', fontStyle: 'italic', fontWeight: 'normal' }}>
          No hay órdenes pendientes
        </span>
      )}
    </div>
  )
}

export default OrdersUserList