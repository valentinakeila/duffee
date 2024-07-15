import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ShoppingCartItem from "./ShoppingCartItem";
import { ShoppingCartContext } from "../services/shoppingCartContext/UserShoppingCartContext";

const ShoppingCartPage = () => {
  const { shoppingCart, emptyShoppingCart } = useContext(ShoppingCartContext);
  const [emptyFlag, setEmptyFlag] = useState(false);

  const onClickEmptyHandler = () => {
    emptyShoppingCart();
  };

  useEffect(() => {
    if (shoppingCart.lenght == 0) {
      setEmptyFlag(false);
    } else {
      setEmptyFlag(true);
    }
  }, [shoppingCart]);

  return (
    <div className="d-flex-column bg-warning bg-opacity-10">
      <div className="py-4 fs-1 fw-bold text-center text-dark">
        ---------- CARRITO DE COMPRAS ----------
        {emptyFlag ? "" : <h3>(Su carrito se encuentra vacío.)</h3>}
      </div>
      <div>
        {shoppingCart.map((item) => {
          return (
            <ShoppingCartItem
              key={item.id}
              itemId={item.id}
              imageUrl={item.imageUrl}
              productName={item.name}
              productPrice={item.price}
            />
          );
        })}
      </div>
      <div className="w-75 mx-auto d-flex justify-content-end py-3">
        <div className="d-flex align-items-center text-dark px-3 fw-bold">
          TOTAL $ ####.##
        </div>
        <Button className="me-3" variant="success">
          CONFIRMAR PEDIDO
        </Button>
        <Button variant="dark" onClick={onClickEmptyHandler}>
          VACIAR CARRITO
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
