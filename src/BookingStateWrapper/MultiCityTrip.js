// @flow
import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

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
    isUrgent={false /*fixme*/}
    onLogout={async () => null}
  >
    {children}
  </BookingStateProvider>
);

export default createFragmentContainer(
  MultiCityTrip,
  graphql`
    fragment MultiCityTripWrapper_booking on BookingMulticity {
      trips @relay(plural: true) {
        departure {
          time
        }
      }
    }
  `,
);
