import React, { useEffect, useState } from 'react';
import '../styles/_homeServices.scss';
import { Link as ScrollLink } from 'react-scroll';
import ServiceInclude from '../sections/ServiceInclude';
import interestingFactImage from '../assets/taxcreditFact.jpg';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const HomeCleaningServices: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="homeServices">
      <div className="services-heading">
        <h2>{t('homeCleaningServices')}</h2>
      </div>
      <div className="content-layer">
        <div className="estimation-section">
        <div className="package regular">
            <div className="package-content">
              <p className='cleaning-price'>{t('homeCleaningPrice')}</p>
              <h3 className='cleaning-cost'>{t('homeCleaningCost')}</h3>
              <hr className='divider'/>
              <p className='hourly-rate'>{t('homeCleaningHourlyRate')}</p>
              <p className='rate-after-tax'>{t('homeCleaningAfterTax')}</p>
              <ScrollLink to="order-form" smooth={true} duration={1000} className="scroll-button">{t('orderNow')}</ScrollLink>
            </div>
          </div>
          <div className="estimation-form">
            <EstimationCalculator />
          </div>
        </div>
        <div className="offer-section">
          <div className="offer-caption">{t('firstTimeCustomerOffer')}</div>
          <div className="packages">
            <div className="package first-time">
              <div className="offer-notification">
                <span>43% off</span>
              </div>
              <h3>{t('firstTimePackage1')}</h3>
              <p className='offer-price'>{t('firstTimePackage1Price')}</p>
              <p>{t('homeCleaningServices')}</p>
              <p className="note">{t('firstTimePackageNote')}</p>
            </div>
            <div className="package first-time">
              <div className="offer-notification">
                <span>47% off</span>
              </div>
              <h3>{t('firstTimePackage2')}</h3>
              <p className='offer-price'>{t('firstTimePackage2Price')}</p>
              <p>{t('homeCleaningServices')}</p>
              <p className="note">{t('firstTimePackageNote')}</p>
            </div>
          </div>
        </div>
        <ServiceInclude />
        <div className="interesting-fact-section">
          <div className="fact-content">
            <div className="fact-caption">{t('interestingFact')}</div>
            <p className="fact-highlight">{t('taxCreditHighlight')}</p>
            <p>{t('taxCreditDetails')}</p>
            <p>{t('taxCreditReasons')}</p>
            <ul>
              <li>{t('reason1')}</li>
              <li>{t('reason2')}</li>
              <li>{t('reason3')}</li>
              <li>{t('reason4')}</li>
            </ul>
            <p>{t('taxCreditSavings')}</p>
          </div>
          <div className="fact-image">
            <img src={interestingFactImage} alt="Interesting Fact" />
          </div>
        </div>
        <div id="order-form">
          <OrderForm />
        </div>
      </div>
    </section>
  );
};

const EstimationCalculator: React.FC = () => {
  const { t } = useTranslation();
  const [housingType, setHousingType] = useState('');
  const [floorCount, setFloorCount] = useState('');
  const [houseSize, setHouseSize] = useState('');
  const [estimatedTime, setEstimatedTime] = useState<string | number | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (housingType && (floorCount || housingType === 'kerrostalo') && houseSize) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [housingType, floorCount, houseSize]);

  const calculateTime = () => {
    let baseTime = 0;

    if (houseSize === 'smaller than 41m2') baseTime = 2;
    else if (houseSize === '41m2-50m2') baseTime = 2.5;
    else if (houseSize === '51m2-60m2') baseTime = 3;
    else if (houseSize === '61m2-70m2') baseTime = 3.5;
    else if (houseSize === '71m2-80m2') baseTime = 4;
    else if (houseSize === 'larger than 80m2') baseTime = 4.5;

    if (housingType === 'rivitalo' || housingType === 'omatalo' || housingType === 'paritalo') {
      if (floorCount) baseTime *= parseInt(floorCount);
      setEstimatedTime(baseTime);
    }

    if (floorCount === '3+' || houseSize === 'larger than 80m2') {
      if (floorCount) baseTime *= parseInt(floorCount);
      setEstimatedTime(`More than ${baseTime}`);
      return;
    }

    if (housingType === 'kerrostalo') {
      baseTime *= 1;
      setEstimatedTime(baseTime);
    }
  };

  return (
    <div className="estimation-calculator">
      <h3>{t('estimateCleaningTime')}</h3>
      <div className="form-group">
        <select value={housingType} onChange={(e) => setHousingType(e.target.value)}>
          <option value="" disabled>{t('selectHousingType')}</option>
          <option value="omatalo">Omatalo</option>
          <option value="rivitalo">Rivitalo</option>
          <option value="paritalo">Paritalo</option>
          <option value="kerrostalo">Kerrostalo</option>
        </select>
      </div>
      <div className="form-group">
        <select value={floorCount} onChange={(e) => setFloorCount(e.target.value)} disabled={housingType === 'kerrostalo'}>
          <option value="" disabled>{t('selectNumberOfFloors')}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3+">3+</option>
        </select>
      </div>
      <div className="form-group">
        <select value={houseSize} onChange={(e) => setHouseSize(e.target.value)}>
          <option value="" disabled>{t('selectHouseSize')}</option>
          <option value="smaller than 41m2">smaller than 41m2</option>
          <option value="41m2-50m2">41m2-50m2</option>
          <option value="51m2-60m2">51m2-60m2</option>
          <option value="61m2-70m2">61m2-70m2</option>
          <option value="71m2-80m2">71m2-80m2</option>
          <option value="larger than 80m2">larger than 80m2</option>
        </select>
      </div>
      <button onClick={calculateTime} disabled={isButtonDisabled}>{t('calculate')}</button>
        <div className="estimated-time">
          {estimatedTime !== null && (<p>{t('estimatedCleaningTime')}: {estimatedTime} {t('hours')} *</p>)}
          <p className="note">{t('homeNote')}</p>
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

export default HomeCleaningServices;