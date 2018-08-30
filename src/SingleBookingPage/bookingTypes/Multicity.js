// @flow

import * as React from 'react';

import AccordionTitle from '../bookingItem/AccordionTitle';
import Accordion from '../bookingItem/Accordion';
import type { BasicBookingDataFields } from '../../types';

type Props = {|
  booking: BasicBookingDataFields,
|};

const Multicity = ({ booking }: Props) => (
  <div>
    <AccordionTitle title="Trips" />
    {Array.isArray(booking.trips) &&
      booking.trips.map((trip, i) => (
        //eslint-disable-next-line react/no-array-index-key
        <Accordion key={i} trip={trip} />
      ))}
  </div>
);

export default Multicity;
