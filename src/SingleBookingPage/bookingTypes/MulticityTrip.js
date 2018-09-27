// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import AccordionTitle from '../bookingItem/AccordionTitle';
import Accordion from '../bookingItem/Accordion';
import type { MulticityTrip_booking } from './__generated__/MulticityTrip_booking.graphql';

type Props = {|
  booking: MulticityTrip_booking,
|};

const MulticityTrip = ({ booking }: Props) => (
  <div>
    <AccordionTitle
      title={__('smartfaq.single_booking_page.return_trip.trips')}
    />
    {Array.isArray(booking.trips) &&
      booking.trips.map((trip, i) => (
        //eslint-disable-next-line react/no-array-index-key
        <Accordion key={i} trip={trip} />
      ))}
  </div>
);

export default createFragmentContainer(
  MulticityTrip,
  graphql`
    fragment MulticityTrip_booking on BookingMulticity {
      trips @relay(plural: true) {
        ...AccordionTripSummary_trip
      }
    }
  `,
);
