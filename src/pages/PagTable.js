import React, { useEffect, useState } from 'react';
import CompProductTable from '../components/CompProductTable';

const PagTable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                if (!response.ok) throw new Error('Error al obtener los productos');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="container">
            <h1>Lista de Productos</h1>
            <CompProductTable products={products} />
        </div>
    );
};

export default PagTable;