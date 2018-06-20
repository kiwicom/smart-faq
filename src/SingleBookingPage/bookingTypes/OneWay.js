// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import AccordionTitle from '../bookingItem/AccordionTitle';
import Accordion from '../bookingItem/Accordion';
import type { OneWay_booking } from './__generated__/OneWay_booking.graphql';

type Props = {|
  booking: OneWay_booking,
|};

const OneWay = ({ booking }: Props) => (
  <div>
    <AccordionTitle title="Outbound" />
    <Accordion trip={booking.trip} />
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
