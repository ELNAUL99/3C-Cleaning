import 'react-i18next';
import en from './i18n/en.json';
import fi from './i18n/fi.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      en: typeof en;
      fi: typeof fi;
    };
  }
}
