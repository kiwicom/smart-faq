// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { simpleTracker } from '../../helpers/analytics/trackers';
import AccordionTitle from '../bookingItem/AccordionTitle';
import Accordion from '../bookingItem/Accordion';
import type { OneWay_booking } from './__generated__/OneWay_booking.graphql';

type Props = {|
  booking: OneWay_booking,
|};

const OneWay = ({ booking }: Props) => (
  <div>
    <AccordionTitle title="Outbound" />
    <div
      onKeyUp={null}
      role="button"
      tabIndex="-1"
      style={{ outline: 'none' }}
      onClick={simpleTracker('smartFAQBookingOverview', {
        action: 'openFlightCard',
      })}
    >
      <Accordion trip={booking.trip} />
    </div>
  </div>
);

export default createFragmentContainer(
  OneWay,
  graphql`
    fragment OneWay_booking on BookingOneWay {
      trip {
        ...AccordionTripSummary_trip
      }
    }
  `,
);
