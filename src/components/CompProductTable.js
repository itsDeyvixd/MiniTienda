import React from 'react';
import Table from 'react-bootstrap/Table';

const CompProductTable = ({ products }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default CompProductTable;