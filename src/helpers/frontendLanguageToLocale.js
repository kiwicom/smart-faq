// @flow
/* eslint-disable import/no-dynamic-require, no-console */
import { langInfos } from '../translations/langInfos';

export type SupportedLanguages = {
  [key: string]: {
    [key: string]: string,
  },
};

export const DEFAULT_LOCALE = 'en_GB';

export const supportedLanguages: SupportedLanguages = Object.keys(
  langInfos,
).reduce((acc, langId) => {
  acc[langId] = langInfos[langId].phraseApp;
  return acc;
}, {});

export const parseDashToUnderscore = (locale: string): string =>
  locale.replace('-', '_');

export const loadStaticTranslations = (langId: string) => {
  try {
    return require(`../translations/locales/${langId}/translation.json`);
  } catch (error) {
    console.error(
      'Language selected does not exists, default lenguage loaded.',
      error,
    );
    return require('../translations/enKeys.json');
  }
};
