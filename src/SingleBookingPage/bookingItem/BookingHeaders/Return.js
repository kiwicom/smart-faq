// @flow

import idx from 'idx';

import type { BasicBookingDataFields } from '../../../types';

type Props = {|
  bookingHeader: BasicBookingDataFields,
|};

const ReturnBookingHeader = ({ bookingHeader }: Props) => {
  const origin =
    idx(bookingHeader.outbound, _ => _.departure.airport.city.name) || '';
  const destination =
    idx(bookingHeader.outbound, _ => _.arrival.airport.city.name) || '';
  return `${origin} to ${destination} and back`;
};

export const RawReturnBookingHeader = ReturnBookingHeader;

export default ReturnBookingHeader;
