// @flow

import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';

const env = process.env.NODE_ENV;
const isDev = env !== 'production';

const initTranslation = (language: string, translation: {}) => {
  i18next.use(reactI18nextModule).init({
    lng: language,
    fallbackLng: isDev ? 'dev' : language, // no fallback on production
    load: 'currentOnly', // strictly load only current language
    debug: isDev,
    resources: {
      [language]: {
        translation,
      },
    },
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    initImmediate: false,
  });
  return i18next;
};

export default initTranslation;
