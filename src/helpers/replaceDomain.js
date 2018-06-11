import parse from 'url-parse';

const replaceDomain = (URL, domain) => {
  const parsed = parse(URL);
  return `${domain}${parsed.pathname}`;
};

export default replaceDomain;
