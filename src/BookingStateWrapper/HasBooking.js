// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import bookingTypes from '../common/booking/bookingTypes';
import OneWayTrip from './OneWayTrip';
import ReturnTrip from './ReturnTrip';
import MultiCityTrip from './MultiCityTrip';
import HasBooking_booking from './__generated__/HasBooking_booking.graphql';
import type { onLogout } from '../types';

type Props = {
  +booking: HasBooking_booking,
  children: React.Node,
  onLogout: onLogout,
};

const HasBooking = ({ booking, children, onLogout }: Props) => {
  if (booking.type === bookingTypes.ONE_WAY) {
    return (
      <OneWayTrip onLogout={onLogout} booking={booking}>
        {children}
      </OneWayTrip>
    );
  }

  if (booking.type === bookingTypes.RETURN) {
    return (
      <ReturnTrip onLogout={onLogout} booking={booking}>
        {children}
      </ReturnTrip>
    );
  }

  if (booking.type === bookingTypes.MULTICITY) {
    return (
      <MultiCityTrip onLogout={onLogout} booking={booking}>
        {children}
      </MultiCityTrip>
    );
  }

  return null;
};

export default createFragmentContainer(
  HasBooking,
  graphql`
    fragment HasBooking_booking on BookingInterface {
      type
      isPastBooking
      ... on BookingOneWay {
        ...OneWayTripWrapper_booking
      }
      ... on BookingReturn {
        ...ReturnTripWrapper_booking
      }
      ... on BookingMulticity {
        ...MultiCityTripWrapper_booking
      }
    }
  `,
);
