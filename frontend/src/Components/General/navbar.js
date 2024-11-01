// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px 20px', borderTop: '1px solid #8EABD1', borderBottom: '1px solid #8EABD1' }}>
            <Link to="/" style={navLinkStyle}>Inicio</Link>
            <Link to="/registrar-factura" style={navLinkStyle}>Registrar Factura</Link>
            <Link to="/mis-puntos" style={navLinkStyle}>Mis Puntos</Link>
            <Link to="/mis-solicitudes" style={navLinkStyle}>Mis Solicitudes</Link>
            <Link to="/farmacias" style={navLinkStyle}>Farmacias</Link>
        </nav>
    );
};

const navLinkStyle = {
    marginLeft: '20px',
    textDecoration: 'none',
    color: '#000000',
    fontSize: '16px',
    fontFamily: 'Roboto, sans-serif'
};

export default Navbar;
