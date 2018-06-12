// @flow

import { replaceDomain } from '../replaceWithCurrentDomain';

const URL = 'https://kiwi.com/asdg/4/';
const domain = 'https://kiwi.org';
const result = 'https://kiwi.org/asdg/4/';

describe('replaceDomain', () => {
  it(`replaceDomain(${URL}, ${domain})`, () => {
    expect(replaceDomain(URL, domain)).toEqual(result);
  });
});
