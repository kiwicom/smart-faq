// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from '@kiwicom/orbit-components';

import GuaranteeChat from '../GuaranteeChat';

global.ININ = {
  webchat: {
    create: jest.fn(),
  },
};

describe('GuaranteeChat', () => {
  it('shows button by default', () => {
    const wrapper = shallow(<GuaranteeChat />);

    expect(wrapper.find(Button).exists()).toBeTruthy();
  });

  it('starts chat when clicking on button', () => {
    const wrapper = shallow(<GuaranteeChat />);

    wrapper.find(Button).simulate('click');

    expect(wrapper.find(Button).exists()).toBeFalsy();
    expect(global.ININ.webchat.create).toBeCalled();
  });

  it('inserts purecloud script into DOM', () => {
    shallow(<GuaranteeChat />);

    expect(document.getElementById('purecloud-webchat-js')).toBeTruthy();
  });
});
