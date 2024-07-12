import { useState, createContext } from "react";

export const ShoppingCartContext = createContext();

const storedShoppingCart = JSON.parse(localStorage.getItem("storedShoppingCart"));

export const ShoppingCartContextProvider = ({ children }) => {

    const [shoppingCart, setShoppingCart] = useState(storedShoppingCart);
    console.log("contenido del carrito al inicio:");
    console.log(shoppingCart);

    const addToShoppingChart = (item) => {
        //const auxShoppingCart = JSON.parse(localStorage.getItem("storedShoppingCart"));
            if (shoppingCart) {
                const auxNewArray = [item, ...shoppingCart];
                setShoppingCart(auxNewArray)
                localStorage.setItem("storedShoppingCart", JSON.stringify(auxNewArray));
            } else {
                const auxNewArray = [item];
                localStorage.setItem("storedShoppingCart", JSON.stringify(auxNewArray));
            }
    };

    const removeToShoppingChart = (item) => {
        if (shoppingCart) {
            const auxNewArray = [...shoppingCart];
            const itemIndex = auxNewArray.findIndex(item)
            if (itemIndex) {
                auxNewArray.splice(itemIndex, 1)
                setShoppingCart(auxNewArray)
                localStorage.setItem("storedShoppingCart", JSON.stringify(auxNewArray));
            }
        }
    };

    const emptyShoppingChart = () => {
        localStorage.removeItem("storedShoppingCart");
        setShoppingCart([]);
    };

    return (
        <ShoppingCartContext.Provider value={{shoppingCart, addToShoppingChart, removeToShoppingChart, emptyShoppingChart}}>
            {children}
        </ShoppingCartContext.Provider>
    );
};