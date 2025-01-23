import React from 'react';
import '../styles/_aboutus.scss';

const AboutUs: React.FC = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>Welcome to 3C Cleaning, your trusted partner in professional cleaning solutions. With a commitment to excellence and a passion for cleanliness, we provide top-quality cleaning services tailored to meet the unique needs of each client.</p>
      <h3>Our Mission</h3>
      <p>At 3C Cleaning, our mission is to deliver exceptional cleaning services that exceed our clients' expectations. We strive to create clean, healthy, and welcoming environments for homes and businesses alike.</p>
      <h3>Our Values</h3>
      <ul>
        <li><strong>Quality:</strong> We are dedicated to providing the highest standard of cleaning services.</li>
        <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
        <li><strong>Customer Satisfaction:</strong> Our clients' satisfaction is our top priority.</li>
        <li><strong>Innovation:</strong> We continually seek innovative solutions to improve our services.</li>
      </ul>
      <h3>Meet Our Team</h3>
      <p>Our team of skilled and experienced professionals is dedicated to providing exceptional cleaning services. We take pride in our work and are committed to ensuring that every job is completed to the highest standards.</p>
      <h3>Contact Us</h3>
      <p>If you have any questions or would like to learn more about our services, please don't hesitate to contact us. We are here to help you with all your cleaning needs.</p>
    </div>
  );
};

export default AboutUs;
