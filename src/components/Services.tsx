import React from 'react';
import '../styles/_services.scss';

const Services: React.FC = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <ul>
        <li>Residential Cleaning</li>
        <li>Commercial Cleaning</li>
        <li>Carpet Cleaning</li>
        <li>Window Cleaning</li>
      </ul>
    </div>
  );
};

export default Services;
