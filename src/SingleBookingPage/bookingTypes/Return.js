// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { simpleTracker } from '../../helpers/analytics/trackers';
import TripTitle from '../bookingItem/AccordionTitle';
import Accordion from '../bookingItem/Accordion';
import type { Return_booking } from './__generated__/Return_booking.graphql';

type Props = {
  booking: Return_booking,
};

const Return = (props: Props) => (
  <div>
    <TripTitle title="Outbound" />
    <div
      onKeyUp={null}
      role="button"
      tabIndex="-1"
      style={{ outline: 'none' }}
      onClick={simpleTracker('smartFAQBookingOverview', {
        action: 'openFlightCard',
      })}
    >
      <Accordion trip={props.booking.outbound} />
    </div>
    <TripTitle title="Return" />
    <div
      onKeyUp={null}
      role="button"
      tabIndex="-1"
      style={{ outline: 'none' }}
      onClick={simpleTracker('smartFAQBookingOverview', {
        action: 'openFlightCard',
      })}
    >
      <Accordion trip={props.booking.inbound} />
    </div>
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
