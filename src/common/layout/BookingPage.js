// @flow

import * as React from 'react';

import AllBooking from '../../AllBookings';
import NearestBooking from '../../SingleBookingPage/NearestBooking';
import SelectedBooking from '../../SingleBookingPage/SelectedBooking';

type Props = {
  bookingPage: 'SINGLE_BOOKING' | 'ALL_BOOKINGS',
  selectedBooking: ?number,
};

const BookingPage = ({ bookingPage, selectedBooking }: Props) => {
  if (bookingPage === 'SINGLE_BOOKING') {
    if (selectedBooking) {
      return <SelectedBooking bookingId={selectedBooking} />;
    }

    return <NearestBooking />;
  }

  return <AllBooking />;
};

export default BookingPage;
