import React from 'react';
import '../styles/_hero.scss';
import image1 from '../assets/image1.jpg'; 
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-images">
        <img src={image1} alt="First" className="hero-image image1" />
        <img src={image2} alt="Second" className="hero-image image2" />
        <img src={image3} alt="Third" className="hero-image image3" />
      </div>
      <div className="hero-content">
        <h1>Welcome to 3C Cleaning</h1>
        <p>Your trusted partner for all your cleaning needs.</p>
      </div>
    </section>
  );
};

export default Hero;
