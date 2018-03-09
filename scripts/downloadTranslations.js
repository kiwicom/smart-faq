require('dotenv').config();
const fs = require('fs-extra');
const request = require('request-promise-native');
const argv = require('minimist')(process.argv.slice(2));
const languages = require('../i18n/languages');

const prepareRequest = (language) => {
  const projectId = process.env.PHRASE_PROJECT_ID;
  const accessToken = process.env.PHRASE_ACCESS_TOKEN;
  const options = {
    method: 'GET',
    url: `https://api.phraseapp.com/api/v2/projects/${projectId}/locales/${language}/download`,
    qs: {
      file_format: 'simple_json',
      branch: argv.branch || '',
    },
    headers:
      {
        authorization: `token ${accessToken}`
      },
    json: true
  };

  return request(options);
};

const uploadTranslations = () => {
  const result = languages.map((language) => {
    return prepareRequest(language)
      .then(translation =>
        fs.outputJson(`i18n/${language}/translation.json`, translation, { spaces: '  ' })
      )
  });
  return Promise.all(result);
};

uploadTranslations().then(
  () => console.log('Success'),
  (error) => {
    console.log(error);
    process.exit(1);
  }
);