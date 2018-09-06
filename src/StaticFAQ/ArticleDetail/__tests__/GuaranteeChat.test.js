// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from '@kiwicom/orbit-components';

import { UnwrappedGuaranteeChat as GuaranteeChat } from '../GuaranteeChat';

global.ININ = {
  webchat: {
    create: jest.fn(),
  },
};

const chatConfig = {
  CHAT_GUID: '1234',
  CHAT_DEPLOYMENT_KEY: 'XXX',
  CHAT_ORG_ID: 'XYZ',
  CHAT_QUEUE_NAME: 'QWERTY',
};

describe('GuaranteeChat', () => {
  it('shows button by default', () => {
    const wrapper = shallow(
      <GuaranteeChat guaranteeChatBookingInfo={null} chatConfig={chatConfig} />,
    );

    expect(wrapper.find(Button).exists()).toBeTruthy();
  });

  it('starts chat when clicking on button', () => {
    const wrapper = shallow(
      <GuaranteeChat guaranteeChatBookingInfo={null} chatConfig={chatConfig} />,
    );

    wrapper.find(Button).simulate('click');

    expect(wrapper.find(Button).exists()).toBeFalsy();
    expect(global.ININ.webchat.create).toBeCalled();
  });

  it('inserts purecloud script into DOM', () => {
    shallow(
      <GuaranteeChat guaranteeChatBookingInfo={null} chatConfig={chatConfig} />,
    );

    expect(document.getElementById('purecloud-webchat-js')).toBeTruthy();
  });
});
