// @flow

export const replaceDomain = (link: string, domain: string) => {
  const parsed = new URL(link);
  return `${domain}${parsed.pathname}`;
};

const replaceWithCurrentDomain = (url: string) =>
  replaceDomain(url, window.location.origin);

export default replaceWithCurrentDomain;
