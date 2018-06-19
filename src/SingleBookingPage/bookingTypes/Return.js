// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import TripTitle from '../bookingItem/AccordionTitle';
import Accordion from '../bookingItem/Accordion';
import type { Return_booking } from './__generated__/Return_booking.graphql';

type Props = {
  booking: Return_booking,
};

const Return = (props: Props) => (
  <div>
    <TripTitle title="Outbound" />
    <Accordion trip={props.booking.outbound} />
    <TripTitle title="Return" />
    <Accordion trip={props.booking.inbound} />
  </div>
);

export default createFragmentContainer(
  Return,
  graphql`
    fragment Return_booking on BookingReturn {
      outbound {
        ...AccordionTripSummary_trip
      }
      inbound {
        ...AccordionTripSummary_trip
      }
    }
  `,
);
