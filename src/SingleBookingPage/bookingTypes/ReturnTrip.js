// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import TripTitle from '../bookingItem/AccordionTitle';
import Accordion from '../bookingItem/Accordion';
import type { ReturnTrip_booking } from './__generated__/ReturnTrip_booking.graphql';

type Props = {
  booking: ReturnTrip_booking,
};

const ReturnTrip = (props: Props) => (
  <div>
    <TripTitle
      title={__('smartfaq.single_booking_page.return_trip.outbound')}
    />
    <Accordion trip={props.booking.outbound} />
    <TripTitle title={__('smartfaq.single_booking_page.return_trip.inbound')} />
    <Accordion trip={props.booking.inbound} />
  </div>
);

export default createFragmentContainer(
  ReturnTrip,
  graphql`
    fragment ReturnTrip_booking on BookingReturn {
      outbound {
        ...AccordionTripSummary_trip
      }
      inbound {
        ...AccordionTripSummary_trip
      }
    }
  `,
);
