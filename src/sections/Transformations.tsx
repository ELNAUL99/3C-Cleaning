import React, { useState } from 'react';
import '../styles/_transformations.scss';
import beforeImage1 from '../assets/before1.jpg';
import afterImage1 from '../assets/after1.jpg';
import beforeImage2 from '../assets/before2.jpg';
import afterImage2 from '../assets/after2.jpg';
import beforeImage3 from '../assets/before3.jpg';
import afterImage3 from '../assets/after3.jpg';
import beforeImage4 from '../assets/before4.jpg';
import afterImage4 from '../assets/after4.jpg';
import { useTranslation } from 'react-i18next';

const transformations = [
  { before: beforeImage1, after: afterImage1 },
  { before: beforeImage2, after: afterImage2 },
  { before: beforeImage3, after: afterImage3 },
  { before: beforeImage4, after: afterImage4 },
];

const Transformations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? transformations.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === transformations.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="transformations">
      <h2>{t('transformationsHeading')}</h2>
      <div className="transformation-slider">
        <button className="prev-btn" onClick={handlePrev}>❮</button>
        <div className="transformation-item">
          <div className="transformation-before">
            <h3>{t('before')}</h3>
            <img src={transformations[currentIndex].before} alt={`Before Transformation ${currentIndex + 1}`} className="transformation-image" />
          </div>
          <div className="transformation-after">
            <h3>{t('after')}</h3>
            <img src={transformations[currentIndex].after} alt={`After Transformation ${currentIndex + 1}`} className="transformation-image" />
          </div>
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
