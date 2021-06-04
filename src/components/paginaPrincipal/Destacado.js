import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import alberto from "../img/destacado/albertof.jpg";
import dollar from "../img/destacado/dollars.jpg";
import marihuana from "../img/actualidad/cannavis.jpg";
import "../paginaPrincipal/paginaPrincipal.css";

const Destacado = () => {
  return (
    <Fragment>
      <h1 className="mx-3 my-4 text-center">Noticias Destacadas</h1>
      <div className="row mb-5 container-fluid d-flex justify-content-center">
        <section className="col-lg-6">
          <Card className="m-4 cards text-center bg-light text-secondary animate__animated animate__fadeInUp">
            <Card.Img variant="top" src={alberto} className="w-100" />
            <Card.Body>
              <Card.Title>
                Alberto Fernández y Horacio Rodríguez Larreta dieron detalles de
                lo que hablaron en videoconferencia
              </Card.Title>
              <Card.Text>
                En el transcurso de la semana volveremos a hablar ya para fijar
                una política sanitaria coordinada para el AMBA", adelantó el
                presidente en Twitter.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </section>
        <section className="col-lg-3">
          <Card className="m-4 cards text-center bg-light text-secondary animate__animated animate__fadeInUp">
            <Card.Img variant="top" src={dollar} />
            <Card.Body>
              <Card.Title>El dólar blue se despierta sobre el final de la semana, pero el MEP y CCL siguen en pausa</Card.Title>
              <Card.Text>
              El dólar blue registra una nueva suba y recupera lo que había perdido en las jornadas anteriores. En tanto, el MEP y el CCL mantienen la calma que mostraron ayer.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
          <Card className="m-4 cards text-center bg-light text-secondary animate__animated animate__fadeInUp">
          <Card.Img variant="top" src={marihuana} />
            <Card.Body>
              <Card.Title>Avances. Cannabis medicinal: en septiembre se vendería en farmacias</Card.Title>
              <Card.Text>
              Siguen los avances en materia de cannabis medicinal. Según los especialistas, en septiembre y tras la aprobación de la ANMAT, podría venderse en las farmacias.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </section>
      </div>
    </Fragment>
  );
};

export default Destacado;
