import React from 'react';
import '../styles/_benefits.scss';

const Benefits: React.FC = () => {
  return (
    <section className="benefits">
      <h2>Our Benefits</h2>
      <div className="benefit-list">
        <div className="benefit-item">
          <i className="benefit-icon">👍</i>
          <h3>High Quality</h3>
          <p>Experience top-notch cleaning services with exceptional results.</p>
        </div>
        <div className="benefit-item">
          <i className="benefit-icon">⌛</i>
          <h3>Time-Saving</h3>
          <p>Save valuable time with our efficient and reliable services.</p>
        </div>
        <div className="benefit-item">
          <i className="benefit-icon">💚</i>
          <h3>Healthier Environment</h3>
          <p>Enjoy a cleaner and healthier living or working space.</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
