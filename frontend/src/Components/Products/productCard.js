import React from 'react';
import './products.css';
import cofalImage from '../images/cofal.png';

function productCard({ nombre, ptsPorUnidad, ptsParaGratis}) {
  return (
    <div className="product-card">
      <img src={cofalImage} alt="Producto" className="product-image" />
      <div className="divider"></div>
      <div className="product-info">
        <h3 className="product-title">{nombre}</h3>
        <div>
          <p className="product-points">Puntos por unidad</p>
          <p className='points'>{ptsPorUnidad}pts</p>
        </div>
        <div>
          <p className="product-bonus">Obtenga uno gratis por</p>
          <p className='points'>{ptsParaGratis}pts</p>
        </div>
      </div>
    </div>
  );
}

export default productCard;