import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/_order.scss';
import orderImage from '../assets/orderImage.jpg';
import { useTranslation } from 'react-i18next';

const Order: React.FC = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [apartmentType, setApartmentType] = useState('');
  const [floors, setFloors] = useState('');
  const [size, setSize] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_upoxqkx';
    const templateID = 'template_olasjef';
    const publicKey = '26iXmGYSsDxD40Twl';

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phonenumber: phonenumber,
      to_name: '3C Cleaning',
      from_apartmenttype: apartmentType,
      from_apartmentfloor: floors || '1',
      from_apartmentsize: size,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        setFormStatus(t('formStatusSuccess'));
        setName('');
        setEmail('');
        setPhoneNumber('');
        setApartmentType('');
        setFloors('');
        setSize('');
      }, (error) => {
        setFormStatus(t('formStatusError'));
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section id="order-section" className="order-section">
      <h2>{t('orderNowHeading')}</h2>
      <div className="book-container">
        <div className="book-image">
          <img src={orderImage} alt={t('orderImageAlt')} />
        </div>
        <div className="book-form">
          <p className="form-intro">{t('orderIntro')}</p>
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t('name')}
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
                placeholder={t('email')}
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
                placeholder={t('phone')}
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
                <option value="">{t('typeOfApartment')}</option>
                <option value="omatalo">Omakotitalo</option>
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
                <option value="">{t('numberOfFloors')}</option>
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
                <option value="">{t('size')}</option>
                <option value="Under 40">Under 40</option>
                <option value="41-50">41-50</option>
                <option value="51-60">51-60</option>
                <option value="61-70">61-70</option>
                <option value="71-80">71-80</option>
                <option value="Above 80">Above 80</option>
              </select>
            </div>
            <button type="submit">{t('submit')}</button>
          </form>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
      </div>
    </section>
  );
};

export default Order;
