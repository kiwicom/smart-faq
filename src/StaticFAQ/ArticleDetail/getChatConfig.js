// @flow

import idx from 'idx';

import type { GuaranteeChatBookingInfo } from '../../context/GuaranteeChatInfo';

type Config = {|
  orgId: string,
  queueName: string,
  guaranteeChatBookingInfo: ?GuaranteeChatBookingInfo,
|};

const kiwiLogo = {
  width: 48,
  height: 40,
  url: 'https://images.kiwi.com/whitelabels/0x40/kiwicom-mobile.png',
};

export default ({ orgId, queueName, guaranteeChatBookingInfo }: Config) => {
  const bid = idx(guaranteeChatBookingInfo, _ => _.bid) || null;
  const status = idx(guaranteeChatBookingInfo, _ => _.status) || null;
  const departureCity =
    idx(guaranteeChatBookingInfo, _ => _.departureCity) || '';
  const departureAirport =
    idx(guaranteeChatBookingInfo, _ => _.departureAirport) || '';
  const arrivalCity = idx(guaranteeChatBookingInfo, _ => _.arrivalCity) || '';
  const arrivalAirport =
    idx(guaranteeChatBookingInfo, _ => _.arrivalAirport) || '';
  const phone = idx(guaranteeChatBookingInfo, _ => _.phone) || '';
  const email = idx(guaranteeChatBookingInfo, _ => _.email) || '';
  const firstName = idx(guaranteeChatBookingInfo, _ => _.firstName) || '';
  const lastName = idx(guaranteeChatBookingInfo, _ => _.lastName) || '';

  return {
    webchatAppUrl: 'https://apps.mypurecloud.ie/webchat',
    webchatServiceUrl: 'https://realtime.mypurecloud.ie:443',
    orgId,
    orgName: 'kiwicom',
    queueName,
    logLevel: process.env.NODE_ENV === 'development' ? 'DEBUG' : 'INFO',
    locale: 'en',
    data: {
      firstName,
      lastName,
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
    companyLogoSmall: kiwiLogo,
    agentAvatar: kiwiLogo,
    welcomeMessage: 'Thanks for chatting with us.',
    cssClass: 'webchat-frame',
    css: {
      width: '100%',
      height: '100%',
    },
  };
};
