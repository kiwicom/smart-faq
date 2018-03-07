// copy pasted from https://github.com/i18next/i18next-scanner/blob/master/examples/i18next-scanner.config.js
const fs = require('fs');
const chalk = require('chalk');
const languages = require('./i18n/languages');

module.exports = {
  options: {
    debug: true,
    func: {
      list: ['i18next.t', 'i18n.t'],
      extensions: ['.js', '.jsx']
    },
    trans: {
      extensions: ['.js', '.jsx'],
      fallbackKey: (ns, value) => {
        return value;
      }
    },
    lngs: languages,
    ns: [
      'translation',
    ],
    defaultNs: 'translation',
    defaultValue: '__STRING_NOT_TRANSLATED__',
    resource: {
      loadPath: 'i18n/{{lng}}/{{ns}}.json',
      savePath: 'i18n/{{lng}}/{{ns}}.json'
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}'
    }
  },
  transform: function customTransform(file, enc, done) {
    const parser = this.parser;
    const content = fs.readFileSync(file.path, enc);
    let count = 0;

    parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__'] }, (key, options) => {
      parser.set(key, Object.assign({}, options, {
        nsSeparator: false,
        keySeparator: false
      }));
      ++count;
    });

    if (count > 0) {
      console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
    }

    done();
  }
};