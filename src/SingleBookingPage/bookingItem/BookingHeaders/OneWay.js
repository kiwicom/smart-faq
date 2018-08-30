// @flow

import idx from 'idx';

import type { BasicBookingDataFields } from '../../../types';

type Props = {|
  bookingHeader: BasicBookingDataFields,
|};

const OneWayBookingHeader = ({ bookingHeader }: Props) => {
  const origin =
    idx(bookingHeader.trip, _ => _.departure.airport.city.name) || '';
  const destination =
    idx(bookingHeader.trip, _ => _.arrival.airport.city.name) || '';
  return `${origin} to ${destination}`;
};

export default OneWayBookingHeader;
