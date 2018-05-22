// @flow
import * as React from 'react';
import { shallow } from 'enzyme';

import ForgottenPasword from '../index';

describe('ForgottenPasword', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
  };
  const e = {
    preventDefault: jest.fn(),
  };

  const wrapper = shallow(<ForgottenPasword {...props} />);
  it('should change state', () => {
    const ForgottPassword = wrapper.instance();
    const state = ForgottPassword.state;
    expect(state).toEqual({ email: '' });

    ForgottPassword.handleChangeEmail({
      target: {
        value: 'email@kiwi.com',
      },
    });

    expect(ForgottPassword.state).toEqual({ email: 'email@kiwi.com' });
  });

  it('should handle email submission', async () => {
    const ForgottPassword = wrapper.instance();
    await ForgottPassword.handleSubmitEmail(e);

    expect(e.preventDefault.mock.calls).toHaveLength(1);
    expect(ForgottPassword.props.history.push.mock.calls[0][0]).toEqual({
      pathname: '/check-recovery-link',
      state: { email: 'email@kiwi.com' },
    });
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
