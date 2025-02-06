import React, { useState } from 'react';
import '../styles/_transformations.scss';
import beforeImage1 from '../assets/before1.png';
import afterImage1 from '../assets/after1.jpg';
import beforeImage2 from '../assets/before2.jpg';
import afterImage2 from '../assets/after2.jpg';
import beforeImage3 from '../assets/before3.jpg';
import afterImage3 from '../assets/after3.png';
import beforeImage4 from '../assets/before4.jpg';
import afterImage4 from '../assets/after4.jpg';
import beforeImage5 from '../assets/before5.jpg';
import afterImage5 from '../assets/after5.jpg';
import beforeImage6 from '../assets/before6.jpg';
import afterImage6 from '../assets/after6.jpg';
import beforeImage7 from '../assets/before7.jpg';
import afterImage7 from '../assets/after7.jpg';
import beforeImage8 from '../assets/before8.jpg';
import afterImage8 from '../assets/after8.jpg';
import beforeImage9 from '../assets/before9.jpg';
import afterImage9 from '../assets/after9.jpg';
import beforeImage10 from '../assets/before10.jpg';
import afterImage10 from '../assets/after10.jpg';
import beforeImage11 from '../assets/before11.jpg';
import afterImage11 from '../assets/after11.jpg';
import beforeImage12 from '../assets/before12.jpg';
import afterImage12 from '../assets/after12.jpg';
import { useTranslation } from 'react-i18next';

const transformations = [
  { before: beforeImage1, after: afterImage1 },
  { before: beforeImage2, after: afterImage2 },
  { before: beforeImage3, after: afterImage3 },
  { before: beforeImage4, after: afterImage4 },
  { before: beforeImage5, after: afterImage5 },
  { before: beforeImage6, after: afterImage6 },
  { before: beforeImage7, after: afterImage7 },
  { before: beforeImage8, after: afterImage8 },
  { before: beforeImage9, after: afterImage9 },
  { before: beforeImage10, after: afterImage10 },
  { before: beforeImage11, after: afterImage11 },
  { before: beforeImage12, after: afterImage12 },
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
