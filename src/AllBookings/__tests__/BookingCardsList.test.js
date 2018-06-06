// @flow
import * as React from 'react';
import { shallow } from 'enzyme';

import { RawBookingCardsList } from '../BookingCardsList';

const mockRefType: any = null;
describe('RawBookingCardsList', () => {
  it('no bookings in list', () => {
    const booking = {
      edges: [],
      $refType: mockRefType,
    };
    const result = shallow(
      <RawBookingCardsList title="Example" booking={booking} />,
    );
    expect(result).toMatchSnapshot();
  });

  it('bookings in list', () => {
    const booking = {
      edges: [{
        node: null,
      }],
      $refType: mockRefType,
    };
    const result = shallow(
      <RawBookingCardsList title="Example" booking={booking} />,
    );
    expect(result).toMatchSnapshot();
  });
});
