// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import BookingCard from '../BookingCard/BookingCard';
import bookingTypes from '../../common/booking/bookingTypes';
import type { MultictyBooking_booking } from './__generated__/MulticityBooking_booking.graphql';

type Props = {
  booking: MultictyBooking_booking,
};

const MulticityBooking = (props: Props) => {
  const arrival = idx(props.booking, _ => _.end);
  const departure = idx(props.booking, _ => _.start);

  return (
    <BookingCard
      arrival={arrival}
      departure={departure}
      booking={props.booking}
      type={bookingTypes.MULTICITY}
    />
  );
};

export default createFragmentContainer(
  MulticityBooking,
  graphql`
    fragment MulticityBooking_booking on BookingMulticity {
      ...BookingCard_booking
      start {
        ...BookingCard_departure
      }
      end {
        ...BookingCard_arrival
      }
      trips {
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
