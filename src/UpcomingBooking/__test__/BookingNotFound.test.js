// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import BookingNotFound from '../BookingNotFound';

describe('BookingNotFound', () => {
  const component = shallow(<BookingNotFound />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
