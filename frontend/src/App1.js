import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/General/header';
import Navbar from './Components/General/navbar';
import Inicio from './Components/Pages/Inicio';
import RegistrarFactura from './Components/Pages/RegistrarFactura';
import MisPuntos from './Components/Pages/MisPuntos';
import MisSolicitudes from './Components/Pages/MisSolicitudes';
import Farmacias from './Components/Pages/Farmacias';

function App() {
  return (
    <Router>
      <div>
        {/* Encabezado */}
        <Header />

        {/* Barra de navegación */}
        <Navbar />

        {/* Rutas de la aplicación */}
        <Routes>
          {/* Aquí defines las rutas de las diferentes páginas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/registrar-factura" element={<RegistrarFactura />} />
          <Route path="/mis-puntos" element={<MisPuntos />} />
          <Route path="/mis-solicitudes" element={<MisSolicitudes />} />
          <Route path="/farmacias" element={<Farmacias />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;