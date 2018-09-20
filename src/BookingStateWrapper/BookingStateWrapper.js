// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import idx from 'idx';

import QueryRenderer from '../relay/QueryRenderer';
import { SelectedBooking } from '../context/SelectedBooking';
import type { State } from '../context/SelectedBooking';
import HasBooking from './HasBooking';
import NoBooking from './NoBooking';
import UserStatus from '../helpers/UserStatus';
import type { BookingStateWrapperNearestQueryResponse } from './__generated__/BookingStateWrapperNearestQuery.graphql';
import type { BookingStateWrapperSelectedQueryResponse } from './__generated__/BookingStateWrapperSelectedQuery.graphql';
import GuaranteeNeededResolver from '../relay/GuaranteeNeededResolver';

const nearestBookingQuery = graphql`
  query BookingStateWrapperNearestQuery {
    nearestBooking {
      id
      ...GuaranteeNeededResolver_booking
      ...HasBooking_booking
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
  }
`;

const selectedBookingQuery = graphql`
  query BookingStateWrapperSelectedQuery($id: ID!) {
    booking(id: $id) {
      id
      oneWay {
        ...HasBooking_booking
        ...GuaranteeNeededResolver_booking
      }
      return {
        ...HasBooking_booking
        ...GuaranteeNeededResolver_booking
      }
      multicity {
        ...HasBooking_booking
        ...GuaranteeNeededResolver_booking
      }
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
    const booking =
      props &&
      (props.nearestBooking || // eslint-disable-line react/prop-types
        idx(props, _ => _.booking.oneWay) ||
        idx(props, _ => _.booking.return) ||
        idx(props, _ => _.booking.multicity)); // eslint-disable-line react/prop-types

    return booking ? (
      <React.Fragment>
        <GuaranteeNeededResolver booking={booking} />
        <HasBooking booking={booking}>{children}</HasBooking>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <GuaranteeNeededResolver booking={booking} />
        <NoBooking>{children}</NoBooking>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <UserStatus.LoggedIn>
        <SelectedBooking.Consumer>
          {({ selectedBooking }: State) => {
            return selectedBooking === null ? (
              <QueryRenderer
                query={nearestBookingQuery}
                render={renderBookingStateWrapper}
              />
            ) : (
              <QueryRenderer
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
