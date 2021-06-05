import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, NavDropdown, Button, Modal, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navegacion.css";

import { campoRequerido } from "../administracion/Validaciones";
import Swal from 'sweetalert2';

const Navegacion = () => {
  //Suscripcion
  const [nombreSuscripcion, setNombreSuscripcion] = useState("");
  const [apellidoSuscripcion, setApellidoSuscripcion] = useState("");
  const [direccionSuscripcion, setDireccionSuscripcion] = useState("");
  const [localidadSuscripcion, setLocalidadSuscripcion] = useState("");
  const [codigoPostalSuscripcion, setCodigoPostalSuscripcion] = useState("");
  const [telefonoSuscripcion, setTelefonoSuscripcion] = useState("");
  const [emailSuscripcion, setEmailSuscripcion] = useState("");
  
  const enviarDatosSuscripcion = (e) => {
    e.preventDefault();
    
    if (
        campoRequerido(nombreSuscripcion) &&
        campoRequerido(apellidoSuscripcion) &&
        campoRequerido(direccionSuscripcion) &&
        campoRequerido(localidadSuscripcion) &&
        campoRequerido(codigoPostalSuscripcion) &&
        campoRequerido(telefonoSuscripcion) &&
        campoRequerido(emailSuscripcion) ) {

        Swal.fire(
            'Suscripcion Exitosa',
            'Enviaemos periodicamente a su mail noticias de su interes',
            'success'
        )
    } else {
        Swal.fire(
            'Suscripcion fallida',
            'Por favor complete todos los campos',
            'warning'
        )
        
    }
    handleCloseSus();
};




  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [showSus, setShowSus] = useState(false);
  const handleCloseSus = () => setShowSus(false);
  const handleShowSus = () => {
    setShowSus(true);
  }
  const [sesionAbierta, setSesionAbierta] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {

    setShow(true);
  }
  const acceso = (e) => {
    e.preventDefault();
    if (email === "email@gmail.com" && contraseña === "contraseña") {

      setSesionAbierta(true);
      handleClose();
    } else {
      Swal.fire(
        'Acceso denegado',
        'Ususario o contraseña no valido',
        'error'
      )

    }
  }
  useEffect(() => {
    if (sesionAbierta) {
      document.getElementById("linkAdministracion").setAttribute('class', 'nav-link')
      document.getElementById("botonLogin").setAttribute('class', 'd-none')
      document.getElementById("botonCerrarSesion").setAttribute('class', 'mr-5')
     
    } else {
      document.getElementById("linkAdministracion").setAttribute('class', 'nav-link d-none')
      document.getElementById("botonLogin").setAttribute('class', 'mr-5')
      document.getElementById("botonCerrarSesion").setAttribute('class', 'd-none')
      
    }


  }, [sesionAbierta]);


  // if (document.getElementById("botonCerrarSesion").getAttribute('class')==="invisible") {
  //   console.log("hola")
  // }
  const cerrarSesion = (e) => {
    e.preventDefault();

    setSesionAbierta(false);
    handleClose();
  }
  
  return (
    <div className="margin-t-b">
      <Navbar

        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className="navegacion"
      >
        <Navbar.Brand href="/">Rolling News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact={true} to="/actualidad" className="nav-link">
              Actualidad
            </NavLink>
            <NavLink exact={true} to="/deportes" className="nav-link">
              Deportes
            </NavLink>
            <NavLink exact={true} to="/tecnologia" className="nav-link">
              Tecnología
            </NavLink>
            <NavLink exact={true} to="/politica" className="nav-link">
              Política
            </NavLink>

            <NavDropdown title="Mas Secciones" id="basic-nav-dropdown">
              <NavLink exact={true} to="/espectaculos" className="dropdown-item">
                Espectáculos
              </NavLink>
              <NavLink exact={true} to="/economia" className="dropdown-item">
                Economía
              </NavLink>
              <NavLink exact={true} to="/salud" className="dropdown-item">
                Salud
              </NavLink>
              <NavLink exact={true} to="/fotografia" className="dropdown-item">
                Fotografía
              </NavLink>
            </NavDropdown>
            <NavLink id="linkAdministracion" exact={true} to="/admin" className="nav-link d-none" >
              Administracion
            </NavLink>
          </Nav>
          <Form className="ml-auto" inline>
            <div id="botonCerrarSesion" className="mr-3 d-none" >
              <Button variant="primary" onClick={cerrarSesion}>
                Cerrar sesion
            </Button>
            </div>
            <div id="botonLogin" className="mr-3" >

              <Button variant="danger" className="mr-3" onClick={handleShow}>
                Login
            </Button>
            </div>


            <Button variant="primary" onClick={handleShowSus} >
              Suscripción
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresa!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={acceso}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingresa tu Email</Form.Label>
              <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                No compartiremos tu dirección de email con nadie.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Ingresa tu Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setContraseña(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recuerdame" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresa
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showSus} onHide={handleCloseSus}>
        <Modal.Header closeButton>
          <Modal.Title>Suscríbete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={enviarDatosSuscripcion}>
            <Form.Row>
              <Col>
                <Form.Control required placeholder="Nombre" onChange={(e)=>setNombreSuscripcion(e.target.value)}/>
              </Col>
              <Col>
                <Form.Control placeholder="Apellido" required onChange={(e)=>setApellidoSuscripcion(e.target.value)}/>
              </Col>
            </Form.Row>
            <Form.Group controlId="formGridAddress1" className="py-2">
              <Form.Control placeholder="Dirección" required onChange={(e)=>setDireccionSuscripcion(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formGridCity">
              <Form.Control placeholder="Localidad" required onChange={(e)=>setLocalidadSuscripcion(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formGridZip">
              <Form.Control placeholder="Código Postal" required onChange={(e)=>setCodigoPostalSuscripcion(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formGridNumber">
              <Form.Control placeholder="Teléfono" required onChange={(e)=>setTelefonoSuscripcion(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Control type="email" placeholder="Ingresa tu Email" required onChange={(e)=>setEmailSuscripcion(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>

  );

};

export default Navegacion;
