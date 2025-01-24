import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/_faq.scss';

const faqs = [
  { question: "What services do you offer?", answer: "We offer a wide range of cleaning services including residential, commercial, and specialized cleaning." },
  { question: "Do you use eco-friendly products?", answer: "Yes, we prioritize using eco-friendly and non-toxic products for all our cleaning services." },
  { question: "How can I book your services?", answer: "You can book our services by contacting us through phone, email, or our online booking form." },
  { question: "Are your staff trained and insured?", answer: "Yes, all our staff members are professionally trained and fully insured to provide the best service." }
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-content">
        <div className="faq-heading">
          <h3>Common Questions About Our Cleaning Services</h3>
        </div>
        <div className="faq-qa">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h3>{faq.question}</h3>
                <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} />
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
