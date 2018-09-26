// @flow

import idx from 'idx';
import { DateTime } from 'luxon';

import bookingTypes from './bookingTypes';
import { URGENCY_THRESHOLD } from '../../helpers/dateUtils';
import type { BookingDetail_booking } from '../../SingleBookingPage/__generated__/BookingDetail_booking.graphql';
import type { MobileBookingDetail_booking } from '../../MobileBookingHeader/__generated__/MobileBookingDetail_booking.graphql';

type BookingType = MobileBookingDetail_booking | BookingDetail_booking;

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

export const getDepartureTimeByType = (booking: BookingType) => {
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
