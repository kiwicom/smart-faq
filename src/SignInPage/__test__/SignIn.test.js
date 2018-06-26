// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import SignIn from '../index';

const onSocialLogin = jest.fn();

describe('SignIn', () => {
  it('should match snapshot', () => {
    const component = shallow(<SignIn onSocialLogin={onSocialLogin} />);
    expect(component).toMatchSnapshot();
  });
  it('should match snapshot with expired message', () => {
    const component = shallow(
      <SignIn
        location={{ state: { sessionExpired: true } }}
        onSocialLogin={onSocialLogin}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
