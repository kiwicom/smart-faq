// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import idx from 'idx';

import { SelectedBooking } from '../context/SelectedBooking';
import type { State } from '../context/SelectedBooking';
import HasBooking from './HasBooking';
import NoBooking from './NoBooking';
import UserStatus from '../helpers/UserStatus';
import BookingRenderer from '../relay/BookingRenderer';
import type { BookingStateWrapperNearestQueryResponse } from './__generated__/BookingStateWrapperNearestQuery.graphql';
import type { BookingStateWrapperSelectedQueryResponse } from './__generated__/BookingStateWrapperSelectedQuery.graphql';
import createEnvironment from '../relay/environment';
import { withLanguage } from '../context/Language';
import { withLoginToken } from '../context/User';
import type { onLogout } from '../types';
import GuaranteeNeededResolver from '../relay/GuaranteeNeededResolver';

const nearestBookingQuery = graphql`
  query BookingStateWrapperNearestQuery {
    nearestBooking {
      id
      upcomingLeg {
        ...GuaranteeNeededResolver_upcomingLeg
      }
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
      upcomingLeg {
        ...GuaranteeNeededResolver_upcomingLeg
      }
      oneWay {
        ...HasBooking_booking
      }
      return {
        ...HasBooking_booking
      }
      multicity {
        ...HasBooking_booking
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
  loginToken: string,
  locale: string,
};

const BookingStateWrapper = ({ children, loginToken, locale }: Props) => {
  const renderBookingStateWrapper = ({ props }: RenderProps) => {
    const booking =
      props &&
      (props.nearestBooking || // eslint-disable-line react/prop-types
        idx(props, _ => _.booking.oneWay) ||
        idx(props, _ => _.booking.return) ||
        idx(props, _ => _.booking.multicity)); // eslint-disable-line react/prop-types

    const upcomingLeg =
      // $FlowExpectedError: Expected
      idx(props, _ => _.booking.upcomingLeg) ||
      // $FlowExpectedError: Expected
      idx(props, _ => _.singleBooking.upcomingLeg) ||
      // $FlowExpectedError: Expected
      idx(props, _ => _.nearestBooking.upcomingLeg);

    return booking ? (
      <React.Fragment>
        <GuaranteeNeededResolver upcomingLeg={upcomingLeg} />
        <HasBooking onLogout={onLogout} booking={booking}>
          {children}
        </HasBooking>
      </React.Fragment>
    ) : (
      <NoBooking onLogout={onLogout}>{children}</NoBooking>
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
        <NoBooking onLogout={onLogout}>{children}</NoBooking>
      </UserStatus.LoggedOut>
    </React.Fragment>
  );
};

export default BookingStateWrapper;
