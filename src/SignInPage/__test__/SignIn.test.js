// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import SignIn from '../';

const history = {
  push: () => {},
};
describe('SignIn', () => {
  it('should match snapshot', () => {
    const component = shallow(<SignIn history={history} />);
    expect(component).toMatchSnapshot();
  });
  it('should match snapshot with expired message', () => {
    const component = shallow(
      <SignIn
        history={history}
        location={{ state: { sessionExpired: true } }}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
