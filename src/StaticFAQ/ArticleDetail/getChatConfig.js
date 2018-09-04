// @flow

import idx from 'idx';

import type { GuaranteeChatBookingInfo } from '../../context/GuaranteeChatInfo';

type Config = {|
  orgId: string,
  queueName: string,
  guaranteeChatBookingInfo: ?GuaranteeChatBookingInfo,
|};

export default ({ orgId, queueName, guaranteeChatBookingInfo }: Config) => {
  const bid = idx(guaranteeChatBookingInfo, _ => _.bid) || null;
  const status = idx(guaranteeChatBookingInfo, _ => _.status) || null;
  const departureCity =
    idx(guaranteeChatBookingInfo, _ => _.departureCity) || '';
  const departureAirport =
    idx(guaranteeChatBookingInfo, _ => _.departureAirport) || '';
  const arrivalCity = idx(guaranteeChatBookingInfo, _ => _.arrivalCity) || '';
  const arrivalAirport =
    idx(guaranteeChatBookingInfo, _ => _.departureAirport) || '';
  const phone = idx(guaranteeChatBookingInfo, _ => _.phone) || '';
  const email = idx(guaranteeChatBookingInfo, _ => _.email) || '';

  return {
    webchatAppUrl: 'https://apps.mypurecloud.ie/webchat',
    webchatServiceUrl: 'https://realtime.mypurecloud.ie:443',
    orgId,
    orgName: 'kiwicom',
    queueName,
    logLevel: process.env.NODE_ENV === 'development' ? 'DEBUG' : 'INFO',
    locale: 'en',
    data: {
      firstName: '',
      lastName: '',
      addressStreet: '',
      addressCity: '',
      addressPostalCode: '',
      addressState: '',
      phoneNumber: phone,
      customField1Label: 'BID',
      customField1: bid,
      customField2Label: 'Departure',
      customField2: `${departureCity} (${departureAirport})`,
      customField3Label: 'Arrival',
      customField3: `${arrivalCity} (${arrivalAirport})`,
      bid,
      status,
      phone,
      email,
      departureCity,
      departureAirport,
      arrivalCity,
      arrivalAirport,
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
  };
};
