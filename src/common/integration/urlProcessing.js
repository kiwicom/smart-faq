// @flow

import * as React from 'react';

import { BookingState } from '../../context/BookingState';

const SelectUrlBooking = () => {
  const urlMatch = window.location.href.match(
    /.*[kiwi.com|localhost:\d*]\/.*\/account\/bookings\/(\d*)$/,
  );
  const bookingId = urlMatch && urlMatch[1];
  return (
    <BookingState.Consumer>
      {({ onSelectBooking }) => {
        bookingId && onSelectBooking(bookingId);
        return null;
      }}
    </BookingState.Consumer>
  );
};

export { SelectUrlBooking };
