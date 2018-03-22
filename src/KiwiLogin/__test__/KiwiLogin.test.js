// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import KiwiLogin from '../';

describe('KiwiLogin', () => {
  const component = shallow(<KiwiLogin />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
