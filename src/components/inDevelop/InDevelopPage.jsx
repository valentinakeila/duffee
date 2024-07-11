import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const InDevelopPage = ({ sectionName }) => {
  const navigate = useNavigate();
  const onClickReturnHomeHandler = () => {
    navigate("/");
  };

  return (
    <div className="text-center mt-3">
      <h2> Lo sentimos, pero la sección de {sectionName} aún está en desarrollo.</h2>
      <Button className="text-center" onClick={onClickReturnHomeHandler}>
        Volver al inicio.
      </Button>
    </div>
  );
};

export default InDevelopPage;