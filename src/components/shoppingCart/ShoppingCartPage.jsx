import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ShoppingCartItem from "./ShoppingCartItem";
import { ShoppingCartContext } from "../services/shoppingCartContext/UserShoppingCartContext";
import NavBarUser from "../navbar/NavBarUser"
import Footer from "../footer/Footer"

const ShoppingCartPage = () => {
  const { shoppingCart,setShoppingCart, totalPrice ,emptyShoppingCart,confirmOrder } = useContext(ShoppingCartContext);
  const [emptyFlag, setEmptyFlag] = useState(false);

  const onClickEmptyHandler = () => {
    emptyShoppingCart();
  };

  useEffect(() => {
    if (shoppingCart.length < 1) {
      setEmptyFlag(false);
    } else {
      setEmptyFlag(true);
    }
  }, [shoppingCart]);

  return (
    <div className="d-flex-column bg-opacity-10" style={{backgroundColor:"#FFFFFF"}}>
      <NavBarUser></NavBarUser>
      <div className="py-5 fs-1 fw-bold text-center text-dark mb-5 mt-5">
        <div className='w-100 d-flex mb-5' style={{height:"5%",}}>
            <div style={{width:"35%",borderBottom:"4px solid #B9694F",marginBottom:"1.4rem"}}></div>
            <span className='text-center display-5 fw-bold' style={{width:"30%",color:"#B9694F", fontWeight:"normal"}}>CARRITO DE COMPRAS</span>
            <div style={{width:"35%",borderBottom:"4px solid #B9694F",marginBottom:"1.4rem"}}></div>
        </div>
        {emptyFlag ? <div>
      <div>
        {shoppingCart.map((item) => {
          return (
            <ShoppingCartItem
              key={item.id}
              itemId={item.id}
              imageUrl={item.imageUrl}
              productName={item.name}
              productPrice={item.price}
              productQuantity={item.quantity}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          );
        })}
      </div>
      <div className="w-75 mx-auto d-flex justify-content-end py-3">
        <div className="d-flex align-items-center text-dark px-3 fw-bold fs-4">
          TOTAL $ {totalPrice}
        </div>
        <Button className="me-3" variant="success" onClick={confirmOrder}>
          CONFIRMAR PEDIDO
        </Button>
        <Button variant="dark" onClick={onClickEmptyHandler}>
          VACIAR CARRITO
        </Button>
      </div>
      </div> : <span className='text-center display-4' style={{width:"100%",color:"#B9694F", fontStyle: "italic", fontWeight:"normal"}}>Su carrito se encuentra vacio o se cayo el backend 👍</span>}
      </div>
      
     <Footer/>
    </div>
  );
};

export default ShoppingCartPage;

//corregir el visualizador del precio total del carrito.
