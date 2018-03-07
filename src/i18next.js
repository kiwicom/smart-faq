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
      en: { // TODO load resources from files
        translation: {
          "hello": "hello world, captain!",
        }
      },
      es: {
        translation: {
          "hello": "hola mundo, el capitán!",
        }
      }
    },
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    initImmediate: false
  });

export default i18next;