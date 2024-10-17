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
        <Route path="/MiniTienda" element={<PagPrincipal />} />
        <Route path="MiniTienda/galeria" element={<PagGaleria />} />
        <Route path="MiniTienda/productos" element={<PagTable />} /> {/* Ruta para la tabla de productos */}
        <Route path="MiniTienda/productos/:id" element={<PagProducto />} />
        <Route path="MiniTienda/contacto" element={<PagContacto />} />
      </Routes>
    </Router>
  );
};

export default App;