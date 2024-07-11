import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const onClickReturnHomeHandler = () => {
    navigate("/");
  };

  return (
    <div className="text-center mt-3">
      <h2> ¡Ups! La página solicitada no fue encontrada</h2>
      <Button className="text-center" onClick={onClickReturnHomeHandler}>
        Volver al inicio.
      </Button>
    </div>
  );
};

export default PageNotFound;