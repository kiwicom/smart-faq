// @noflow
/* global jsdom */
import * as React from 'react';
import { mount } from 'enzyme';

import { BookingState } from '../../../context/BookingState';
import { SelectUrlBooking } from '../urlProcessing';

describe('UrlProcessing', () => {
  it('should parse the url and return it as selected', () => {
    const selectedBooking = jest.fn();
    const onSelectBooking = jest.fn();

    jsdom.reconfigure({
      url: 'https://www.kiwi.com/en/account/bookings/6372221?help=%2F',
    });

    mount(
      <BookingState.Provider
        value={{
          onSelectBooking,
        }}
      >
        <SelectUrlBooking setSelected={selectedBooking} />
      </BookingState.Provider>,
    );

    expect(selectedBooking.mock.calls).toHaveLength(1);
    expect(onSelectBooking.mock.calls).toHaveLength(1);
    expect(selectedBooking.mock.calls[0][0]).toBe(6372221);
    expect(onSelectBooking.mock.calls[0][0]).toBe(6372221);
  });

  it('should not call selectedBooking because url is not valid', () => {
    const selectedBooking = jest.fn();
    const onSelectBooking = jest.fn();

    jsdom.reconfigure({
      url: 'https://www.airplane.com/bookings/6372221?help=%2F',
    });

    mount(
      <BookingState.Provider
        value={{
          onSelectBooking,
        }}
      >
        <SelectUrlBooking setSelected={selectedBooking} />
      </BookingState.Provider>,
    );

    expect(selectedBooking.mock.calls).toHaveLength(0);
    expect(onSelectBooking.mock.calls).toHaveLength(0);
  });
});
