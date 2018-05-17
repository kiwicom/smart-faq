/* eslint-disable import/no-extraneous-dependencies, no-console */
// @noflow

// see from https://github.com/i18next/i18next-scanner/

const languages = require('./i18n/languages');

module.exports = {
  options: {
    debug: false,
    removeUnusedKeys: true,
    func: {
      list: ['i18next.t', 'i18n.t', '__t'],
      extensions: ['.js', '.jsx'],
    },
    trans: {
      extensions: ['.js', '.jsx'],
      fallbackKey: (ns, value) => {
        return value;
      },
    },
    lngs: languages,
    ns: ['translation'],
    defaultLng: 'en',
    defaultNs: 'translation',
    defaultValue: '__STRING_NOT_TRANSLATED__',
    resource: {
      loadPath: 'i18n/{{lng}}/{{ns}}.json',
      savePath: 'i18n/{{lng}}/{{ns}}.json',
    },
    nsSeparator: false, // namespace separator
    keySeparator: '.',
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
};
