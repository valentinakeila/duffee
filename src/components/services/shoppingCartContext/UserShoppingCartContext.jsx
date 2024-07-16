import { useState, createContext, useEffect, useContext } from "react";
import { AuthenticationContext } from "../authentication/UserAuthenticationContext";

export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthenticationContext);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [currentCartName, setCurrentCartName] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (currentUser != null) {
      const auxCartName = `cartOf_${currentUser.email}`;
      setCurrentCartName(auxCartName);
      let auxNewCart = JSON.parse(
        localStorage.getItem(auxCartName)
      );
      if (auxNewCart == null) {
        auxNewCart = [];
        setShoppingCart(auxNewCart);
        localStorage.setItem(auxCartName, JSON.stringify(auxNewCart));
      } else {
        setShoppingCart(auxNewCart);
      }
    } else {
      /* if (currentCartName != null) {
        let auxNewCart = JSON.parse(localStorage.getItem(currentCartName));
        console.log(auxNewCart);
        console.log(auxNewCart.lenght);
        if (auxNewCart.lenght) {
          localStorage.removeItem(currentCartName);
        }
      } */
      setCurrentCartName("");
      setShoppingCart([]);
    }
  }, [currentUser]);

  console.log(`valor de currentCartName: ${currentCartName}`); 
  console.log(`contenido del carrito: ${shoppingCart}`);

  const addToShoppingCart = (item) => {
    console.log("add clicked");
    if (shoppingCart != []) {
      if (shoppingCart.includes(item)) {
        return false;
      } else {
        const auxNewArray = [item, ...shoppingCart];
        setShoppingCart(auxNewArray);
        localStorage.setItem(currentCartName, JSON.stringify(auxNewArray));
        return true;
      }
    } else {
      const auxNewArray = [item];
      setShoppingCart(auxNewArray);
      localStorage.setItem(currentCartName, JSON.stringify(auxNewArray));
      return true;
    }
  };

  const removeToShoppingCart = (itemId) => {
    const auxNewFilteredArray = shoppingCart.filter(
      (item) => item.id != itemId
    );
    setShoppingCart(auxNewFilteredArray);
    localStorage.setItem(currentCartName, JSON.stringify(auxNewFilteredArray));
  };

  const emptyShoppingCart = () => {
    const auxNewArray = [];
    setShoppingCart(auxNewArray);
    localStorage.setItem(currentCartName, JSON.stringify(auxNewArray));
  };

  const updateTotalPrice = (prevNumber, currentNumber) => {
    let auxTotalPrice = totalPrice;
    auxTotalPrice = auxTotalPrice - prevNumber + currentNumber;
    setTotalPrice(auxTotalPrice);
  };

  const confirmOrder = () => {};

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        totalPrice,
        addToShoppingCart,
        removeToShoppingCart,
        emptyShoppingCart,
        updateTotalPrice
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

//ver lo de borrar del localStorage el carrito vacío.
//ver lo de agregar productos repetidos al carrito.
//si se repiten productos en el carrito ver lo del child id's
