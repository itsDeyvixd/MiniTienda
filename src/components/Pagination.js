import React from "react";

const Pagination = ({ currentPage, productsPerPage, totalProducts, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="d-flex justify-content-between align-items-center mb-1">
            <button
                className="btn btn-primary"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Anterior
            </button>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
            <button
                className="btn btn-primary"
                disabled={currentPage === pageNumbers.length}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Siguiente
            </button>
        </div>
    );
};

export default Pagination;