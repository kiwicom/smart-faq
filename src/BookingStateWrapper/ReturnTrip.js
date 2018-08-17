// @flow
import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import BookingStateProvider from '../context/BookingState';
import ReturnTripWrapper_booking from './__generated__/ReturnTripWrapper_booking.graphql';

type Props = {
  children: React.Node,
  +booking: ReturnTripWrapper_booking,
};

const ReturnTrip = ({ children, booking }: Props) => (
  <BookingStateProvider
    hasBooking
    isPastBooking={booking.isPastBooking}
    departureTime={idx(booking, _ => _.outbound.departure.time)}
    onLogout={async () => null}
  >
    {children}
  </BookingStateProvider>
);

export default createFragmentContainer(
  ReturnTrip,
  graphql`
    fragment ReturnTripWrapper_booking on BookingReturn {
      isPastBooking
      outbound {
        departure {
          time
        }
      }
    }
  `,
);
