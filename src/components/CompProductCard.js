import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CompProductCarousel from './CompProductCarousel';

const CompProductCard = ({ product }) => {
    const MAX_DESCRIPTION_LENGTH = 80; // Set the maximum number of characters to display in the description

    return (
        <Card className="mt-2" style={{ width: '25rem', height: '40rem' }}>
            <CompProductCarousel images={product.images} />
            <Card.Body>
                <Card.Subtitle>Categoría: {product.category.name}</Card.Subtitle>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description.slice(0, MAX_DESCRIPTION_LENGTH)}
                    {product.description.length > MAX_DESCRIPTION_LENGTH && '...'}
                </Card.Text>
                <Card.Text>Precio: ${product.price}</Card.Text>
                <Link to={`/MiniTienda/productos/${product.id}`}>
                    <Button variant="primary">Ver Detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default CompProductCard;