// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Heading } from '@kiwicom/orbit-components';

import OneWayBooking from './BookingTypes/OneWayBooking';
import ReturnBooking from './BookingTypes/ReturnBooking';
import MulticityBooking from './BookingTypes/MulticityBooking';
import type { BookingCardsList_booking } from './__generated__/BookingCardsList_booking.graphql';
import { BookingState, type BookingStateType } from '../context/BookingState';

type Props = {
  booking: BookingCardsList_booking,
  title: string,
  dataCy?: string,
};

type BookingVariants = {
  BookingOneWay: React.Node,
  BookingReturn: React.Node,
  BookingMulticity: React.Node,
};

const BookingCardsList = (props: Props) => {
  const { booking, title, dataCy } = props;
  const edges = idx(booking, _ => _.edges) || [];
  const bookings = edges.map(edge => idx(edge, _ => _.node));

  return (
    <div data-cy={dataCy}>
      {bookings.length > 0 && (
        <div className="subtitle">
          <Heading weight="medium" size="small">
            {title}
          </Heading>
        </div>
      )}
      {bookings.map(booking => {
        const id = idx(booking, _ => _.databaseId);
        const type = idx(booking, _ => _.__typename);
        const variants: BookingVariants = {
          BookingOneWay: <OneWayBooking booking={booking} />,
          BookingReturn: <ReturnBooking booking={booking} />,
          BookingMulticity: <MulticityBooking booking={booking} />,
        };

        let bookingComponent = null;
        if (type && variants[type]) {
          bookingComponent = variants[type];
        }

        if (bookingComponent) {
          if (!id) {
            return bookingComponent;
          }

          return (
            <BookingState.Consumer key={id}>
              {({ onSelectBooking }: BookingStateType) => (
                <div
                  onClick={() => onSelectBooking(id)}
                  className="bookingCard"
                  data-cy="booking-card"
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
    </div>
  );
};

export const RawBookingCardsList = BookingCardsList;

export default createFragmentContainer(
  BookingCardsList,
  graphql`
    fragment BookingCardsList_booking on BookingInterfaceConnection {
      edges {
        node {
          databaseId
          __typename
          ... on BookingOneWay {
            ...OneWayBooking_booking
          }
          ... on BookingReturn {
            ...ReturnBooking_booking
          }
          ... on BookingMulticity {
            ...MulticityBooking_booking
          }
        }
      }
    }
  `,
);
