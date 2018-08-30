// @flow

import * as React from 'react';

import AllBooking from '../../AllBookings';
import Booking from '../../SingleBookingPage/Booking';

type Props = {
  bookingPage: 'SINGLE_BOOKING' | 'ALL_BOOKINGS',
};

const BookingPage = ({ bookingPage }: Props) => {
  if (bookingPage === 'SINGLE_BOOKING') {
    return <Booking />;
  }

  return <AllBooking />;
};

export default BookingPage;
