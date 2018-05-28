// @flow

import * as React from 'react';

import AllBooking from '../../AllBookings';
import NearestBooking from '../../SingleBookingPage/NearestBooking';
import SelectedBooking from '../../SingleBookingPage/SelectedBooking';
import { type BookingStateProps } from '../../context/BookingState';

type Props = BookingStateProps;

class BookingPage extends React.PureComponent<Props> {
  render() {
    const { bookingPage, selectedBooking } = this.props;

    if (bookingPage === 'SINGLE_BOOKING') {
      if (selectedBooking) {
        return <SelectedBooking bookingId={selectedBooking} />;
      }

      return <NearestBooking />;
    }

    return <AllBooking />;
  }
}

export default BookingPage;
