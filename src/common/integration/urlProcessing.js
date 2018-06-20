// @flow

import * as React from 'react';

import { BookingState } from '../../context/BookingState';

type Props = {
  wasSelected: boolean,
  setSelected: (bookingId: string) => void,
};

const SelectUrlBooking = (props: Props) => {
  const urlMatch = window.location.href.match(
    /.*[kiwi.com|localhost:\d*]\/.*\/account\/bookings\/(\d*)\?.*$/,
  );
  const bookingId = urlMatch && urlMatch[1];
  const { wasSelected, setSelected } = props;
  return (
    <BookingState.Consumer>
      {({ onSelectBooking, selectedBooking }) => {
        if (bookingId && bookingId !== selectedBooking && !wasSelected) {
          onSelectBooking(bookingId);
          setSelected(bookingId);
        }
        return null;
      }}
    </BookingState.Consumer>
  );
};

export { SelectUrlBooking };
