import React from 'react';
import '../css/style.css';

const MainPage = () => {
  return (
    <>
      <div className="container-main">
        <h1>HealthPoints</h1>
        <p>Medicamentos al alcance de tus compras del día a día. Gana por ti y tu bienestar canjeando fácilmente tus
            facturas por puntos para el futuro.</p>
        <button className="btn btn-crearCuenta" onClick={() => window.location.href='/register'}>Registrarse</button>
        <div className="divider-container">
          <div className="divider"></div>
          <span className="divider-text">o</span>
          <div className="divider"></div>
        </div>
        <p>si ya tienes cuenta</p>
        <button className="btn btn-iniSesion" onClick={() => window.location.href='/login'}>Iniciar sesión</button>
      </div>
    </>
  );
};

export default MainPage;
