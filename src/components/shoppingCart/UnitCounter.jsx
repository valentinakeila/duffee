import { Button } from "react-bootstrap";

const UnitCounter = ({ amountDisplay, addUnit, substractUnit}) => {

    const sideLenght= "40px";
    const borderRadiusGrade = "25px";

    const styleButtons = {
        width: sideLenght,
        height: sideLenght,
        border: "none",
    }

    const styleMinus = {
        ...styleButtons,
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        borderTopLeftRadius: borderRadiusGrade,
        borderBottomLeftRadius: borderRadiusGrade
    }

    const stylePlus = {
        ...styleButtons,
        borderTopRightRadius: borderRadiusGrade,
        borderBottomRightRadius: borderRadiusGrade,
        borderTopLeftRadius: "0px",
        borderBottomLeftRadius: "0px"
    }

    const styleAmount = {
        ...styleButtons,
        width: "50px",
        borderLeft: "solid",
        borderRight: "solid",
        borderColor: "lightgrey"
    }

    const OnClickMinusHandler = () => {
        substractUnit();
    };

    const OnClickPlusHandler = () => {
        addUnit();
    };

  return (
    <div className="w-50 d-flex justify-content-center">
        <div className="d-flex border border-4 rounded-pill">
            <Button className="fs-6 fw-bold" variant="light" style={styleMinus} onClick={OnClickMinusHandler}>-</Button>
            <div className="d-flex justify-content-center align-items-center fs-5 fw-bold bg-light" style={styleAmount}>{amountDisplay}</div>
            <Button className="fs-6 fw-bold" variant="light" style={stylePlus} onClick={OnClickPlusHandler}>+</Button>
        </div>
    </div>
  )
}

export default UnitCounter;