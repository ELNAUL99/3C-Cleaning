import React, { useState } from 'react';
import '../styles/_services.scss';
import ServiceInclude from '../sections/ServiceInclude'; // Ensure this path is correct

const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="services-heading">
        <h2>Our Services</h2>
      </div>
      <div className="content-layer">
        <div className="estimation-section">
          <div className="package regular">
            <h3>Home Cleaning</h3>
            <p>38 €/h (include VAT)</p>
          </div>
          <div className="estimation-form">
            <EstimationCalculator />
          </div>
        </div>
        <div className="offer-section">
          <div className="offer-warning">More than 40% off</div>
          <div className="offer-caption">First-time Customer Offer</div>
          <div className="packages">
            <div className="package first-time">
              <div className="offer-notification">43% off</div>
              <h3>First Time Package 1</h3>
              <p>65 €/3h (include VAT)</p>
              <p>Home cleaning or Deep Cleaning ***</p>
            </div>
            <div className="package first-time">
              <div className="offer-notification">47% off</div>
              <h3>First Time Package 2</h3>
              <p>100 €/5h (include VAT)</p>
              <p>Home cleaning or Deep Cleaning ***</p>
            </div>
          </div>
        </div>
        <ServiceInclude />
      </div>
    </section>
  );
};

const EstimationCalculator: React.FC = () => {
  const [housingType, setHousingType] = useState('');
  const [floorCount, setFloorCount] = useState('');
  const [houseSize, setHouseSize] = useState('');
  const [estimatedTime, setEstimatedTime] = useState<string | number | null>(null);

  const calculateTime = () => {
    let baseTime = 0;

    if (houseSize === 'smaller than 41m2') baseTime = 2;
    else if (houseSize === '41m2-50m2') baseTime = 2.5;
    else if (houseSize === '51m2-60m2') baseTime = 3;
    else if (houseSize === '61m2-70m2') baseTime = 3.5;
    else if (houseSize === '71m2-80m2') baseTime = 4;

    if (housingType === 'rivitalo' || housingType === 'omatalo' || housingType === 'paritalo') {
      if (floorCount) baseTime *= parseInt(floorCount);
    }

    if (floorCount === '3+' || houseSize === 'larger than 80m2') {
      if (floorCount) baseTime *= parseInt(floorCount);
      setEstimatedTime(`More than ${baseTime} hours`);
      return;
    }

    setEstimatedTime(baseTime);
  };

  return (
    <div className="estimation-calculator">
      <h3>Estimate Your Cleaning Time</h3>
      <div className="form-group">
        <label>Housing Type</label>
        <select value={housingType} onChange={(e) => setHousingType(e.target.value)}>
          <option value="">Select</option>
          <option value="omatalo">Omatalo</option>
          <option value="rivitalo">Rivitalo</option>
          <option value="paritalo">Paritalo</option>
          <option value="kerrostalo">Kerrostalo</option>
        </select>
      </div>
      {(housingType === 'rivitalo' || housingType === 'omatalo' || housingType === 'paritalo') && (
        <div className="form-group">
          <label>Number of Floors</label>
          <select value={floorCount} onChange={(e) => setFloorCount(e.target.value)}>
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3+">3+</option>
          </select>
        </div>
      )}
      <div className="form-group">
        <label>House Size</label>
        <select value={houseSize} onChange={(e) => setHouseSize(e.target.value)}>
          <option value="">Select</option>
          <option value="smaller than 41m2">Smaller than 41m2</option>
          <option value="41m2-50m2">41m2-50m2</option>
          <option value="51m2-60m2">51m2-60m2</option>
          <option value="61m2-70m2">61m2-70m2</option>
          <option value="71m2-80m2">71m2-80m2</option>
          <option value="larger than 80m2">Larger than 80m2</option>
        </select>
      </div>
      <button onClick={calculateTime}>Calculate</button>
      {estimatedTime !== null && (
        <div className="estimated-time">
          <p>Estimated Cleaning Time: {estimatedTime}</p>
        </div>
      )}
    </div>
  );
};

export default Services;
