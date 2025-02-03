import React from 'react';
import '../styles/_benefits.scss';
import { useTranslation } from 'react-i18next';

const Benefits: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="benefits">
      <h2>{t('benefits')}</h2>
      <div className="benefit-list">
        <div className="benefit-item">
          <hr className="benefit-divider" />
          <i className="benefit-icon">👍</i>
          <h3>{t('highQuality')}</h3>
          <p>{t('highQualityDesc')}</p>
        </div>
        <div className="benefit-item">
          <hr className="benefit-divider" />
          <i className="benefit-icon">⌛</i>
          <h3>{t('timeSaving')}</h3>
          <p>{t('timeSavingDesc')}</p>
        </div>
        <div className="benefit-item">
          <hr className="benefit-divider" />
          <i className="benefit-icon">💚</i>
          <h3>{t('healthierEnvironment')}</h3>
          <p>{t('healthierEnvironmentDesc')}</p>
        </div>
        <div className="benefit-item">
          <hr className="benefit-divider" />
          <i className="benefit-icon">💬</i>
          <h3>{t('freeEstimates')}</h3>
          <p>{t('freeEstimatesDesc')}</p>
        </div>
        <div className="benefit-item">
          <hr className="benefit-divider" />
          <i className="benefit-icon">📅</i>
          <h3>{t('quickScheduling')}</h3>
          <p>{t('quickSchedulingDesc')}</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
