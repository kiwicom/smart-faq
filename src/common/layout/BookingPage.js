// @flow

import * as React from 'react';

import AllBooking from '../../AllBookings';
import BookingDetail from '../../SingleBookingPage/BookingDetail';
import BookingLoader from '../../SingleBookingPage/BookingLoader';
import type { BookingType } from '../../types';

type Props = {
  bookingPage: 'SINGLE_BOOKING' | 'ALL_BOOKINGS',
  booking: ?BookingType,
};

const BookingPage = ({ bookingPage, booking }: Props) => {
  if (bookingPage === 'SINGLE_BOOKING') {
    if (!booking) {
      return <BookingLoader />;
    }
    return <BookingDetail booking={booking} />;
  }

  return <AllBooking />;
};

export default BookingPage;
