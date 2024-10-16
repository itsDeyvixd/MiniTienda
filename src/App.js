import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PagPrincipal from './pages/PagPrincipal';
import PagGaleria from './pages/PagGaleria';
import PagProducto from './pages/PagProducto';
import PagContacto from './pages/PagContacto';
import PagTable from './pages/PagTable'; 
import CompNavbar from './components/CompNavbar';

const App = () => {
  return (
    <Router>
      <CompNavbar />
      <Routes>
        <Route path="/" element={<PagPrincipal />} />
        <Route path="/galeria" element={<PagGaleria />} />
        <Route path="/productos" element={<PagTable />} /> {/* Ruta para la tabla de productos */}
        <Route path="/productos/:id" element={<PagProducto />} />
        <Route path="/contacto" element={<PagContacto />} />
      </Routes>
    </Router>
  );
};

export default App;