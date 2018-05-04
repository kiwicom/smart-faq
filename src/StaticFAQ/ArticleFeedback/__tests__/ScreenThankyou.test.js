// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import ScreenThankyou from '../ScreenThankyou';

describe('SignIn', () => {
  const component = shallow(<ScreenThankyou />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
