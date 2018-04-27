// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import BookingError from '../BookingError';

describe('BookingError', () => {
  const component = shallow(<BookingError />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
