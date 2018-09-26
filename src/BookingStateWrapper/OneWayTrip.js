// @flow
import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import BookingStateProvider from '../context/BookingState';
import OneWayTripWrapper_booking from './__generated__/OneWayTripWrapper_booking.graphql';

type Props = {
  children: React.Node,
  +booking: OneWayTripWrapper_booking,
};

const OneWayTrip = ({ children, booking }: Props) => (
  <BookingStateProvider
    hasBooking
    isPastBooking={booking.isPastBooking}
    onLogout={async () => null}
    booking={booking}
    loadingStatus={{}}
  >
    {children}
  </BookingStateProvider>
);

export default createFragmentContainer(
  OneWayTrip,
  graphql`
    fragment OneWayTripWrapper_booking on BookingOneWay {
      isPastBooking
      ...MobileBookingDetail_booking
      ...BookingDetail_booking
      trip {
        departure {
          time
        }
      }
    }
  `,
);
