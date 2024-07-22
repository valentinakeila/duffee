import React from 'react'

function OrderUserCard({order}) {
  return (
    <div className='p-2 px-3 mx-2 rounded mb-4' style={{border:"solid 2px #CAB4FF",width:"100%",color:"#384048",backgroundColor:"white"}}>
    <div className='w-100 d-flex fs-5 fw-bolder'>
   <div className='w-100 d-flex flex-column gap-2 fs-4'>
   <h3>Numero de Orden - {order.id}</h3>
   {order.shoppingCart.map((item, index) => (
   <p key={index} className='mb-0'>
      <div class="form-check">

<p className='p-0 m-0'>x{item.quantity} {item.name} - ${item.quantity * item.price}</p>

</div>
   </p>
 ))}
 <p className='fw-bold fs-4 w-100' style={{textAlign:"end"}}>Importe: ${order.totalPrice}</p>
</div>
</div>

</div>
  )
}

export default OrderUserCard