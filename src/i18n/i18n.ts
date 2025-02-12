import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fi from './fi.json';

const resources = {
  en: {
    translation: en
  },
  fi: {
    translation: fi
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fi', // Default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
