import { useContext } from "react";
import "./cardInfo.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShoppingCartContext } from "../../components/services/shoppingCartContext/UserShoppingCartContext";


function ItemCard({ item }) {
  const { addToShoppingCart,shoppingCart } = useContext(ShoppingCartContext);

  const clickHandler = () => {
    const cartFlag = addToShoppingCart(item);

    let itemInCartFlag = false

    shoppingCart.map((cartItem) => {
      if (cartItem.name == item.name) {
        toast.error("Ya existe en el carrito")
        itemInCartFlag = true
      }
    })

    if (itemInCartFlag === false) {
      toast.success("Agregado con exito!")
    }

  };

  const encodedUrl = encodeURI(item.imageUrl); // la imagen no se ve sino XD

  console.log(item);

  return (
    <div
      className="card-border col-3 bg-dark text-white m-2 d-flex mb-5 p-0 flex-column"
      style={{
        height: "19rem",
        width: "30rem",
        backgroundImage: `url(${encodedUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition: Bounce/>
      <div className="w-100 h-50 d-flex justify-content-end">
        <span
          className="p-3 display-6 fst-italic fw-bolder"
          style={{
            backgroundColor: "#FFC091",
            height: "fit-content",
            borderBottomLeftRadius: "20px",
          }}
        >
          {item.name}
        </span>
      </div>
      <div className="w-100 h-50 d-flex justify-content-end card-hover-content">
        <span
          className="p-1 fst-italic fw-bolder w-100 h-100 d-flex flex-column"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            height: "fit-content",
            fontSize: "1.7rem",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            color: "#f2e8e8 ",
          }}
        >
          <span
            className="w-100 h-80"
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {item.desc}
          </span>
          <div
            className="w-100 h-20 d-flex gap-4"
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <span
              className=" h-100 text-center"
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              ${item.price} ARS
            </span>
            <button
              className="border-0 text-white fw-bold py-1 px-3 rounded"
              style={{
                fontSize: "1.5rem",
                backgroundColor: "#FFC091",
                height: "fit-content",
                width: "fit-content",
              }}
              onClick={clickHandler}
            >
              AGREGAR
            </button>
          </div>
        </span>
      </div>
    </div>
  );
}

export default ItemCard;
