import React from "react";
import { Card, Button } from "react-bootstrap";
import Foto1 from '../img/fotografia/foto1.jpg';
import Foto2 from '../img/fotografia/foto2.webp';
import Foto3 from '../img/fotografia/foto3.webp';



const Fotografia = (props) => {
  return (
    <div className="mb-5">
      <hr />
      <div className="container">
        <h1 className="mx-3 my-4 titulo-categoria text-center text-light">Fotografía</h1>
      </div>
      <section className="d-flex justify-content-center">
        <Card className="m-4 cards text-center bg-light text-secondary animate__animated animate__fadeInUp" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Foto1}/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Leer mas...</Button>
          </Card.Body>
        </Card>
        <Card className="m-4 cards text-center bg-light text-secondary animate__animated animate__fadeInUp" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Foto2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Leer mas...</Button>
          </Card.Body>
        </Card>
        <Card className="m-4 cards text-center bg-light text-secondary animate__animated animate__fadeInUp" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Foto3} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Leer mas...</Button>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default Fotografia;