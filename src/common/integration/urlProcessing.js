// @flow

import * as React from 'react';

import { BookingState } from '../../context/BookingState';

export const selectUrlBooking = (ComponentToWrap: React.ComponentType<any>) => {
  const urlMatch = window.location.href.match(
    /.*[kiwi.com|localhost:\d*]\/.*\/account\/bookings\/(\d*)$/,
  );
  const bookingId = urlMatch && urlMatch[1];
  const WrappedComponent = (props: any) => (
    <BookingState.Consumer>
      {({ onSelectBooking }) => {
        bookingId && onSelectBooking(bookingId);
        return <ComponentToWrap {...props} />;
      }}
    </BookingState.Consumer>
  );
  return WrappedComponent;
};
