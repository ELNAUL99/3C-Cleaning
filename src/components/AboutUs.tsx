import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/_aboutus.scss';
import cleanImage from '../assets/aboutus1.png'; 
import caringImage from '../assets/aboutus2.jpg';
import cheerfulImage from '../assets/aboutus3.jpg';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Tietoa meistä | 3C Cleaning</title>
        <meta name="description" content="Tuntutustu 3C Cleaningin tiimiin. Ammattimainen siivouspalvelu perustuu luotettavuuteen, huolenpitoon ja iloiseen asenteeseen." />
        <link rel="canonical" href="https://www.3ccleaning.fi/aboutus" />
      </Helmet>
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
              <img src={cleanImage} alt="3C Cleaning palvelun puhtaus ja laatu" loading="lazy" />
            </div>
          </div>
          <div className="about-item reverse">
            <div className="about-content">
              <h3>{t('caring')}</h3>
              <p>{t('caringContent')}</p>
            </div>
            <div className="about-image">
              <img src={caringImage} alt="Huolellinen siivouspalvelu - huolenpito on meille tärkeää" loading="lazy" />
            </div>
          </div>
          <div className="about-item">
            <div className="about-content">
              <h3>{t('cheerful')}</h3>
              <p>{t('cheerfulContent')}</p>
            </div>
            <div className="about-image">
              <img src={cheerfulImage} alt="Iloinen ja ammattitaitoinen siivoustiimi" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutUs;
