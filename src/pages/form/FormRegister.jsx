import React from 'react';
import { Button, Card, Col, Form, FormGroup, Row } from 'react-bootstrap';
import duffeelogo from "./duffeelogo.png";


function FormRegister() {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
    
    <Card className="w-40 m-5 mx-3 p-3 px-5 shadow">
    <img
        src={duffeelogo}
        alt="Duffee Logo"
        style={{
          width: "300px",
          height: "150px",
          marginTop:"-10%",
          marginBottom:"-10%"
        }}
      
      />
      <Card.Body>
        <Row>
          <h5 className="mb-4">Formulario de registración:</h5>
        </Row>
        <Form>
          <FormGroup className="mb-3">
            <Form.Label htmlFor="firstName">Nombre:</Form.Label>
            <Form.Control
              type="text"
              id="firstName"
              placeholder="Nombre"
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Label htmlFor="lastName">Apellido:</Form.Label>
            <Form.Control
              type="text"
              id="lastName"
              placeholder="Apellido"
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Label htmlFor="email">Correo Electrónico:</Form.Label>
            <Form.Control
              type="email"
              id="email"
              placeholder="Correo Electrónico"
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Label htmlFor="password">Contraseña:</Form.Label>
            <Form.Control
              type="password"
              id="password"
              placeholder="Contraseña"
            />
          </FormGroup>
          <Row>
            <Col md={12} className="d-flex justify-content-end">
              <Button variant="secondary" type="submit">
                Enviar
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
