// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import SignIn from '../';

describe('SignIn', () => {
  const component = shallow(<SignIn history={{}} />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
