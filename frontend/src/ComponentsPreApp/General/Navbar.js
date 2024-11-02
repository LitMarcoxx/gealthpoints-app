import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import hPLogo from '../images/hPLogo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container-fluid">
        {/* Logo e imagen */}
        <Link className="navbar-brand" to="/">
          <img src={hPLogo} alt="HealthPoints" width="50" height="50" />
        </Link>

        {/* Botón para pantallas pequeñas */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces de navegación alineados a la izquierda */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">Iniciar Sesión</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/register">Registrarse</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
