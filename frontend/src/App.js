import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './ComponentsPreApp/General/Navbar';
import MainPage from './ComponentsPreApp/Pages/MainPage';
import Login from './ComponentsPreApp/Pages/Login';
import Register from './ComponentsPreApp/Pages/Register';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
