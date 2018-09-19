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
const setData = jest.fn();
global.webchat = {
  getConfig: jest.fn(() => ({
    setData,
  })),
  renderFrame: jest.fn(),
  isChatRendered: () => true,
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
      <GuaranteeChat
        guaranteeChatBookingInfo={null}
        chatConfig={chatConfig}
        onAppWithOpenChatClose={jest.fn()}
      />,
    );

    expect(wrapper.find(Button).exists()).toBeTruthy();
  });

  it('starts chat when clicking on button', () => {
    const onAppWithOpenChatClose = jest.fn();
    const wrapper = shallow(
      <GuaranteeChat
        guaranteeChatBookingInfo={null}
        chatConfig={chatConfig}
        onAppWithOpenChatClose={onAppWithOpenChatClose}
      />,
    );

    wrapper.find(Button).simulate('click');

    expect(wrapper.find(Button).exists()).toBeFalsy();
    expect(setData).toBeCalled();
    expect(onAppWithOpenChatClose).toBeCalled();
  });

  it('inserts purecloud script into DOM', () => {
    shallow(
      <GuaranteeChat
        guaranteeChatBookingInfo={null}
        chatConfig={chatConfig}
        onAppWithOpenChatClose={jest.fn()}
      />,
    );

    expect(document.getElementById('purecloud-webchat-js')).toBeTruthy();
  });
});
