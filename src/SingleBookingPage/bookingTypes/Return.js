// @flow

import * as React from 'react';

import TripTitle from '../bookingItem/AccordionTitle';
import Accordion from '../bookingItem/Accordion';
import type { BasicBookingDataFields } from '../../types';

type Props = {
  booking: BasicBookingDataFields,
};

const Return = (props: Props) => (
  <div>
    <TripTitle title="Outbound" />
    <Accordion trip={props.booking.outbound} />
    <TripTitle title="Return" />
    <Accordion trip={props.booking.inbound} />
  </div>
);

export default Return;
