import React from 'react';
import ProductCard from '../Products/productCard';
import './pages.css'

function Inicio() {
  const productos = [
    { id: 1, nombre: 'Ungüento Cofal Fuerte - 120g', ptsPorUnidad: 250, ptsParaGratis: 4000 },
    { id: 2, nombre: 'Otro Producto - 100g', ptsPorUnidad: 200, ptsParaGratis: 3500 },
    { id: 3, nombre: 'Tercer Producto - 150g', ptsPorUnidad: 300, ptsParaGratis: 4500 },
    { id: 1, nombre: 'Ungüento Cofal Fuerte - 120g', ptsPorUnidad: 250, ptsParaGratis: 4000 },
    { id: 2, nombre: 'Otro Producto - 100g', ptsPorUnidad: 200, ptsParaGratis: 3500 },
    { id: 3, nombre: 'Tercer Producto - 150g', ptsPorUnidad: 300, ptsParaGratis: 4500 },
    { id: 1, nombre: 'Ungüento Cofal Fuerte - 120g', ptsPorUnidad: 250, ptsParaGratis: 4000 },
    { id: 2, nombre: 'Otro Producto - 100g', ptsPorUnidad: 200, ptsParaGratis: 3500 },
    { id: 3, nombre: 'Tercer Producto - 150g', ptsPorUnidad: 300, ptsParaGratis: 4500 },
    { id: 1, nombre: 'Ungüento Cofal Fuerte - 120g', ptsPorUnidad: 250, ptsParaGratis: 4000 },
    { id: 2, nombre: 'Otro Producto - 100g', ptsPorUnidad: 200, ptsParaGratis: 3500 },
    { id: 3, nombre: 'Tercer Producto - 150g', ptsPorUnidad: 300, ptsParaGratis: 4500 },
    { id: 1, nombre: 'Ungüento Cofal Fuerte - 120g', ptsPorUnidad: 250, ptsParaGratis: 4000 },
    { id: 2, nombre: 'Otro Producto - 100g', ptsPorUnidad: 200, ptsParaGratis: 3500 },
    { id: 3, nombre: 'Tercer Producto - 150g', ptsPorUnidad: 300, ptsParaGratis: 4500 },
    { id: 1, nombre: 'Ungüento Cofal Fuerte - 120g', ptsPorUnidad: 250, ptsParaGratis: 4000 },
    { id: 2, nombre: 'Otro Producto - 100g', ptsPorUnidad: 200, ptsParaGratis: 3500 },
    { id: 3, nombre: 'Tercer Producto - 150g', ptsPorUnidad: 300, ptsParaGratis: 4500 },
    { id: 1, nombre: 'Ungüento Cofal Fuerte - 120g', ptsPorUnidad: 250, ptsParaGratis: 4000 },
    { id: 2, nombre: 'Otro Producto - 100g', ptsPorUnidad: 200, ptsParaGratis: 3500 },
    { id: 3, nombre: 'Tercer Producto - 150g', ptsPorUnidad: 300, ptsParaGratis: 4500 },
  ];

  return (
    <div>
      <div className='productosLista'>
        {productos.map(producto => (
          <ProductCard
            key={producto.id}
            nombre={producto.nombre}
            ptsPorUnidad={producto.ptsPorUnidad}
            ptsParaGratis={producto.ptsParaGratis}
          />
        ))}
      </div>
    </div>

  );
}

export default Inicio;
