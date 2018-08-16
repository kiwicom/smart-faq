// @flow
import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import BookingStateProvider from '../context/BookingState';
import HasBooking_booking from './__generated__/HasBooking_booking.graphql';

type Props = {
  children: React.Node,
  +booking: HasBooking_booking,
};

const OneWayTrip = ({ children, booking }: Props) => (
  <BookingStateProvider
    hasBooking
    isPastBooking={booking.isPastBooking}
    isUrgent={false /*fixme*/}
    onLogout={async () => null}
  >
    {children}
  </BookingStateProvider>
);

export default createFragmentContainer(
  OneWayTrip,
  graphql`
    fragment OneWayTripWrapper_booking on BookingOneWay {
      trip {
        departure {
          time
        }
      }
    }
  `,
);
