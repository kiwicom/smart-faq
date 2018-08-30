// @flow

import * as React from 'react';

import AccordionTitle from '../bookingItem/AccordionTitle';
import Accordion from '../bookingItem/Accordion';
import type { BasicBookingDataFields } from '../../types';

type Props = {|
  booking: BasicBookingDataFields,
|};

const OneWay = ({ booking }: Props) => (
  <div>
    <AccordionTitle title="Outbound" />
    <Accordion trip={booking.trip} />
  </div>
);

export default OneWay;
