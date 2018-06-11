// @flow

import parse from 'url-parse';

const replaceDomain = (URL: string, domain: string) => {
  const parsed = parse(URL);
  return `${domain}${parsed.pathname}`;
};

export default replaceDomain;
