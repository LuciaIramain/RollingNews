import React, { useState } from "react";
import Swal from "sweetalert2";
import { Form, Button, Col } from "react-bootstrap";
import { campoRequerido } from "../components/administracion/Validaciones";
const Contactos = () => {
    const [nombreContacto, setNombreContacto] = useState("");
    const [apellidoContacto, setApellidoContacto] = useState("");
    const [emailContacto, setEmailContacto] = useState("");
    const [mensajeContacto, setMensajeContacto] = useState("");
    
    const enviarDatosContacto = (e) => {
        e.preventDefault();
        
        if (
            campoRequerido(nombreContacto) &&
            campoRequerido(apellidoContacto) &&
            campoRequerido(emailContacto) &&
            campoRequerido(mensajeContacto)) {

            Swal.fire(
                'Mensaje enviado',
                'Su mensaje fue enviado, le responderemos a la brevedad',
                'success'
            )
        } else {
            Swal.fire(
                'Mensaje NO enviado',
                'Por favor complete todos los campos',
                'warning'
            )
            
        }
    };

    return (
        <div className="col-md-4 container py-4">
            <h1 className="text-center titulo-covid">Contactanos</h1>
            <Form className="py-4" onSubmit={enviarDatosContacto}>
                <Form.Row>
                    <Col>
                        <Form.Control
                            required
                            placeholder="Nombre"
                            onChange={(e) => setNombreContacto(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Control

                            required
                            placeholder="Apellido"
                            onChange={(e) => setApellidoContacto(e.target.value)}
                        />
                    </Col>
                </Form.Row>
                <Form.Group className="py-4" controlId="formBasicEmail">
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmailContacto(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        controlId="mensaje1"
                        required
                        as="textarea"
                        rows={3}
                        onChange={(e) => setMensajeContacto(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
        </Button>
            </Form>
        </div>
    );
};

export default Contactos;
