import React, { useEffect, useState } from 'react';
import '../styles/_services.scss';
import ServiceInclude from '../sections/ServiceInclude';
import interestingFactImage from '../assets/taxcreditFact.jpg';

const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="services-heading">
        <h2>Our Services</h2>
      </div>
      <div className="content-layer">
        <div className="estimation-section">
          <div className="package regular">
            <p>Home Cleaning: 38 €/h (Inc. VAT)</p>
            <p>Office, Airbnb Cleaning: 30 €/h (Ex. VAT)</p>
            <p>Moving In or Out Cleaning: 44 €/h (Inc. VAT)</p>
          </div>
          <div className="estimation-form">
            <EstimationCalculator />
          </div>
        </div>
        <div className="offer-section">
          <div className="offer-caption">First-time Customer Offer</div>
          <div className="packages">
            <div className="package first-time">
              <div className="offer-notification">
                <span>43% off</span>
              </div>
              <h3>First Time Package 1</h3>
              <p className='offer-price'>65 €/3h (Inc. VAT) ***</p>
              <p>Home cleaning or deep cleaning</p>
              <p className="note">** Any extra hour will be charged at normal price</p>
            </div>
            <div className="package first-time">
              <div className="offer-notification">
                <span>47% off</span>
              </div>
              <h3>First Time Package 2</h3>
              <p className='offer-price'>100 €/5h (Inc. VAT) ***</p>
              <p>Home cleaning or deep cleaning</p>
              <p className="note">** Any extra hour will be charged at normal price</p>
            </div>
          </div>
        </div>
        <ServiceInclude />
        <div className="interesting-fact-section">
          <div className="fact-content">
            <div className="fact-caption">Interesting Fact</div>
            <p className="fact-highlight">You can claim tax credit equal to 35% of your cleaning expense.</p>
            <p>As our customer, you can request us to make a yearly tax summary for your cleaning so that you can claim your tax credit for household expenses easily and simply. You'll get 35% of the amount you paid back (threshold 150 euros).</p>
            <p>The tax credit for household expenses is done to:</p>
            <ul>
              <li>Eradicate the black market</li>
              <li>Make the services affordable for more people</li>
              <li>Encourage people to buy services from legit service providers</li>
              <li>Increase employment</li>
            </ul>
            <p>You can get the work 35% cheaper, however, in such a way that the cleaners receive adequate compensation for their work.</p>
          </div>
          <div className="fact-image">
            <img src={interestingFactImage} alt="Interesting Fact" />
          </div>
        </div>
      </div>
    </section>
  );
};

const EstimationCalculator: React.FC = () => {
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
      <h3>Estimate Your Cleaning Time</h3>
      <div className="form-group">
        <select value={housingType} onChange={(e) => setHousingType(e.target.value)}>
          <option value="" disabled>Select Housing Type</option>
          <option value="omatalo">Omatalo</option>
          <option value="rivitalo">Rivitalo</option>
          <option value="paritalo">Paritalo</option>
          <option value="kerrostalo">Kerrostalo</option>
        </select>
      </div>
      <div className="form-group">
        <select value={floorCount} onChange={(e) => setFloorCount(e.target.value)} disabled={housingType === 'kerrostalo'}>
          <option value="" disabled>Select Number of Floors</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3+">3+</option>
        </select>
      </div>
      <div className="form-group">
        <select value={houseSize} onChange={(e) => setHouseSize(e.target.value)}>
          <option value="" disabled>Select House Size</option>
          <option value="smaller than 41m2">Smaller than 41m2</option>
          <option value="41m2-50m2">41m2-50m2</option>
          <option value="51m2-60m2">51m2-60m2</option>
          <option value="61m2-70m2">61m2-70m2</option>
          <option value="71m2-80m2">71m2-80m2</option>
          <option value="larger than 80m2">Larger than 80m2</option>
        </select>
      </div>
      <button onClick={calculateTime} disabled={isButtonDisabled}>Calculate</button>
      {estimatedTime !== null && (
        <div className="estimated-time">
          <p>Estimated Cleaning Time: {estimatedTime} hours *</p>
          <p className="note">* The final hours will depend on the frequency of cleaning, your lifestyle, the amount of furniture and other details of your home. You can also request a specific number of cleaning hours. The minimum order is 2h.</p>
        </div>
      )}
    </div>
  );
};

export default Services;
