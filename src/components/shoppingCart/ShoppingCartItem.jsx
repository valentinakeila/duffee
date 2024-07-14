import { Button } from "react-bootstrap";
import { useState, useContext } from "react";
import UnitCounter from "./UnitCounter";
import { ShoppingCartContext } from "../services/shoppingCartContext/UserShoppingCartContext";

const ShoppingCartItem = ({ itemId, imageUrl, productName, productPrice }) => {
  const { removeToShoppingCart } = useContext(ShoppingCartContext);
  const [unitAmount, setUnitAmount] = useState(1);
  const [subtotalPrice, setSubtotalPrice] = useState(productPrice);

  const AddUnit = () => {
    const amount = unitAmount + 1;
    setUnitAmount(amount);
    const newPrice = productPrice * amount;
    setSubtotalPrice(newPrice);
  };

  const SubstractUnit = () => {
    if (unitAmount > 1) {
      const amount = unitAmount - 1;
      setUnitAmount(amount);
      const newPrice = productPrice * amount;
      setSubtotalPrice(newPrice);
    }
  };

  const onDeleteClickHandler = () => {
    removeToShoppingCart(itemId);
  };

  return (
    <div className="d-flex w-75 border border-secondary rounded my-3 mx-auto align-items-center bg-success bg-opacity-10">
      <div className="w-25 d-flex align-items-center gap-3">
        <img
          className="rounded m-2"
          style={{ height: "75px", width: "110px" }}
          src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
          alt=""
        />
        <h3 className="text-wrap">{productName}</h3>
      </div>
      <UnitCounter
        amountDisplay={unitAmount}
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
          <h5>{`$ ${subtotalPrice}`}</h5>
        </div>
        <Button variant="danger" onClick={onDeleteClickHandler}>
          ELIMINAR
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
