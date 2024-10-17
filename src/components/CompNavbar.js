import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CompNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/MiniTienda"> Nombre del Negocio </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="MiniTienda/galeria">Galería</Nav.Link>
                    <Nav.Link as={Link} to="MiniTienda/productos">Productos</Nav.Link>
                    <Nav.Link as={Link} to="MiniTienda/contacto">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CompNavbar;
