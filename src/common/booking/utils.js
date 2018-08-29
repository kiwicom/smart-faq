// @flow

import idx from 'idx';
import { DateTime } from 'luxon';

import bookingTypes from './bookingTypes';
import { URGENCY_THRESHOLD } from '../../helpers/dateUtils';
import type { BasicBookingDataFields } from '../../types';

export const isUrgentBooking = (
  isPastBooking: boolean,
  departureTime: ?Date,
) => {
  const timeDelta = departureTime
    ? DateTime.fromJSDate(departureTime, { zone: 'utc' }).diffNow('hours').hours
    : null;
  const isUrgent = timeDelta !== null && URGENCY_THRESHOLD > timeDelta;

  return isPastBooking === false && isUrgent;
};

export const getDepartureTimeByType = (booking: BasicBookingDataFields) => {
  let date = null;

  if (booking.type === bookingTypes.ONE_WAY) {
    date = idx(booking, _ => _.trip.departure.time);
  }

  if (booking.type === bookingTypes.RETURN) {
    date = idx(booking, _ => _.outbound.departure.time);
  }

  if (booking.type === bookingTypes.MULTICITY) {
    date = idx(booking, _ => _.start.time);
  }

  return date ? new Date(date) : null;
};
