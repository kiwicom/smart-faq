// @flow
import * as React from 'react';
import { shallow } from 'enzyme';

import ForgottenPasword from '../index';

jest.mock('../../mutations/ResetPassword');

describe('ForgottenPassword', () => {
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
    const ForgottenPasswordIns = wrapper.instance();
    const state = ForgottenPasswordIns.state;
    expect(state).toEqual({ email: '' });

    ForgottenPasswordIns.handleChangeEmail({
      target: {
        value: 'email@kiwi.com',
      },
    });

    expect(ForgottenPasswordIns.state).toEqual({ email: 'email@kiwi.com' });
  });

  it('should handle email submission', async () => {
    const ForgottenPasswordIns = wrapper.instance();
    await ForgottenPasswordIns.handleSubmitEmail(e);

    expect(e.preventDefault.mock.calls).toHaveLength(1);
    expect(ForgottenPasswordIns.props.history.push.mock.calls[0][0]).toEqual({
      pathname: '/check-recovery-link',
      state: { email: 'email@kiwi.com' },
    });
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
