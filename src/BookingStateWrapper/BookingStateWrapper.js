// @flow

import * as React from 'react';
import { graphql } from 'react-relay';

import { SelectedBooking } from '../context/SelectedBooking';
import type { State } from '../context/SelectedBooking';
import HasBooking from './HasBooking';
import NoBooking from './NoBooking';
import UserStatus from '../helpers/UserStatus';
import BookingRenderer from '../relay/BookingRenderer';
import type { BookingStateWrapperNearestQueryResponse } from './__generated__/BookingStateWrapperNearestQuery.graphql';
import type { BookingStateWrapperSelectedQueryResponse } from './__generated__/BookingStateWrapperSelectedQuery.graphql';

const nearestBookingQuery = graphql`
  query BookingStateWrapperNearestQuery {
    nearestBooking {
      id
      ...HasBooking_booking
      ... on BookingOneWay {
        ...OneWayTripWrapper_booking
      }
    }
  }
`;

const selectedBookingQuery = graphql`
  query BookingStateWrapperSelectedQuery($id: ID!) {
    node(id: $id) {
      id
      ...HasBooking_booking
    }
  }
`;

type RenderProps = {
  props: ?{
    ...BookingStateWrapperNearestQueryResponse,
    ...BookingStateWrapperSelectedQueryResponse,
  },
};

type Props = {
  children: React.Node,
};

const BookingStateWrapper = ({ children }: Props) => {
  const renderBookingStateWrapper = ({ props }: RenderProps) => {
    const booking = props && (props.nearestBooking || props.node); // eslint-disable-line react/prop-types
    return booking ? (
      <HasBooking booking={booking}>{children}</HasBooking>
    ) : (
      <NoBooking>{children}</NoBooking>
    );
  };

  return (
    <React.Fragment>
      <UserStatus.LoggedIn>
        <SelectedBooking.Consumer>
          {({ selectedBooking }: State) => {
            return selectedBooking === null ? (
              <BookingRenderer
                query={nearestBookingQuery}
                render={renderBookingStateWrapper}
              />
            ) : (
              <BookingRenderer
                query={selectedBookingQuery}
                render={renderBookingStateWrapper}
                variables={{ id: selectedBooking }}
              />
            );
          }}
        </SelectedBooking.Consumer>
      </UserStatus.LoggedIn>
      <UserStatus.LoggedOut>
        <NoBooking>{children}</NoBooking>
      </UserStatus.LoggedOut>
    </React.Fragment>
  );
};

export default BookingStateWrapper;
