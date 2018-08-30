// @flow

import * as React from 'react';
import idx from 'idx';

import type { BasicBookingDataFields } from '../types';
import { TripDescriptionStyle } from './commonStyles';

type Props = {|
  +booking: BasicBookingDataFields,
|};

const OneWayTrip = ({ booking }: Props) => {
  const origin = idx(booking.trip, _ => _.departure.airport.city.name) || '';
  const destination = idx(booking.trip, _ => _.arrival.airport.city.name) || '';
  return (
    <React.Fragment>
      <div className="TripDescription">{`${origin} to ${destination}`}</div>
      <style jsx>{TripDescriptionStyle}</style>
    </React.Fragment>
  );
};

export default OneWayTrip;
