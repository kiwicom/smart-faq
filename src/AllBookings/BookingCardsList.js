// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Heading } from '@kiwicom/orbit-components';

import bookingTypes from '../common/booking/bookingTypes';
import OneWayBooking from './BookingTypes/OneWayBooking';
import ReturnBooking from './BookingTypes/ReturnBooking';
import MulticityBooking from './BookingTypes/MulticityBooking';
import type { BookingCardsList_booking } from './__generated__/BookingCardsList_booking.graphql';
import { BookingState, type BookingStateType } from '../context/BookingState';

type Props = {
  booking: BookingCardsList_booking,
  title: string,
};

const BookingCardsList = (props: Props) => {
  const { booking, title } = props;
  const edges = idx(booking, _ => _.edges) || [];
  const bookings = edges.map(edge => idx(edge, _ => _.node));

  return (
    <React.Fragment>
      {bookings.length > 0 && (
        <div className="subtitle">
          <Heading weight="medium" size="small">
            {title}
          </Heading>
        </div>
      )}
      {bookings.map(booking => {
        const type = idx(booking, _ => _.type);
        const id = idx(booking, _ => _.id);
        let bookingComponent = null;

        switch (type) {
          case bookingTypes.ONE_WAY:
            bookingComponent = (
              <OneWayBooking booking={idx(booking, _ => _.oneWay)} />
            );
            break;
          case bookingTypes.RETURN:
            bookingComponent = (
              <ReturnBooking booking={idx(booking, _ => _.return)} />
            );
            break;
          case bookingTypes.MULTICITY:
            bookingComponent = (
              <MulticityBooking booking={idx(booking, _ => _.multicity)} />
            );
            break;
        }

        if (bookingComponent) {
          if (!id) {
            return bookingComponent;
          }

          return (
            <BookingState.Consumer>
              {({ onSelectBooking }: BookingStateType) => (
                <div
                  key={id}
                  onClick={() => onSelectBooking(id)}
                  className="bookingCard"
                  role="button"
                  onKeyUp={() => onSelectBooking(id)}
                  tabIndex={0}
                >
                  {bookingComponent}
                </div>
              )}
            </BookingState.Consumer>
          );
        }

        return null;
      })}
      <style jsx>
        {`
          .bookingCard {
            cursor: pointer;
            outline: none;
          }
          div.subtitle {
            margin-top: 14px;
            margin-bottom: 12px;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export const RawBookingCardsList = BookingCardsList;

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
