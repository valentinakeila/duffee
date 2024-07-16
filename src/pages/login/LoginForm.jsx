import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useContext } from "react";
import { AuthenticationContext } from "../../components/services/authentication/UserAuthenticationContext";
import duffeelogo from "./duffeelogo.png";

const LoginForm = () => {
  const { currentUser, handleLogin } = useContext(AuthenticationContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onChangeEmail = (event) => {
    setErrors({ ...errors, email: false });
    const inputEmail = event.target.value;
    setUserEmail(inputEmail);
  };

  const onChangePassword = (event) => {
    setErrors({ ...errors, password: false });
    const inputPassword = event.target.value;
    setUserPassword(inputPassword);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      setErrors({ ...errors, email: true });
      return;
    }

    if (userPassword.length === 0) {
      passwordRef.current.focus();
      setErrors({ ...errors, password: true });
      return;
    }

    const succesUser = await handleLogin(userEmail, userPassword);
    setUserEmail("");
    setUserPassword("");

    if (succesUser) {
      if (succesUser.isSysAdmin) {
        navigate("/sysadmin/menu");
      } else if (succesUser.adminRole) {
        navigate("/admin/menu");
      } else {
        navigate("/menu");
      }
    } else {
      alert("Alguno de los datos ingresados no es correcto.");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5 ">
      <Card className="w-40 m-5 mx-3 p-3 px-5 shadow">
        <img
          src={duffeelogo}
          alt="Duffee Logo"
          style={{
            width: "300px",
            height: "150px",
            marginTop: "-10%",
            marginBottom: "-10%",
          }}
        />
        <Card.Body>
          <Row>
            <h5 className="mb-4 text-center">¡Bienvenidos!</h5>
          </Row>
          <Form onSubmit={onSubmitHandler}>
            <FormGroup className="mb-4">
              <Form.Label htmlFor="email">Email:</Form.Label>
              <Form.Control
                className={
                  errors.email &&
                  "focus-ring focus-ring-danger border border-danger"
                }
                type="email"
                ref={emailRef}
                placeholder="Ingresar email..."
                value={userEmail}
                onChange={onChangeEmail}
              />
              {errors.email ? (
                <p className="mt-1 text-danger">Debe ingresar un email</p>
              ) : (
                ""
              )}
            </FormGroup>
            <FormGroup className="mb-4">
              <Form.Label htmlFor="password">Contraseña:</Form.Label>
              <Form.Control
                className={
                  errors.password &&
                  "focus-ring focus-ring-danger border border-danger"
                }
                type="password"
                ref={passwordRef}
                placeholder="Ingresar contraseña..."
                value={userPassword}
                onChange={onChangePassword}
              />
              {errors.password ? (
                <p className="mt-1 text-danger">Debe ingresar un password</p>
              ) : (
                ""
              )}
            </FormGroup>
            <Row>
              <Col md={6}>
                <a
                  href="#"
                  onClick={() => navigate("/form")}
                  className="text-decoration-none"
                >
                  Registrarse
                </a>
              </Col>
              <Col md={6} className="d-flex justify-content-end">
                <Button variant="secondary" type="submit">
                  Iniciar sesión
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;
