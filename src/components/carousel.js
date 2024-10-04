import React, { useState, useEffect } from 'react';
const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <div className="card">
                            <img src={image.Photo} alt={image.Name} className="card-image" />
                            <div className="card-content">
                                <h3 className="card-title">{image.Name}</h3>
                                <p className="card-price">{image.Price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Carousel controls moved below the slide */}
            <div className="carousel-controls">
                <button className="carousel-button left" onClick={goToPrevious}>←</button>
               
                <div className="carousel-indicators">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>

                <button className="carousel-button right" onClick={goToNext}>→</button>
            </div>
        </div>
    );
};

export default Carousel;
