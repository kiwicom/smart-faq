// @noflow
/* global jsdom */
import * as React from 'react';
import { mount } from 'enzyme';

import BookingStateProvider from '../../../context/BookingState';
import { SelectUrlBooking } from '../urlProcessing';

describe('UrlProcessing', () => {
  it('should parse the url and return it as selected', () => {
    const selectedBooking = jest.fn();

    jsdom.reconfigure({
      url: 'https://www.kiwi.com/en/account/bookings/6372221?help=%2F',
    });

    mount(
      <BookingStateProvider>
        <SelectUrlBooking setSelected={selectedBooking} />
      </BookingStateProvider>,
    );

    expect(selectedBooking.mock.calls).toHaveLength(1);
    expect(selectedBooking.mock.calls[0][0]).toBe('6372221');
  });

  it('should not call selectedBooking because url is not valid', () => {
    const selectedBooking = jest.fn();

    jsdom.reconfigure({
      url: 'https://www.airplane.com/bookings/6372221?help=%2F',
    });

    mount(
      <BookingStateProvider>
        <SelectUrlBooking setSelected={selectedBooking} />
      </BookingStateProvider>,
    );

    expect(selectedBooking.mock.calls).toHaveLength(0);
  });
});
