// @flow
import * as React from 'react';
import { shallow } from 'enzyme';

import { RawBookingCardsList } from '../BookingCardsList';

describe('RawBookingCardsList', () => {
  it('no bookings in list', () => {
    const booking = {
      edges: [],
    };
    const result = shallow(
      <RawBookingCardsList title="Example" booking={booking} />,
    );
    expect(result).toMatchSnapshot();
  });
});
