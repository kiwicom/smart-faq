// @flow
import * as React from 'react';
import { shallow } from 'enzyme';

import { RawKiwiLogin } from '../index';
import { defaultToken, defaultUserId } from '../../../__mocks__/constants';

describe('KiwiLogin', () => {
  const props = {
    onLogin: async () => ({
      user_id: defaultUserId,
      token: defaultToken,
    }),
    history: {
      push: jest.fn(),
    },
  };
  const e = {
    preventDefault: jest.fn(),
  };

  const wrapper = shallow(<RawKiwiLogin {...props} />);
  it('should change state', () => {
    const Login = wrapper.instance();
    const state = Login.state;
    expect(state).toEqual({ email: '', password: '', showError: false });

    wrapper.find(`[type="email"]`).simulate('change', {
      target: { name: 'email', value: 'email@kiwi.com' },
    });
    wrapper.find(`[type="password"]`).simulate('change', {
      target: { name: 'password', value: 'myRealPassword' },
    });

    expect(Login.state).toMatchSnapshot();
  });

  it('should handle sign in', async () => {
    const Login = wrapper.instance();
    await Login.handleSignIn(e);
    expect(e.preventDefault.mock.calls).toHaveLength(1);
    expect(Login.props.history.push.mock.calls[0][0]).toBe('/faq/');
  });

  it('should handle error in sign in', async () => {
    const errorProps = {
      history: {
        push: jest.fn(),
      },
      onLogin: () => new Promise((resolve, reject) => reject()),
    };

    const LoginWrapper = shallow(<RawKiwiLogin {...errorProps} />);
    const Login = LoginWrapper.instance();
    expect(Login.state.showError).toBe(false);

    await Login.handleSignIn(e);

    expect(Login.props.history.push.mock.calls).toHaveLength(0);
    expect(Login.state.showError).toBe(true);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
