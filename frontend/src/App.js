import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Login from './Components/Login';
// import Register from './Components/Register';

function App() {
  return (
        <Router>
            <div>
                <div>
                    {/* <Link to="/login">
                        <button>Ir a Login</button>
                    </Link> */}
                    {/* <Link to="/register">
                        <button>Ir a Register</button>
                    </Link> */}
                    <Link to="/">
                        <button>Ir a Home</button>
                    </Link>
                </div>

                {/* Define las rutas para cada componente */}
                <Routes>
                    {/* <Route path="/login" element={<Login />} /> */}
                    {/* <Route path="/register" element={<Register />} /> */}
                    {/* Ruta principal */}
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
  );
}

function Home() {
  return <h2>Esta es la página principal</h2>;
}

export default App;
