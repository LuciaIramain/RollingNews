import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import Admin from "./components/administracion/Admin";
import PaginaPrincipal from "./components/paginaPrincipal/PaginaPrincipal";

import Actualidad from "./components/paginaPrincipal/Actualidad";
import Deportes from "./components/paginaPrincipal/Deportes";
import Tecnologia from "./components/paginaPrincipal/Tecnologia";
import Politica from "./components/paginaPrincipal/Politica";
import Espectaculos from './components/paginaPrincipal/Espectaculos';
import Economia from './components/paginaPrincipal/Economia';
import Salud from './components/paginaPrincipal/Salud';
import Fotografia from './components/paginaPrincipal/Fotografia';

import AcercaNosotros from './components/acercaDeNosotros';

import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import NuevaNoticia from "./components/administracion/NuevaNoticia";
import EditarNoticia from "./components/administracion/EditarNoticia";
import PropagandaCovid from "./components/common/PropagandaCovid";

function App() {
  const URL = process.env.REACT_APP_API_URL;
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const consulta = await fetch(URL);
      const respuesta = await consulta.json();

      setNoticias(respuesta);
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Navegacion></Navegacion>

      <Switch>
        <Route exact path="/">
          <PaginaPrincipal noticias={noticias} consultarAPI={consultarAPI} />
        </Route>
        <Route exact path="/admin">
          <Admin noticias={noticias} consultarAPI={consultarAPI}></Admin>
        </Route>
        <Route exact path="/admin/nuevanoticia">
          <NuevaNoticia noticias={noticias} consultarAPI={consultarAPI}>
            {" "}
          </NuevaNoticia>
        </Route>
        <Route exact path="/admin/editarnoticia/:id">
          <EditarNoticia
            noticias={noticias}
            consultarAPI={consultarAPI}
          ></EditarNoticia>
        </Route>

        <Route exact path="/actualidad">
          <Actualidad
            consultarAPI={consultarAPI}
            noticias={noticias}
          ></Actualidad>
        </Route>
        <Route exact path="/deportes">
          <Deportes consultarAPI={consultarAPI} noticias={noticias}></Deportes>
        </Route>
        <Route exact path="/tecnologia">
          <Tecnologia
            consultarAPI={consultarAPI}
            noticias={noticias}
          ></Tecnologia>
        </Route>
        <Route exact path="/politica">
          <Politica consultarAPI={consultarAPI} noticias={noticias}></Politica>
        </Route>
        <Route exact path="/espectaculos">
          <Espectaculos consultarAPI={consultarAPI} noticias={noticias}></Espectaculos>
        </Route>
        <Route exact path="/economia">
          <Economia consultarAPI={consultarAPI} noticias={noticias}></Economia>
        </Route>
        <Route exact path="/salud">
          <Salud consultarAPI={consultarAPI} noticias={noticias}></Salud>
        </Route>
        <Route exact path="/fotografia">
          <Fotografia consultarAPI={consultarAPI} noticias={noticias}></Fotografia>
        </Route>
        <Route exact path="/acercaDeNosotros">
        <AcercaNosotros></AcercaNosotros>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
