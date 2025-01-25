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
      <div className="mission-content">
        <h2>OUR MISSION</h2>
        <div className="mission-paragraphs">
          <p>Cleaning excellence meets reliability. Our family-owned cleaning service combines expertise with a personal touch, ensuring that every cleaning session meets your specific needs. We are committed to providing a spotless home while using eco-friendly products that are safe for your family and pets.</p>
          <p>With years of experience in the cleaning industry, we blend effective techniques with a commitment to customer satisfaction. Our goal is to provide services that not only clean but also enhance the comfort and beauty of your home.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
