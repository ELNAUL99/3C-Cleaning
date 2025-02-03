import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageProvider';

const LanguageSelector: React.FC = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('en')} disabled={language === 'en'}>
        {t('english')}
      </button>
      <button onClick={() => changeLanguage('fi')} disabled={language === 'fi'}>
        {t('finnish')}
      </button>
    </div>
  );
};

export default LanguageSelector;
