import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";

import '../paginaPrincipal/paginaPrincipal.css';

import { Link } from 'react-router-dom';

const Destacado = (props) => {


  return (
    <Fragment>
      <h1 className="mx-3 my-4 text-center">Noticias Destacadas</h1>
      <div className="row mb-5 container-fluid d-flex justify-content-center">

        <section className="col-lg-6">
          <Card className="m-4 cards text-center bg-light text-secondary animate__animated animate__fadeInUp">
            <Card.Img variant="top" src={props.noticias[0] === undefined ? "" : props.noticias[0].urlImagen} className="w-100" />
            <Card.Body>
              <Card.Title>{props.noticias[0] === undefined ? "" : props.noticias[0].tituloNoticia}</Card.Title>
              <Card.Text>{props.noticias[0] === undefined ? "" : props.noticias[0].tituloExtendido}
              </Card.Text>
              <Link to={props.noticias[0] === undefined ? "" : `noticia/${props.noticias[0]._id}`} className="mr-2">
                <Button variant="primary">Leer mas...</Button>
              </Link>

            </Card.Body>
          </Card>
        </section>
        <section className="col-lg-3">
          <Card className="m-4 cards text-center bg-light text-secondary animate__animated animate__fadeInUp">
            <Card.Img variant="top" src={props.noticias[1] === undefined ? "" : props.noticias[1].urlImagen} />
            <Card.Body>
              <Card.Title>{props.noticias[1] === undefined ? "" : props.noticias[1].tituloNoticia}</Card.Title>
              <Card.Text>
                {props.noticias[1] === undefined ? "" : props.noticias[1].tituloExtendido}
              </Card.Text>
              <Link to={props.noticias[1] === undefined ? "" : `noticia/${props.noticias[1]._id}`} className="mr-2">
                <Button variant="primary">Leer mas...</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="m-4 cards text-center bg-light text-secondary animate__animated animate__fadeInUp">
            <Card.Img variant="top" src={props.noticias[2] === undefined ? "" : props.noticias[2].urlImagen} />
            <Card.Body>
              <Card.Title>{props.noticias[2] === undefined ? "" : props.noticias[2].tituloNoticia}</Card.Title>
              <Card.Text>
                {props.noticias[2] === undefined ? "" : props.noticias[2].tituloExtendido}
              </Card.Text>
              <Link to={props.noticias[2] === undefined ? "" : `noticia/${props.noticias[2]._id}`} className="mr-2">
                <Button variant="primary">Leer mas...</Button>
              </Link>
            </Card.Body>
          </Card>
        </section>
      </div>
    </Fragment>
  );
};

export default Destacado;
