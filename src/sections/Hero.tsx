import React, { useState, useEffect } from 'react';
import '../styles/_hero.scss';
import backgroundImage from '../assets/herobackground.png';

const words = ["trustworthy", "dependable", "reliable", "faithful", "honest", "reputable"];

const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  let wordIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length;
      setCurrentWord(words[wordIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1>3C Cleaning</h1>
        <h2>
          Your <span className="changing-word">{currentWord}</span> cleaning service
        </h2>
      </div>
    </section>
  );
};

export default Hero;
