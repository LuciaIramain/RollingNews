import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './components/common/Inicio';
import DetalleNoticia from './components/Noticias/DetalleNoticia';

function App() {
  return (
    <Router>
      <switch>
        <Route exact path='/'>
          <Inicio></Inicio>
        </Route>
        <Route exact path='/noticia'>
          <DetalleNoticia></DetalleNoticia>
        </Route>
      </switch>
    </Router>
  );
}

export default App;
