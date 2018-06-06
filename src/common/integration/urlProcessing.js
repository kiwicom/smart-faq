// @flow

import * as React from 'react';

import { BookingState } from '../../context/BookingState';

type Props = {
  wasSelected: boolean,
  setSelected: () => void,
};

const SelectUrlBooking = (props: Props) => {
  const urlMatch = window.location.href.match(
    /.*[kiwi.com|localhost:\d*]\/.*\/account\/bookings\/(\d*)\?.*$/,
  );
  const bookingId = urlMatch && urlMatch[1];
  const { wasSelected, setSelected } = props;
  return (
    <BookingState.Consumer>
      {({ onSelectBooking }) => {
        if (bookingId && !wasSelected) {
          onSelectBooking(bookingId);
          setSelected();
        }
        return null;
      }}
    </BookingState.Consumer>
  );
};

export { SelectUrlBooking };
