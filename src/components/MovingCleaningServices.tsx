import React, { useState } from 'react';
import '../styles/_movingServices.scss';
import MovingServiceInclude from '../sections/MovingServiceInclude';
import { useTranslation } from 'react-i18next';

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
            <p>{t('movingCleaning')}</p>
            <div className="package-note">
              <p>{t('packageNote2')}</p>
            </div>
          </div>
          <div className="estimation-form">
            <EstimationCalculator />
          </div>
        </div>
        <MovingServiceInclude />
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

export default MovingCleaningServices;
