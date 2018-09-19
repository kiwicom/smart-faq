// @noflow
/* eslint-disable import/no-extraneous-dependencies  */

require('dotenv').load();

module.exports = {
  testEnvironment: 'jest-environment-jsdom-global',
  setupFiles: [
    'raf/polyfill',
    '<rootDir>/config/enzymeConfig.js',
    '<rootDir>/config/jestGlobals.js',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js?(x)',
    '<rootDir>/src/**/?(*.)+(spec|test).js?(x)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/*.ignore.js'],
};
