// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import bookingTypes from '../common/booking/bookingTypes';
import OneWayBooking from './BookingTypes/OneWayBooking';
import ReturnBooking from './BookingTypes/ReturnBooking';
import MulticityBooking from './BookingTypes/MulticityBooking';
import type { BookingCardsList_booking } from './__generated__/BookingCardsList_booking.graphql';

type Props = {
  booking: BookingCardsList_booking,
};

const BookingCardsList = (props: Props) => {
  const { booking } = props;
  const edges = idx(booking, _ => _.edges) || [];
  const bookings = edges.map(edge => idx(edge, _ => _.node));

  return (
    <React.Fragment>
      {bookings.map(booking => {
        const type = idx(booking, _ => _.type);
        const id = idx(booking, _ => _.id);

        switch (type) {
          case bookingTypes.ONE_WAY:
            return (
              <OneWayBooking key={id} booking={idx(booking, _ => _.oneWay)} />
            );
          case bookingTypes.RETURN:
            return (
              <ReturnBooking key={id} booking={idx(booking, _ => _.return)} />
            );
          case bookingTypes.MULTICITY:
            return (
              <MulticityBooking
                key={id}
                booking={idx(booking, _ => _.multicity)}
              />
            );
        }
        return null;
      })}
    </React.Fragment>
  );
};

export default createFragmentContainer(
  BookingCardsList,
  graphql`
    fragment BookingCardsList_booking on BookingConnection {
      edges {
        node {
          id
          type
          oneWay {
            ...OneWayBooking_booking
          }
          return {
            ...ReturnBooking_booking
          }
          multicity {
            ...MulticityBooking_booking
          }
        }
      }
    }
  `,
);
