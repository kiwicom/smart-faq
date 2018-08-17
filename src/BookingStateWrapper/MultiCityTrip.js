// @flow
import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import BookingStateProvider from '../context/BookingState';
import HasBooking_booking from './__generated__/HasBooking_booking.graphql';

type Props = {
  children: React.Node,
  +booking: HasBooking_booking,
};

const MultiCityTrip = ({ children, booking }: Props) => (
  <BookingStateProvider
    hasBooking
    isPastBooking={booking.isPastBooking}
    departureTime={idx(booking, _ => _.trips[0].departure.time)}
    onLogout={async () => null}
  >
    {children}
  </BookingStateProvider>
);

export default createFragmentContainer(
  MultiCityTrip,
  graphql`
    fragment MultiCityTripWrapper_booking on BookingMulticity {
      isPastBooking
      trips @relay(plural: true) {
        departure {
          time
        }
      }
    }
  `,
);
