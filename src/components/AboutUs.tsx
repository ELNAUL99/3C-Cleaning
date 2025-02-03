import React from 'react';
import '../styles/_aboutus.scss';
import cleanImage from '../assets/aboutus1.png'; 
import caringImage from '../assets/aboutus2.jpg';
import cheerfulImage from '../assets/aboutus3.jpg';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="about-us">
      <div className="about-heading">
        <h2>{t('aboutUsHeading')}</h2>
      </div>
      <div className="content-layer">
        <h2 className="quote">{t('quote')}</h2>
        <p className="subheading">{t('subheading')}</p>
        <div className="about-section">
          <div className="about-item">
            <div className="about-content">
              <h3>{t('cleaning')}</h3>
              <p>{t('cleaningContent')}</p>
            </div>
            <div className="about-image">
              <img src={cleanImage} alt="Clean" loading="lazy"/>
            </div>
          </div>
          <div className="about-item reverse">
            <div className="about-content">
              <h3>{t('caring')}</h3>
              <p>{t('caringContent')}</p>
            </div>
            <div className="about-image">
              <img src={caringImage} alt="Caring" loading="lazy"/>
            </div>
          </div>
          <div className="about-item">
            <div className="about-content">
              <h3>{t('cheerful')}</h3>
              <p>{t('cheerfulContent')}</p>
            </div>
            <div className="about-image">
              <img src={cheerfulImage} alt="Cheerful" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
