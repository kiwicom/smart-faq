// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import BookingCard from '../BookingCard/BookingCard';
import bookingTypes from '../../common/booking/bookingTypes';
import type { ReturnBooking_booking } from './__generated__/ReturnBooking_booking.graphql';

type Props = {
  booking: ReturnBooking_booking,
};

const ReturnBooking = (props: Props) => {
  const arrival = idx(props.booking, _ => _.outbound.arrival);
  const departure = idx(props.booking, _ => _.outbound.departure);
  const legs = idx(props.booking, _ => _.outbound);
  return (
    <BookingCard
      trip={legs}
      arrival={arrival}
      departure={departure}
      booking={props.booking}
      type={bookingTypes.RETURN}
    />
  );
};

export default createFragmentContainer(
  ReturnBooking,
  graphql`
    fragment ReturnBooking_booking on BookingReturn {
      ...BookingCard_booking
      outbound {
        departure {
          ...BookingCard_departure
        }
        arrival {
          ...BookingCard_arrival
        }
        legs {
          ...CarrierLogoWrapper_legs
        }
      }
    }
  `,
);
