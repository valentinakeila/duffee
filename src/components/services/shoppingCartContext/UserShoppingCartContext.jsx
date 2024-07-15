import { useState, createContext, useEffect, useContext } from "react";
import { AuthenticationContext } from "../authentication/UserAuthenticationContext";

export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthenticationContext);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [auxString, setAuxString] = useState("");

  useEffect(() => {
    if (currentUser != null) {
      const auxNewArray = JSON.parse(
        localStorage.getItem(`cartOf_${currentUser.email}`)
      );
      setShoppingCart(auxNewArray);
      setAuxString(`cartOf_${currentUser.email}`);
      console.log("carrito personal seleccionado!");
    } else {
      if (shoppingCart.length == 0) {
        localStorage.removeItem(auxString);
        console.log("Se borro el carrito vacio al cerrar sesion");
      }
      setShoppingCart([]);
      console.log("no hay carrito seleccionado!");
    }
  }, [currentUser]);

  console.log(`carrito actual: ${auxString}`);
  console.log("contenido del carrito actual:");
  console.log(shoppingCart);

  const addToShoppingCart = (item) => {
    if (shoppingCart != null) {
      if (shoppingCart.includes(item)) {
        return false;
      } else {
        const auxNewArray = [item, ...shoppingCart];
        setShoppingCart(auxNewArray);
        localStorage.setItem(
          `cartOf_${currentUser.email}`,
          JSON.stringify(auxNewArray)
        );
        return true;
      }
    } else {
      const auxNewArray = [item];
      setShoppingCart(auxNewArray);
      localStorage.setItem(
        `cartOf_${currentUser.email}`,
        JSON.stringify(auxNewArray)
      );
      return true;
    }
  };

  const removeToShoppingCart = (itemId) => {
    const auxNewFilteredArray = shoppingCart.filter(
      (item) => item.id != itemId
    );
    setShoppingCart(auxNewFilteredArray);
    console.log(`en el carrito quedan: ${auxNewFilteredArray} `);
    localStorage.setItem(
      `cartOf_${currentUser.email}`,
      JSON.stringify(auxNewFilteredArray)
    );
  };

  const emptyShoppingCart = () => {
    setShoppingCart([]);
    localStorage.setItem(`cartOf_${currentUser.email}`, JSON.stringify([]));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addToShoppingCart,
        removeToShoppingCart,
        emptyShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
