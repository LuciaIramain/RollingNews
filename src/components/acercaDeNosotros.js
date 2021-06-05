import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Yo from "./img/nosotros/Yo.png";

const acercaDeNosotros = () => {
  return (
    <div className="py-4">
      <div className="container text-center">
        <h1>Sobre Rolling News</h1>
        <h4 className="titulo-covid">
          Rolling News el portal de noticias más destacado del país.
        </h4>
        <p className='mt-4'>
        <b>¡Hola mundo!</b>
        <p>
        Somos un equipo de desarrollo en tucuman. Nuestro equipo de desarrollo esta conformado por 3 integrantes, todos son full stack devellopers altamente capacitados.
        </p> 
        </p>
      </div>
  <section class="container text-center mb-4">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-6 rounded p-5 acerca-1">
            <img
              src="https://peaceful-leakey-4cbd18.netlify.app/static/media/Yo.dbf4083b.png"
              class="shadow rounded-circle border border-secundary"
              height="180px"
            />
            <div>
              <h1 class="mt-3 font-weight-lighter">German Mattias</h1>
              <h6 class="font-italic">Co-Funder & Software Developer</h6>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <img
              src="https://scontent.ftuc4-1.fna.fbcdn.net/v/t1.18169-9/249723_10150194972694070_1005028_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=cdbe9c&_nc_eui2=AeHS9ctOu1qMeNG8axzFLJiyYIRsNuYIB71ghGw25ggHvcTofgMcX5gqQ_3u_taONOY&_nc_ohc=GIP2eCYYNyAAX_qbPVu&_nc_ht=scontent.ftuc4-1.fna&oh=fd20c8adb229300fb461cd92fa7ce021&oe=60DBF027"
              class="shadow rounded-circle border border-secundary mt-5"
              height="180px"
            />
            <div>
              <h1 class="mt-3 font-weight-lighter">Matias Choquevilca</h1>
              <h6 class="font-italic">Co-Funder & Software Developer</h6>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 rounded p-4 acerca-3">
            <img
              src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.6435-9/127542376_100401761930020_53945942128344134_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ySOX6JBAr_MAX8W6c9O&_nc_ht=scontent.ftuc1-1.fna&oh=835b7021c96dd02250b79a4307cfedfb&oe=60DCF520"
              class="shadow rounded-circle border border-secundary"
              height="180px"
            />
            <div>
              <h1 class="mt-3 font-weight-lighter">Kevin Guzman</h1>
              <h6 class="font-italic">Co-Funder & Software Developer</h6>
            </div>
          </div>
        </div>
      </section>
  </div>
  )
}
export default acercaDeNosotros;
