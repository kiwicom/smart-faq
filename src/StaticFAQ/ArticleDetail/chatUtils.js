// @flow

import idx from 'idx';

import type {
  ChatConfig,
  GuaranteeChatBookingInfo,
} from '../../context/GuaranteeChatInfo';

type WebchatInstance = {
  getConfig: () => {
    setData: Object => void,
  },
};

export const initialize = async (chatConfig: ChatConfig) => {
  const guid = idx(chatConfig, _ => _.CHAT_GUID);
  const deploymentKey = idx(chatConfig, _ => _.CHAT_DEPLOYMENT_KEY);
  const orgId = idx(chatConfig, _ => _.CHAT_ORG_ID);
  const queueName = idx(chatConfig, _ => _.CHAT_QUEUE_NAME);

  if (!(guid && deploymentKey && orgId && queueName)) {
    throw new Error(
      'Secrets guid, deploymentKey, orgId or queueName for Guarantee chat not provided.',
    );
  }

  await injectScript(guid, deploymentKey);

  /*
      Purecloud weirdness:
      - if chat wasn't initialized, initialize it
      - if chat was already rendered, it needs to be reinitialized again too
     */
  if (!window.webchat || window.webchat.isChatRendered()) {
    // required by Purecloud for reconnect
    window.PURECLOUD_WEBCHAT_FRAME_CONFIG = {
      containerEl: 'smartFAQGuarantee',
    };
    const chatConfiguration = getConfig(orgId, queueName);
    window.webchat = await window.ININ.webchat.create(chatConfiguration);
  }
};

export const setData = (
  webchat: WebchatInstance,
  guaranteeChatBookingInfo: ?GuaranteeChatBookingInfo,
) => {
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

  webchat.getConfig().setData({
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
  });
};

const injectScript = (
  guid: string,
  deploymentKey: string,
): Promise<boolean> => {
  const body = document && document.body;

  if (!body) {
    return Promise.reject(new Error('Unexpected: no DOM body present.'));
  }

  if (document.getElementById('purecloud-webchat-js')) {
    return Promise.resolve(false);
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = 'https://apps.mypurecloud.com/webchat/jsapi-v1.js';
    script.id = 'purecloud-webchat-js';
    script.setAttribute('region', 'eu-west-1');
    script.setAttribute('org-guid', guid);
    script.setAttribute('deployment-key', deploymentKey);
    script.onload = () => {
      if (!window.ININ) {
        reject(new Error('Purecloud chat script not loaded successfully.'));
        return;
      }

      resolve(true);
    };
    script.onerror = () => reject(false);

    body.appendChild(script);
  });
};

const getConfig = (orgId: string, queueName: string) => {
  const kiwiLogo = {
    width: 48,
    height: 40,
    url: 'https://images.kiwi.com/whitelabels/0x40/kiwicom-mobile.png',
  };

  return {
    webchatAppUrl: 'https://apps.mypurecloud.ie/webchat',
    webchatServiceUrl: 'https://realtime.mypurecloud.ie:443',
    orgId,
    orgName: 'kiwicom',
    queueName,
    logLevel: process.env.NODE_ENV === 'development' ? 'DEBUG' : 'INFO',
    locale: 'en',
    reconnectEnabled: true,
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
