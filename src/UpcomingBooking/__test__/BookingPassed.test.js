// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import BookingPassed from '../BookingPassed';

describe('BookingPassed', () => {
  const component = shallow(<BookingPassed />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
