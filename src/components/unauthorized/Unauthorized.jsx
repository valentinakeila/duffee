import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const onClickReturnHomeHandler = () => {
    navigate("/");
  };

  return (
    <div className="text-center mt-3">
      <h2> Usted no se encuentra autorizado para visitar esta sección.</h2>
      <Button className="text-center" onClick={onClickReturnHomeHandler}>
        Volver al inicio.
      </Button>
    </div>
  );
};

export default Unauthorized;