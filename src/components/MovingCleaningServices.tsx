import React, { useState } from 'react';
import '../styles/_movingServices.scss';
import MovingServiceInclude from '../sections/MovingServiceInclude';
import { useTranslation } from 'react-i18next';
import movingImage from '../assets/movingSlogan.jpg';
import { Link as ScrollLink } from 'react-scroll';
import emailjs from 'emailjs-com';

const MovingCleaningServices: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="movingServices">
      <div className="services-heading">
        <h2>{t('movingCleaningServices')}</h2>
      </div>
      <div className="content-layer">
        <div className="estimation-section">
          <div className="package regular">
            <div className="package-content">
              <p className='cleaning-price'>{t('movingCleaningPrice')}</p>
              <h3 className='cleaning-cost'>{t('movingCleaningCost')}</h3>
              <hr className='divider'/>
              <p className='hourly-rate'>{t('movingCleaningHourlyRate')}</p>
              <p className='rate-after-tax'>{t('movingCleaningAfterTax')}</p>
              <ScrollLink to="order-form" smooth={true} duration={1000} className="scroll-button">{t('orderNow')}</ScrollLink>
            </div>
          </div>
          <div className="estimation-form">
            <EstimationCalculator />
          </div>
        </div>
        <div className="slogan-container">
          <div className="text">
            <h3 className="slogan">{t('movingSlogan')}</h3>
            <p className="paragraph">{t('movingParagraph')}</p>
          </div>
          <div className="image">
            <img src={movingImage} alt="Slogan" />
          </div>
        </div>
        <MovingServiceInclude />
        <div id="order-form">
          <OrderForm />
        </div>
      </div>
    </section>
  );
};

const EstimationCalculator: React.FC = () => {
  const { t } = useTranslation();
  const [houseSize, setHouseSize] = useState('');
  const [estimatedTime, setEstimatedTime] = useState<string | null>(null);

  const calculateTime = () => {
    let baseTime = "";

    if (houseSize === '20m2-39m2') baseTime = "4-7";
    else if (houseSize === '40m2-59m2') baseTime = "5-9";
    else if (houseSize === '60m2-79m2') baseTime = "6-10";
    else if (houseSize === '80m2-99m2') baseTime = "7-12";
    else if (houseSize === '100m2-139m2') baseTime = "8-15";
    else if (houseSize === '140m2-179m2') baseTime = "10-15";

    setEstimatedTime(baseTime);
  };

  return (
    <div className="estimation-calculator">
      <h3>{t('estimateCleaningTime')}</h3>
      <div className="form-group">
        <select value={houseSize} onChange={(e) => setHouseSize(e.target.value)}>
          <option value="" disabled>{t('selectHouseSize')}</option>
          <option value="20m2-39m2">20m2-39m2</option>
          <option value="40m2-59m2">40m2-59m2</option>
          <option value="60m2-79m2">60m2-79m2</option>
          <option value="80m2-99m2">80m2-99m2</option>
          <option value="100m2-139m2">100m2-139m2</option>
          <option value="140m2-179m2">140m2-179m2</option>
        </select>
      </div>
      <button onClick={calculateTime}>{t('calculate')}</button>
      <div className="estimated-time">
        {estimatedTime !== null && (<p>{t('estimatedCleaningTime')}: {estimatedTime} {t('hours')} *</p>)}
        <p className="note">{t('movingNote')}</p>
      </div>
    </div>
  );
};

const OrderForm: React.FC = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');

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
      from_apartmenttype: date,
      from_apartmentfloor: address,
      from_apartmentsize: postcode,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        setFormStatus(t('formStatusSuccess'));
        setName('');
        setEmail('');
        setPhoneNumber('');
        setDate('');
        setAddress('');
        setPostcode('');
      }, (error) => {
        setFormStatus(t('formStatusError'));
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section className="order-form-section">
      <h2>{t('orderNowHeading')}</h2>
      <form className="order-form" onSubmit={sendEmail}>
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
          <input
            type="date"
            id="date"
            name="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
        <button type="submit">{t('submit')}</button>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </form>
    </section>
  );
};

export default MovingCleaningServices;
