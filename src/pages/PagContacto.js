import React, { useState } from 'react';

const PagContacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías manejar el envío del formulario, como enviar a una API o mostrar un mensaje
        console.log(formData);
        alert('Mensaje enviado!');
    };

    return (
        <div className="container">
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};

export default PagContacto;