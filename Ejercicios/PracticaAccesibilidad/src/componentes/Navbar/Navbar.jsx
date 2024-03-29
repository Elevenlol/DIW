//import React from 'react';
import FiltroBoton from "./BotonFiltrado";
import Buscador from "./Buscador";
import FiltroColores from "./Filtro";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Proyecto MTG
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Inicio <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cartas
              </a>
            </li>
          </ul>
          <Buscador></Buscador>
          <FiltroColores onColorChange={"red"}></FiltroColores>
          <FiltroBoton></FiltroBoton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
