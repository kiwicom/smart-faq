const glob = require('glob-promise');
const fse = require('fs-extra');
const crypto = require('crypto');
const { spawnSync } = require('child_process');

const getTranslationHashes = files =>
  Promise.all(
    files.map(async t => {
      const fileContent = await fse.readFile(t);

      return crypto
        .createHash('sha256')
        .update(fileContent)
        .digest('hex');
    }),
  );

const detectChanges = (oldHashes, newHashes) => {
  if (oldHashes.length !== newHashes.length) {
    return true;
  }

  return oldHashes.find((hash, index) => {
    return newHashes[index] !== hash;
  });
};

const findMissing = (translation, namespaces = []) => {
  let missing = [];

  Object.entries(translation).forEach(([key, value]) => {
    if (typeof value === 'object') {
      missing = missing.concat(findMissing(value, [...namespaces, key]));
    }

    if (value === '__STRING_NOT_TRANSLATED__') {
      const path = namespaces.length ? namespaces.join('.') + '.' : '';
      missing.push(`${path}${key}=${value}`);
    }
  });

  return missing;
};

const checkTranslations = async () => {
  const files = await glob('../src/translations/locales/**/translation.json');
  const oldHashes = await getTranslationHashes(files);
  spawnSync('yarn', ['translations:collect']);
  const newHashes = await getTranslationHashes(files);

  if (detectChanges(oldHashes, newHashes)) {
    throw new Error(
      `Translations are not up to date,
        run "yarn translations:collect" and commit changes.`,
    );
  }

  const translations = await Promise.all(files.map(t => fse.readJson(t)));
  const errors = translations.reduce((memo, translation, i) => {
    const missing = findMissing(translation);

    return missing.length
      ? `${memo}\n\n${files[i]}\n${missing.join('\n')}`
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
  e => {
    console.log('Fail:', e);
    process.exit(1);
  },
);
