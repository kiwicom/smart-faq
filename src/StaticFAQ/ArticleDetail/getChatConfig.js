// @flow

type Config = {|
  orgId: string,
  queueName: string,
|};

export default ({ orgId, queueName }: Config) => ({
  webchatAppUrl: 'https://apps.mypurecloud.ie/webchat',
  webchatServiceUrl: 'https://realtime.mypurecloud.ie:443',
  orgId,
  orgName: 'kiwicom',
  queueName,
  logLevel: process.env.NODE_ENV === 'development' ? 'DEBUG' : 'INFO',
  locale: 'en',
  data: {
    firstName: 'Michal',
    lastName: 'Test',
    addressStreet: '',
    addressCity: '',
    addressPostalCode: '',
    addressState: '',
    phoneNumber: '',
    customField1Label: '',
    customField1: '',
    customField2Label: '',
    customField2: '',
    customField3Label: '',
    customField3: '',
  },
  companyLogo: {
    width: 600,
    height: 149,
    url:
      'https://d3a63qt71m2kua.cloudfront.net/developer-tools/937/assets/images/PC-blue-nomark.png',
  },
  companyLogoSmall: {
    width: 25,
    height: 25,
    url:
      'https://d3a63qt71m2kua.cloudfront.net/developer-tools/937/assets/images/companylogo.png',
  },
  agentAvatar: {
    width: 462,
    height: 462,
    url:
      'https://d3a63qt71m2kua.cloudfront.net/developer-tools/937/assets/images/agent.jpg',
  },
  welcomeMessage: 'Thanks for chatting with us.',
  cssClass: 'webchat-frame',
  css: {
    width: '100%',
    height: '100%',
  },
});
