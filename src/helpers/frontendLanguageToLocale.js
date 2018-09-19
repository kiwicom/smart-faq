// @flow

export const DEFAULT_LOCALE = 'en_GB';

export default {
  en: 'en_GB',
  us: 'en_US',
  cz: 'cs_CZ',
};

export const parseDashToUnderscore = (locale: string): string =>
  locale.replace('-', '_');
