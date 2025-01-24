import React, { useState } from 'react';
import '../styles/_testimonials.scss';

const testimonials = [
  { text: "3C Cleaning did an amazing job at our office! Highly recommend their services.", author: "John Doe" },
  { text: "Great service and friendly staff. My home has never been this clean.", author: "Jane Smith" },
  { text: "Excellent work! They were professional and thorough.", author: "Robert Johnson" }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-slider">
        <button className="prev-btn" onClick={handlePrev}>❮</button>
        <div className="testimonial-item">
          <p>"{testimonials[currentIndex].text}"</p>
          <p>- {testimonials[currentIndex].author}</p>
        </div>
        <button className="next-btn" onClick={handleNext}>❯</button>
      </div>
    </section>
  );
};

export default Testimonials;
