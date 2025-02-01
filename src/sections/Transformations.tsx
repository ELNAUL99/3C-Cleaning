import React, { useState } from 'react';
import '../styles/_transformations.scss';
import transformationImage1 from '../assets/transformationImage1.jpg';
import transformationImage2 from '../assets/transformationImage2.jpg';
import transformationImage3 from '../assets/transformationImage3.jpg';

const transformations = [
  { image: transformationImage1 },
  { image: transformationImage2 },
  { image: transformationImage3 },
];

const Transformations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? transformations.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === transformations.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="transformations">
      <h2>Transformations</h2>
      <div className="transformation-slider">
        <button className="prev-btn" onClick={handlePrev}>❮</button>
        <div className="transformation-item">
          <img src={transformations[currentIndex].image} alt={`Transformation ${currentIndex + 1}`} className="transformation-image" />
        </div>
        <button className="next-btn" onClick={handleNext}>❯</button>
      </div>
      <div className="transformation-dots">
        {transformations.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Transformations;
