// @flow

import idx from 'idx';

import type { BasicBookingDataFields } from '../../../types';

type Props = {|
  bookingHeader: BasicBookingDataFields,
|};

const MulticityBookingHeader = ({ bookingHeader }: Props) => {
  const trips = idx(bookingHeader, _ => _.trips) || [];
  const destination = idx(bookingHeader.end, _ => _.airport.city.name) || '';
  return (
    trips.reduce((acc, trip) => {
      const city = idx(trip, _ => _.departure.airport.city.name) || '';
      //F.I.X.M.E: new Orbit release should publish new leftArrow icon
      return (acc += `${city} → `);
    }, '') + destination
  );
};

export default MulticityBookingHeader;
