// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

type Props = {|
  booking: any,
|};

const OneWayTrip = ({ booking }: Props) => (
  <div>
    <div>{booking.trip}</div>
  </div>
);

export default createFragmentContainer(
  OneWayTrip,
  graphql`
    fragment OneWayTrip_booking on BookingOneWay {
      trip {
        ...AccordionTripSummary_trip
      }
    }
  `,
);
