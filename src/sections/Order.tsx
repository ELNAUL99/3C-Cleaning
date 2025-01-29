import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/_order.scss';
import orderImage from '../assets/orderImage.jpg';

const Order: React.FC = () => {
    const [formStatus, setFormStatus] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [apartmentType, setApartmentType] = useState('');
    const [floors, setFloors] = useState('');
    const [size, setSize] = useState('');
  
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
      };
  
      emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then((result) => {
          setFormStatus('Message sent successfully!');
          setName('');
          setEmail('');
          setPhoneNumber('');
          setApartmentType('');
          setFloors('');
          setSize('');
        }, (error) => {
          setFormStatus('Failed to send message. Please try again later.');
          console.error('EmailJS error:', error);
        });
    };
  
    return (
      <section id="order-section" className="order-section">
        <h2>Order Now</h2>
        <div className="book-container">
          <div className="book-image">
            <img src={orderImage} alt="Order Image" />
          </div>
          <div className="book-form">
            <p className="form-intro">Let us know your cleaning needs, and we'll get back to you soon.</p>
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
              <button type="submit">Submit</button>
            </form>
            {formStatus && <p className="form-status">{formStatus}</p>}
          </div>
        </div>
      </section>
    );
};

export default Order;
