import React, { useState } from 'react';
import '../styles/_testimonials.scss';
import feedbackImage1 from '../assets/feedback1.jpg';
import feedbackImage2 from '../assets/feedback2.jpg';
import feedbackImage3 from '../assets/feedback3.jpg';

const testimonials = [
  { feedbackImage: feedbackImage1 },
  { feedbackImage: feedbackImage2 },
  { feedbackImage: feedbackImage3 }
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
          <img src={testimonials[currentIndex].feedbackImage} alt={`Feedback ${currentIndex + 1}`} className="testimonial-feedback-image" />
        </div>
        <button className="next-btn" onClick={handleNext}>❯</button>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
