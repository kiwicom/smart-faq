const glob = require('glob-promise');
const fse = require('fs-extra');

const checkTranslations = async () => {
  const files = await glob('./i18n/**/translation.json');

  const translations = await Promise.all(files.map(t => fse.readJson(t)));
  const errors = translations.reduce((memo, translation, i) => {
    const missing = Object.entries(translation)
      .filter(entry => entry[1] === '__STRING_NOT_TRANSLATED__')
      .map(([key, value]) => `${key}=${value}`);

    return missing.length
      ? `${memo}\n\n${files[i]}\n${missing.join('\\n')}`
      : memo;
  }, '');

  if (errors) {
    console.log('MISSING TRANSLATIONS');
    console.log(errors);
    throw new Error('Missing translations');
  }
};

checkTranslations().then(
  () => console.log('Success'),
  () => {
    console.log('Fail');
    process.exit(1);
  },
);
