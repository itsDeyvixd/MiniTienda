import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CompProductCarousel = ({ images }) => {
    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt={`Imagen ${index + 1}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CompProductCarousel;