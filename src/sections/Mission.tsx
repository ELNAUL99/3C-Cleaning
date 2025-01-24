import React from 'react';
import '../styles/_mission.scss';

const Mission: React.FC = () => {
  return (
    <section className="mission">
      <h2>Our Mission</h2>
      <div className="mission-content">
        <div className="mission-paragraph">
          <p>Cleaning excellence meets reliability. Our family-owned cleaning service combines expertise with a personal touch, ensuring that every cleaning session meets your specific needs. We are committed to providing a spotless home while using eco-friendly products that are safe for your family and pets.</p>
        </div>
        <div className="mission-paragraph">
          <p>With years of experience in the cleaning industry, we blend effective techniques with a commitment to customer satisfaction. Our goal is to provide services that not only clean but also enhance the comfort and beauty of your home.</p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
