// @flow

export const replaceDomain = (link: string, domain: string) =>
  link.replace(/(https?:\/\/)[^/]+(.*)/, `${domain}$2`);

const replaceWithCurrentDomain = (url: string) =>
  replaceDomain(url, window.location.origin);

export default replaceWithCurrentDomain;
