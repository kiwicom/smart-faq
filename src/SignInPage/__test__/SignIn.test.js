// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import SignIn from '../';

const history = {
  push: () => {},
};
describe('SignIn', () => {
  const component = shallow(<SignIn history={history} />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
