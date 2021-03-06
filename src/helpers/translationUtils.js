// @flow
/* eslint-disable import/no-dynamic-require, no-console */
import { langInfos } from '../translations/langInfos';

export type SupportedLanguages = {
  [key: string]: string,
};

export const DEFAULT_LOCALE = 'en_GB';

const parseDashToUnderscore = (locale: string): string =>
  locale.replace('-', '_');

export const supportedLanguages: SupportedLanguages = Object.keys(
  langInfos,
).reduce((acc, langId) => {
  acc[langId] = parseDashToUnderscore(langInfos[langId].phraseApp);
  return acc;
}, {});

export const fromLanguageToLocale = (lang: string): string =>
  supportedLanguages[lang];

export const loadStaticTranslations = (langId: string) => {
  try {
    // $FlowExpectedError: Expected use of none string literal
    return require(`../translations/locales/${langId}/translation.json`);
  } catch (error) {
    console.error(
      'Language selected does not exists, default lenguage loaded.',
      error,
    );
    return require('../translations/enKeys.json');
  }
};
