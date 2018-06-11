// @flow

import { replaceDomain } from '../replaceWithCurrentDomain';

const testCases = [
  ['https://example.com', 'https://domain.net', 'https://domain.net/'],
  ['https://example.com', 'https://domain2.org', 'https://domain2.org/'],
  ['https://kiwi.com/asdg/4/', 'https://kiwi.org', 'https://kiwi.org/asdg/4/'],
];

describe('replaceDomain', () => {
  testCases.forEach(([URL, domain, result]) => {
    it(`replaceDomain(${URL}, ${domain})`, () => {
      expect(replaceDomain(URL, domain)).toEqual(result);
    });
  });
});
