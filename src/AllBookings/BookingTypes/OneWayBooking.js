// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import BookingCard from '../BookingCard/BookingCard';
import bookingTypes from '../../common/booking/bookingTypes';
import type { OneWayBooking_booking } from './__generated__/OneWayBooking_booking.graphql';

type Props = {
  booking: OneWayBooking_booking,
};

const OneWayBooking = (props: Props) => {
  const arrival = idx(props.booking, _ => _.trip.arrival);
  const departure = idx(props.booking, _ => _.trip.departure);

  return (
    <BookingCard
      arrival={arrival}
      departure={departure}
      booking={props.booking}
      type={bookingTypes.ONE_WAY}
    />
  );
};

export default createFragmentContainer(
  OneWayBooking,
  graphql`
    fragment OneWayBooking_booking on BookingOneWay {
      ...BookingCard_booking
      trip {
        departure {
          ...BookingCard_departure
        }
        arrival {
          ...BookingCard_arrival
        }
        legs {
          ... on Leg @relay(plural: true) {
            airline {
              name
              code
            }
          }
        }
      }
    }
  `,
);
