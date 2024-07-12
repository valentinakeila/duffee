import React, { useState, useRef } from 'react';
import { Button, Card, Col, Form, FormGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import duffeelogo from './duffeelogo.png';

function FormRegister() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al registrar usuario');
      }

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');

      navigate('/login');
    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
      alert('No se pudo registrar el usuario. Por favor, inténtalo de nuevo.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName.trim() === '') {
      setErrors({ ...errors, firstName: true });
      return;
    }
    if (lastName.trim() === '') {
      setErrors({ ...errors, lastName: true });
      return;
    }
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      setErrors({ ...errors, email: true });
      return;
    }
    if (passwordRef.current.value.length === 0) {
      passwordRef.current.focus();
      setErrors({ ...errors, password: true });
      return;
    }

    handleRegister();
  };

  const onChangeEmail = (event) => {
    setErrors({ ...errors, email: false });
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setErrors({ ...errors, password: false });
    setPassword(event.target.value);
  };

  const onChangeFirstName = (event) => {
    setErrors({ ...errors, firstName: false });
    setFirstName(event.target.value);
  };

  const onChangeLastName = (event) => {
    setErrors({ ...errors, lastName: false });
    setLastName(event.target.value);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Card className="w-40 m-5 mx-3 p-3 px-5 shadow">
        <img
          src={duffeelogo}
          alt="Duffee Logo"
          style={{
            width: "300px",
            height: "150px",
            marginLeft:"40px",
            marginTop: "-10%",
            marginBottom: "-10%",
          }}
        />
        <Card.Body>
          <Row>
            <h5 className="mb-4 text-center">Formulario de registración:</h5>
          </Row>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
              <Form.Label htmlFor="firstName">Nombre:</Form.Label>
              <Form.Control
                type="text"
                id="firstName"
                placeholder="Nombre"
                value={firstName}
                onChange={onChangeFirstName}
                isInvalid={errors.firstName}
              />
              {errors.firstName && <p className="mt-1 text-danger">Debe ingresar un nombre</p>}
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label htmlFor="lastName">Apellido:</Form.Label>
              <Form.Control
                type="text"
                id="lastName"
                placeholder="Apellido"
                value={lastName}
                onChange={onChangeLastName}
                isInvalid={errors.lastName}
              />
              {errors.lastName && <p className="mt-1 text-danger">Debe ingresar un apellido</p>}
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label htmlFor="email">Correo Electrónico:</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="Correo Electrónico"
                value={email}
                onChange={onChangeEmail}
                isInvalid={errors.email}
              />
              {errors.email && <p className="mt-1 text-danger">Debe ingresar un email</p>}
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label htmlFor="password">Contraseña:</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Contraseña"
                value={password}
                onChange={onChangePassword}
                isInvalid={errors.password}
              />
              {errors.password && <p className="mt-1 text-danger">Debe ingresar una contraseña</p>}
            </FormGroup>
            <Row>
              <Col md={6}>
                <a href="#" onClick={() => navigate("/login")} className="text-decoration-none">
                  ¿Ya tienes cuenta? Iniciar sesión
                </a>
              </Col>
              <Col md={6} className="d-flex justify-content-end">
                <Button variant="secondary" type="submit">
                  Registrarse
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FormRegister;

