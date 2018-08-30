// @flow

import * as React from 'react';
import idx from 'idx';

import { TripDescriptionStyle } from './commonStyles';
import type { BasicBookingDataFields } from '../types';

type Props = {|
  +booking: BasicBookingDataFields,
|};

const ReturnTrip = ({ booking }: Props) => {
  const origin =
    idx(booking.outbound, _ => _.departure.airport.city.name) || '';
  const destination =
    idx(booking.inbound, _ => _.departure.airport.city.name) || '';
  return (
    <React.Fragment>
      <div className="TripDescription">{`${origin} to ${destination} and back`}</div>
      <style jsx>{TripDescriptionStyle}</style>
    </React.Fragment>
  );
};

export default ReturnTrip;
