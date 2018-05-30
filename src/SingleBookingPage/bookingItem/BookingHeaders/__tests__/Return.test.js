// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import { RawReturnBookingHeader } from '../Return';

describe('ReturnBookingHeader', () => {
  const mockRefType: any = null;

  const bookingHeader = {
    outbound: {
      arrival: {
        airport: {
          city: {
            name: 'Milan',
          },
        },
      },
      departure: {
        airport: {
          city: {
            name: 'Prague',
          },
        },
      },
    },
    $refType: mockRefType,
  };

  it('should display the city names in right order > "From" to "to" and back', () => {
    const wrapper = shallow(
      <RawReturnBookingHeader bookingHeader={bookingHeader} />,
    );
    expect(wrapper.text()).toEqual('Prague to Milan and back');
  });
});
