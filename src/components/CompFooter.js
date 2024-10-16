import React from 'react';

const CompFooter = () => {
  return (
    <footer className="text-center mt-5">
      <p>&copy; {new Date().getFullYear()} Nombre del Negocio. Todos los derechos reservados.</p>
      <div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default CompFooter;