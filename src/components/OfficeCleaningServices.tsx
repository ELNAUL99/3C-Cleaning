import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/_order.scss';
import { useTranslation } from 'react-i18next';
import OfficeServiceInclude from '../sections/OfficeServiceInclude';
import officeSloganImage from '../assets/officeSloganImage.jpg';

const OfficeCleaningServices: React.FC = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');
  const [size, setSize] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_upoxqkx';
    const templateID = 'template_2pdl689';
    const publicKey = '26iXmGYSsDxD40Twl';

    const templateParams = {
      from_companyname: name,
      from_email: email,
      from_phonenumber: phonenumber,
      to_name: '3C Cleaning',
      from_address: address,
      from_postcode: postcode,
      from_size: size,
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        setFormStatus(t('formStatusSuccess'));
        setName('');
        setEmail('');
        setPhoneNumber('');
        setAddress('');
        setPostcode('');
        setSize('');
        setMessage('');
      }, (error) => {
        setFormStatus(t('formStatusError'));
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section className="officeServices">
      <div className="services-heading">
        <h2>{t('officeCleaningServicesHeading')}</h2>
      </div>
      <div className="content-layer">
        <div className="form-section">
          <div className="form">
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('companyName')}
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
              <div className="form-group half-width">
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder={t('address')}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  placeholder={t('postcode')}
                  required
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="size"
                  name="size"
                  placeholder={t('officeSizePlaceholder')}
                  required
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder={t('messagePlaceholder')}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit">{t('submit')}</button>
              {formStatus && <p className="form-status">{formStatus}</p>}
            </form>
          </div>
          <div className="form-content">
            <div className="package-content">
                <p className='cleaning-price'>{t('officeCleaningPrice')}</p>
                <h3 className='cleaning-cost'>{t('officeCleaningCost')}</h3>
                <hr className='divider'/>
                <p className='hourly-rate'>{t('officeCleaningHourlyRate')}</p>
              </div>
          </div>
        </div>
        <div className="slogan-container">
          <div className="image">
            <img src={officeSloganImage} alt="Slogan" />
          </div>
          <div className="text">
            <h3 className="slogan">{t('officeSloganTitle')}</h3>
            <p className="paragraph">{t('officeSloganContent')}</p>
          </div>
        </div>
        <OfficeServiceInclude />
      </div>
    </section>
  );
};

export default OfficeCleaningServices;
