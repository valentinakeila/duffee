import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ShoppingCartItem from './ShoppingCartItem';
import cafeComun from "../productsPage/productsImages/coffees/cafeComun.jpeg"
import cafeCortado from "../productsPage/productsImages/coffees/cafeCortado.jpeg"
import capuccino from "../productsPage/productsImages/coffees/capuccino.jpeg"

const ShoppingCartPage = () => {

    const productsArray = [
        {
            id: "p1",
            name: "Café común",
            imgUrl: cafeComun,
            price: 750
        },
        {
            id: "p2",
            name: "Cortado",
            imgUrl: cafeCortado,
            price: 900
        },
        {
            id: "p3",
            name: "Capuccino",
            imgUrl: capuccino,
            price: 1100
        }
    ];

    const [totalPrice, setTotalPrice] = useState(0); 

  return (
    <div className='d-flex-column bg-warning bg-opacity-10'>
        <div className='py-4 fs-1 fw-bold text-center text-dark'>---------- CARRITO DE COMPRAS ----------</div>
        <div>
            {productsArray.map(item => {
                return (
                    <ShoppingCartItem
                        key={item.id}
                        imageUrl={item.imgUrl}
                        productName={item.name}
                        productPrice={item.price}
                    />
                )
            })}
        </div>
        <div className='w-75 mx-auto d-flex justify-content-end py-3'>
            <div className='d-flex align-items-center text-dark px-3 fw-bold'>TOTAL $ ####.##</div>
            <Button variant='success'>CONFIRMAR PEDIDO</Button>
        </div>
    </div>
  )
}

export default ShoppingCartPage;
