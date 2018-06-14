// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { simpleTracker } from '../../helpers/analytics/trackers';
import AccordionTitle from '../bookingItem/AccordionTitle';
import Accordion from '../bookingItem/Accordion';
import type { Multicity_booking } from './__generated__/Multicity_booking.graphql';

type Props = {|
  booking: Multicity_booking,
|};

const Multicity = ({ booking }: Props) => (
  <div>
    <AccordionTitle title="Trips" />
    {Array.isArray(booking.trips) &&
      booking.trips.map((trip, i) => (
        <div
          key={i} //eslint-disable-line react/no-array-index-key
          onKeyUp={null}
          role="button"
          tabIndex="-1"
          style={{ outline: 'none' }}
          onClick={simpleTracker('smartFAQBookingOverview', {
            action: 'openFlightCard',
          })}
        >
          <Accordion trip={trip} />{' '}
        </div>
      ))}
  </div>
);

export default createFragmentContainer(
  Multicity,
  graphql`
    fragment Multicity_booking on BookingMulticity {
      trips @relay(plural: true) {
        ...AccordionTripSummary_trip
      }
    }
  `,
);
