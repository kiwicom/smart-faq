// @flow

import * as React from 'react';
import idx from 'idx';

import { TripDescriptionStyle } from './commonStyles';
import type { BasicBookingDataFields } from '../types';

type Props = {|
  +booking: BasicBookingDataFields,
|};

const MultiCityTrip = ({ booking }: Props) => {
  const trips = idx(booking, _ => _.trips) || [];
  const destination = idx(booking.end, _ => _.airport.city.name) || '';

  return (
    <React.Fragment>
      <div className="TripDescription">
        {trips.reduce((acc, trip) => {
          const city = idx(trip, _ => _.departure.airport.city.name) || '';
          //F.I.X.M.E: new Orbit release should publish new leftArrow icon
          return (acc += `${city} → `);
        }, '') + destination}
      </div>
      <style jsx>{TripDescriptionStyle}</style>
    </React.Fragment>
  );
};

export default MultiCityTrip;
