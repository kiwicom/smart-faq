// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import AccordionTitle from '../bookingItem/AccordionTitle';
import Accordion from '../bookingItem/Accordion';
import type { OneWayTrip_booking } from './__generated__/OneWayTrip_booking.graphql';

type Props = {|
  booking: OneWayTrip_booking,
|};

const OneWayTrip = ({ booking }: Props) => (
  <div>
    <AccordionTitle title="Outbound" />
    <Accordion trip={booking.trip} />
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
