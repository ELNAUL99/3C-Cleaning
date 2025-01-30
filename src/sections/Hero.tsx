import React, { useState, useEffect } from 'react';
import 'animate.css';
import '../styles/_hero.scss';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/heroBackground1.png';
import { Link as ScrollLink } from 'react-scroll';

const words = ["trustworthy", "dependable", "reliable", "faithful", "honest", "reputable"];

const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [animationClass, setAnimationClass] = useState('animate__animated animate__bounceIn');
  let wordIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('animate__animated animate__fadeOut');
      setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        setCurrentWord(words[wordIndex]);
        setAnimationClass('animate__animated animate__bounceIn');
      }, 500);
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1>3C Cleaning</h1>
        <h2>
          Your <span className={`changing-word ${animationClass}`}>{currentWord}</span> cleaning service
        </h2>
        <div className="hero-buttons">
          <Link to="/aboutus" className="hero-button">Learn more</Link>
          <ScrollLink to="order-section" smooth={true} duration={1000} className="hero-button primary">Order now</ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
