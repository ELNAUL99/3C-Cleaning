import React from 'react';
import '../styles/_hero.scss';
import cleaningPhoto1 from '../assets/image1.jpg';
import cleaningPhoto2 from '../assets/image2.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={cleaningPhoto1} alt="Cleaning Service 1" className="image-left"/>
        </div>
        <div className="hero-text">
          <h1>Your Trusted Cleaning Service</h1>
          <p>Experience the difference with our professional and reliable cleaning services.</p>
        </div>
        <div className="hero-image">
          <img src={cleaningPhoto2} alt="Cleaning Service 2" className="image-right"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
