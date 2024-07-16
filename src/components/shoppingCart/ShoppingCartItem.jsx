import { Button } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import UnitCounter from "./UnitCounter";
import { ShoppingCartContext } from "../services/shoppingCartContext/UserShoppingCartContext";

const ShoppingCartItem = ({ itemId, imageUrl, productName, productPrice, productQuantity, shoppingCart, setShoppingCart }) => {
  const { removeToShoppingCart, updateTotalPrice } = useContext(ShoppingCartContext);
  const [subTotalPrice, setSubTotalPrice] = useState(productPrice * productQuantity);

  useEffect(() => {
    setSubTotalPrice(productPrice * productQuantity);
  }, [productQuantity, productPrice]);

  const AddUnit = () => {
    setShoppingCart(shoppingCart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const SubstractUnit = () => {
    if (productQuantity > 1) {
      setShoppingCart(shoppingCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  const onDeleteClickHandler = () => {
    const updatedCart = shoppingCart.filter((item) => item.id !== itemId);
    setShoppingCart(updatedCart);
    removeToShoppingCart(itemId);
    updateTotalPrice();
  };

  useEffect(() => {
    updateTotalPrice();
  }, [subTotalPrice, shoppingCart]);

  return (
    <div className="d-flex w-75 border border-secondary rounded my-3 mx-auto align-items-center bg-opacity-10 p-1" style={{backgroundColor:"#FDFDFD"}}>
      <div className="w-25 d-flex align-items-center gap-3">
        <img
          className="rounded m-2"
          style={{ height: "85px", width: "120px" }}
          src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
          alt=""
        />
        <h3 className="text-wrap">{productName}</h3>
      </div>
      <UnitCounter
        amountDisplay={productQuantity}
        addUnit={AddUnit}
        substractUnit={SubstractUnit}
      />
      <div className="w-25 d-flex w-25 justify-content-around align-items-center">
        <div className="text-center">
          <h6 className="text-success">Precio</h6>
          <h5>{`$ ${productPrice}`}</h5>
        </div>
        <div className="text-center">
          <h6 className="text-success">Subtotal</h6>
          <h5>{`$ ${subTotalPrice}`}</h5>
        </div>
        <Button variant="danger" onClick={onDeleteClickHandler}>
          ELIMINAR
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
