import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/_faq.scss';

const faqs = [
  { question: "How can I book your services?", answer: "There are three ways to order your cleaning: through an online form, by e-mail or by calling us. You will need to provide the following information: your preferred cleaning day and time, your address, and how many meters squared you have. Our customer service is open weekdays, 9-16." },
  { question: "Can I reschedule my cleaning shift?", answer: "You can reschedule your booked cleaning shift free of charge 2 working days before the scheduled shift. Since we must pay our staff in cases like this, we will charge a late cancellation fee of 20% of the agreed cleaning rate. " },
  { question: "Can I cancel my cleaning shift?", answer: "You can cancel booked cleaning shifts free of charge 3 working days before the scheduled cleaning shift. A late cancellation fee of 50% of the service price will be charged, as we also pay our staff in cases like this. " },
  { question: "My house has pets. Is there any problem?", answer: "Pets are not a problem! Please inform our customer service team about pets and ensure our staff can enter safely and do the cleaning work peacefully." },
  { question: "What if something gets broken or damaged during the cleaning process?", answer: "The safety of your home is our top priority. We have comprehensive liability insurance to cover any damage." }
];

const Faq: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
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
                <FontAwesomeIcon icon={openIndices.includes(index) ? faChevronUp : faChevronDown} />
              </div>
              {openIndices.includes(index) && (
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
