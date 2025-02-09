import React, { useEffect, useState } from 'react';
import '../styles/_homeServices.scss';
import ServiceInclude from '../sections/ServiceInclude';
import interestingFactImage from '../assets/taxcreditFact.jpg';
import { useTranslation } from 'react-i18next';

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
            <p>{t('homeCleaning')}</p>
            <div className="package-note">
              <p>{t('packageNote1')}</p>
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
              <p>{t('firstTimeHomeCleaning')}</p>
              <p className="note">{t('firstTimePackageNote')}</p>
            </div>
            <div className="package first-time">
              <div className="offer-notification">
                <span>47% off</span>
              </div>
              <h3>{t('firstTimePackage2')}</h3>
              <p className='offer-price'>{t('firstTimePackage2Price')}</p>
              <p>{t('firstTimeHomeCleaning')}</p>
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

export default HomeCleaningServices;
