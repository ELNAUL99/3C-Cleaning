import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/_contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_qjqmhe7';
    const templateID = 'template_uvpmjt8';
    const publicKey = '1ppMNDmfpQd-fuBGj';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: '3C Cleaning',
      from_phonenumber: phonenumber,
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        setFormStatus('Message sent successfully!');
        setName('');  // Clear the form fields
        setEmail('');
        setPhoneNumber('');
        setMessage('');
      }, (error) => {
        setFormStatus('Failed to send message. Please try again later.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-form-section">
        <h2>Contact Us</h2>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>
      <div className="contact-info-section">
        <h3>Contact Information</h3>
        <p>3C Cleaning Oy</p>
        <p>Espoo, Finland</p>
        <p>Phone: +358 45 1438656 <a href="https://wa.me/358451438656" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} size="2x" /></a></p>
      </div>
      <div className="divider">
        <span>O<br />R</span>
      </div>
    </div>
  );
};

export default Contact;
