// @flow

import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';

const language = process.env.LANGUAGE ? process.env.LANGUAGE : 'en';
const env = process.env.NODE_ENV;
const isDev = env === 'development';

i18next
  .use(reactI18nextModule)
  .init({
    lng: language,
    fallbackLng: isDev ? 'dev' : language, // no fallback on production
    load: 'currentOnly', // strictly load only current language
    debug: isDev,
    resources: {
      [language]: {
        translation: require(process.env.TRANSLATION_PATH)
      }
    },
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    initImmediate: false
  });

export default i18next;