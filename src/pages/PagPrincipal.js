import React from 'react';
import { Link } from 'react-router-dom';

const PagPrincipal = () => {
    return (
        <div className="container text-center">
            <h1>Bienvenido a Nuestro Negocio</h1>
            <p>
                Aquí encontrarás una variedad de productos de alta calidad. Navega por nuestra galería para ver lo que ofrecemos.
            </p>
            <div>
                <Link to="/MiniTienda/galeria" className="btn btn-primary mx-2">Ver Galería</Link>
                <Link to="/MiniTienda/productos" className="btn btn-secondary mx-2">Productos</Link>
                <Link to="/MiniTienda/contacto" className="btn btn-secondary mx-2">Contacto</Link>
            </div>
            <footer className="mt-5">
                <p>&copy; {new Date().getFullYear()} Nombre del Negocio. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default PagPrincipal;