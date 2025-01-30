import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/_contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faEnvelope, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [apartmentType, setApartmentType] = useState('');
  const [floors, setFloors] = useState('');
  const [size, setSize] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_qjqmhe7';
    const templateID = 'template_uvpmjt8';
    const publicKey = '1ppMNDmfpQd-fuBGj';

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phonenumber: phonenumber,
      to_name: '3C Cleaning',
      from_apartment_type: apartmentType,
      floors: floors || '1',
      from_apartment_size: size,
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setFormStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setPhoneNumber('');
        setApartmentType('');
        setFloors('');
        setSize('');
        setMessage('');
      }, (error) => {
        setFormStatus('Failed to send message. Please try again later.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section className="contact-us">
      <div className="contact-heading">
        <h2>Contact Us</h2>
      </div>
      <div className="content-layer">
        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <select
                id="apartment-type"
                name="apartment-type"
                required
                value={apartmentType}
                onChange={(e) => setApartmentType(e.target.value)}
              >
                <option value="">Type of Apartment</option>
                <option value="omatalo">Omatalo</option>
                <option value="paritalo">Paritalo</option>
                <option value="rivitalo">Rivitalo</option>
                <option value="kerrostalo">Kerrostalo</option>
              </select>
            </div>
            <div className="form-group">
              <select
                id="floors"
                name="floors"
                required
                disabled={apartmentType === 'kerrostalo'}
                value={floors}
                onChange={(e) => setFloors(e.target.value)}
              >
                <option value="">Number of Floors</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4+">4+</option>
              </select>
            </div>
            <div className="form-group">
              <select
                id="size"
                name="size"
                required
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="">Size (m²)</option>
                <option value="Under 40">Under 40</option>
                <option value="41-50">41-50</option>
                <option value="51-60">51-60</option>
                <option value="61-70">61-70</option>
                <option value="71-80">71-80</option>
                <option value="Above 80">Above 80</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Any specific note you want us to know about?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <p><FontAwesomeIcon icon={faBuilding} />  3C Cleaning Oy</p>
          <p><FontAwesomeIcon icon={faMapLocationDot} />  Ylismäentie 12 F 17, 02250 Espoo, Finland</p>
          <p><FontAwesomeIcon icon={faEnvelope} />  3ccleaningpro@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone}/>  +358 45 1438656</p>
        </div>
        <div className="divider">
          <span>O<br />R</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
