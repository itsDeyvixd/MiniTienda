import React, { useEffect, useState } from "react";
import CompProductCard from "../components/CompProductCard";
import Pagination from "../components/Pagination";

const PagGaleria = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container">
            <h1>Galería de Productos</h1>
            <Pagination
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                onPageChange={handlePageChange}
            />
            <div className="row">
                {currentProducts.map((product) => (
                    <div className="col-md-4" key={product.id}>
                        <CompProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PagGaleria;