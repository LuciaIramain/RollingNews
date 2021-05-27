import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const DetalleNoticia = () => {
  return (
    <Fragment>
      <Container>
        <div className="col-lg-10">
          <h1 className="my-2 py-4 display-4 text-inline">
            <span className='text-danger'>Gira europea. </span>
            Alberto Fernández se reunirá con la titular del FMI en Roma
          </h1>
          <h2>
            Finalmente, Kristalina Georgieva recibirá a Fernández este viernes.
            Será su primer encuentro presencial y girará en torno a la
            renegociación de la deuda.
          </h2>

          <Carousel className="my-4" indicators= {false}>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                width="976"
                height="546"
                src="https://datadiario-assets.tadevel-cdn.com/609e744ac2f1f003ac660a1f/720.webp"
                alt="alberto fernandez en una reunion"
              />
              <div class="bg-dark text-white p-3 pl-2">Alberto Fernández en una reunión virtual con la titular del FMI, Kristalina Georgieva.</div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                width="976"
                height="546"
                src="https://images.pagina12.com.ar/styles/width960/public/rest_images/whatsapp-image-2021-05-12-at-9-20-34-am.jpg?itok=ZJO-bwL1"
                alt="el presidente argentino acompanado al macron presidente de francia"
              />
              <div class="bg-dark text-white p-3 pl-2">En su gira europea Fernández consiguió apoyo de líderes europeos para la negociación de la deuda con el FMI, como el francés Emmanuel Macron.</div>
            </Carousel.Item>
          </Carousel>
          <div>
          <h5 className='pt-2'>13 de mayo de 2021 - 15:45</h5>
            <h3 className='display-6'>
              <p>
                Después de las especulaciones que hubo en la semana, finalmente
                el presidente <b>Alberto Fernández</b> se reunirá en Roma con la
                titular del Fondo Monetario Internacional (FMI), <b>Kristalina
                Georgieva</b>, en lo que será el primer encuentro presencial entre
                ambos.
              </p>
              <p>
                Según informaron fuentes oficiales, el horario de la reunión aún
                no fue definido pero girará en torno a la renegociación de los
                plazos para el pago de la deuda argentina con el FMI, que el
                Gobierno busca postergar debido a las dificultades económicas
                que la pandemia hace afrontar al país.
              </p>
              <p>
                Los vencimientos que la administración de Fernández quiere
                postergar son entre los próximos meses de septiembre y octubre.
                De acuerdo con el Gobierno, la pandemia hace que los recursos
                sean aún más escasos y deban destinarse a la compra de vacunas,
                el fortalecimiento del sistema sanitario y la asistencia de los
                sectores más afectados.
              </p>

              <span className='my-4'>Te puede interesar:</span>

              <h2 className='p-2 my-2'>
                <span className='text-danger'>Alberto Fernández se reunió con el presidente de Italia</span>
              </h2>
                <p> 
                 Además de la postergación de plazos, la Argentina propone cancelar la
                sobretasa del 2% que el FMI le cobra a los países que recibieron
                un monto superior a la cuota que aportan al organismo.
                Finalmente, el Gobierno busca que los Derechos Especiales de
                Giro (DEG) del FMI sean asignados no solo a los países más
                necesitados sino también a los de renta media, que abarcan el
                65% de la pobreza mundial.
              </p>
              <p>
                El encuentro entre Fernández y Georgieva será el primero
                presencial entre ambos luego de varios virtuales. Para poder
                concretarlo, el presidente extendió su gira europea que, en un
                primer momento, hubiera concluido mañana. El viaje se extendió
                hasta el sábado para hacer la reunión en Roma, donde la titular
                del FMI se encuentra con motivo del seminario 'Soñando con un
                mujer reinicio', que se realizará mañana en la Pontificia
                Academia de Ciencias Sociales del Vaticano, y del que también
                participará el ministro de Economía argentino, <b>Martín Guzmán.</b>
              </p>
            </h3>
            <h3>copyright &copy; RollingNews.com</h3>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default DetalleNoticia;
