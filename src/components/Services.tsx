import React from 'react';
import '../styles/_services.scss';

const Services: React.FC = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="price-packages">
        <div className="package first-time">
          <div className="offer-notification">More than 40% off</div>
          <h3>First Time Package 1</h3>
          <p>3 hours of home or deep cleaning for 65 EUR (save 43%) ***</p>
        </div>
        <div className="package first-time">
          <div className="offer-notification">More than 40% off</div>
          <h3>First Time Package 2</h3>
          <p>5 hours of home or deep cleaning for 100 EUR (save 47%) ***</p>
        </div>
        <div className="package regular">
          <h3>Regular Package</h3>
          <p>38 EUR per hour cleaning</p>
        </div>
      </div>
      <EstimationCalculator />
    </section>
  );
};

const EstimationCalculator: React.FC = () => {
  const [housingType, setHousingType] = React.useState('');
  const [floorCount, setFloorCount] = React.useState('');
  const [houseSize, setHouseSize] = React.useState('');
  const [estimatedTime, setEstimatedTime] = React.useState<number | null>(null);

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
            <option value="4">4</option>
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
          <p>Estimated Cleaning Time: {estimatedTime} hours</p>
        </div>
      )}
    </div>
  );
};

export default Services;
