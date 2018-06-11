// @flow

const replaceDomain = (link: string, domain: string) => {
  const parsed = new URL(link);
  return `${domain}${parsed.pathname}`;
};

export default replaceDomain;
