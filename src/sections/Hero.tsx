import React, { useState, useEffect, useRef } from 'react';
import 'animate.css';
import '../styles/_hero.scss';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/heroBackground1.png';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageProvider';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [currentWord, setCurrentWord] = useState<string>('');
  const [animationClass, setAnimationClass] = useState('animate__animated animate__bounceIn');
  const wordsRef = useRef<string[]>([]);
  let wordIndex = useRef(0);

  useEffect(() => {
    wordsRef.current = t('heroWords', { returnObjects: true }) as string[];
    wordIndex.current = 0;
    setCurrentWord(wordsRef.current[0]);
  }, [language, t]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('animate__animated animate__fadeOut');
      setTimeout(() => {
        wordIndex.current = (wordIndex.current + 1) % wordsRef.current.length;
        setCurrentWord(wordsRef.current[wordIndex.current]);
        setAnimationClass('animate__animated animate__bounceIn');
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1>3C Cleaning</h1>
        <h2>
          {t('your')} <span className={`changing-word ${animationClass}`}>{currentWord}</span> {t('cleaningService')}
        </h2>
        <h3 className="hero-subtitle">
          {t('providedIn')}
        </h3>
        <div className="hero-buttons">
          <Link to="/aboutus" className="hero-button">{t('learnMore')}</Link>
          <ScrollLink to="order-section" smooth={true} duration={1000} className="hero-button primary">{t('orderNow')}</ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
