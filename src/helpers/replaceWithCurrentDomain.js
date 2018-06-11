// @flow

import replaceDomain from './replaceDomain';

const replaceWithCurrentDomain = (url: string) =>
  replaceDomain(url, window.location.origin);

export default replaceWithCurrentDomain;
