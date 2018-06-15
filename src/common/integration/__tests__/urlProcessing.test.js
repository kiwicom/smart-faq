// @noflow
/* global jsdom */
import * as React from 'react';
import { mount } from 'enzyme';

import BookingHelper from './helpers/BookingProvider.ignore';
import { SelectUrlBooking } from '../urlProcessing';

describe('UrlProcessing', () => {
  it('should parse the url and return it as selected', () => {
    const selectedBooking = jest.fn();

    jsdom.reconfigure({
      url: 'https://www.kiwi.com/en/account/bookings/6372221?help=%2F',
    });

    mount(
      <BookingHelper>
        <SelectUrlBooking setSelected={selectedBooking} />
      </BookingHelper>,
    );

    expect(selectedBooking.mock.calls).toHaveLength(1);
    expect(selectedBooking.mock.calls[0][0]).toBe('6372221');
  });
});
