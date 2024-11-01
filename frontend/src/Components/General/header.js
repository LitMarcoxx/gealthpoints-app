// Header.js
import React from 'react';
import logo from '../images/logo.png';
import profilePic from '../images/perfil.png';
const Header = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#ffffff' }}>
            {/* Logo e icono de la aplicación */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Health Points Logo" style={{ height: '80px', marginRight: '10px' }} />
            </div>
            
            {/* Imagen de perfil */}
            <div>
                <img src={profilePic} alt="Perfil" style={{ height: '40px', borderRadius: '50%' }} />
            </div>
        </div>
    );
};

export default Header;
