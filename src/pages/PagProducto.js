import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CompProductCarousel from '../components/CompProductCarousel';

const PagProducto = () => {
    const { id } = useParams(); // Obtiene el ID del producto desde la URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    if (!product) return <div>Cargando...</div>;

    return (
        <div className="container">
            <h1>{product.title}</h1>
            <CompProductCarousel images={product.images} /> {/* Use the CompProductCarousel component */}
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
        </div>
    );
};

export default PagProducto;