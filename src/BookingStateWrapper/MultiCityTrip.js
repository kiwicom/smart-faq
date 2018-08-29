// @flow
import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import BookingStateProvider from '../context/BookingState';
import MultiCityTripWrapper_booking from './__generated__/MultiCityTripWrapper_booking.graphql';

type Props = {
  children: React.Node,
  +booking: MultiCityTripWrapper_booking,
};

const MultiCityTrip = ({ children, booking }: Props) => (
  <BookingStateProvider
    hasBooking
    isPastBooking={booking.isPastBooking}
    departureTime={idx(booking, _ => _.trips[0].departure.time)}
    booking={{ props: booking, error: null }}
  >
    {children}
  </BookingStateProvider>
);

export default createFragmentContainer(
  MultiCityTrip,
  graphql`
    fragment MultiCityTripWrapper_booking on BookingMulticity {
      isPastBooking
      databaseId
      trips @relay(plural: true) {
        departure {
          time
        }
      }
    }
  `,
);
