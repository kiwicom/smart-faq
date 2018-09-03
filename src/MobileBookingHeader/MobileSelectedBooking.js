// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import idx from 'idx';

import { UserContext } from '../context/User';
import BookingRenderer from '../relay/BookingRenderer';
import MobileBookingDetail from './MobileBookingDetail';
import bookingTypes from '../common/booking/bookingTypes';
import type { UserContextType } from '../context/User';
import type { MobileSelectedBookingQuery as QueryResponseType } from './__generated__/MobileSelectedBookingQuery.graphql';

type RenderState = {
  props: ?QueryResponseType,
  error: ?Error,
};

const selectedBookingQuery = graphql`
  query MobileSelectedBookingQuery($id: ID!) {
    booking(id: $id) {
      type
      upcomingLeg {
        ...GuaranteeNeededResolver_upcomingLeg
      }
      oneWay {
        ...MobileBookingDetail_booking
      }
      return {
        ...MobileBookingDetail_booking
      }
      multicity {
        ...MobileBookingDetail_booking
      }
    }
  }
`;

const selectedSingleBookingQuery = graphql`
  query MobileSelectedBookingSingleQuery($id: Int!, $authToken: String!) {
    singleBooking(id: $id, authToken: $authToken) {
      type
      upcomingLeg {
        arrival {
          time
        }
        departure {
          time
        }
      }
      ...MobileBookingDetail_booking
    }
  }
`;

type Props = {
  bookingId: number,
};

class MobileSelectedBooking extends React.Component<Props> {
  renderMobileSelectedBooking = (renderState: RenderState) => {
    if (renderState.error) {
      return <div>Error</div>;
    }

    if (!renderState.props) {
      return <div>Loading</div>;
    }

    const bookingType =
      idx(renderState.props, _ => _.booking.type) ||
      idx(renderState.props, _ => _.singleBooking.type);

    let booking = null;

    switch (bookingType) {
      case bookingTypes.ONE_WAY:
        booking =
          idx(renderState.props, _ => _.booking.oneWay) ||
          idx(renderState.props, _ => _.singleBooking);
        break;
      case bookingTypes.RETURN:
        booking =
          idx(renderState.props, _ => _.booking.return) ||
          idx(renderState.props, _ => _.singleBooking);
        break;
      case bookingTypes.MULTICITY:
        booking =
          idx(renderState.props, _ => _.booking.multicity) ||
          idx(renderState.props, _ => _.singleBooking);
        break;
    }

    if (!booking) {
      return <div>Not found</div>;
    }

    return <MobileBookingDetail booking={booking} />;
  };

  render() {
    const { bookingId } = this.props;

    return (
      <UserContext.Consumer>
        {({ simpleToken, loginToken }: UserContextType) => {
          if (loginToken) {
            return (
              <BookingRenderer
                query={selectedBookingQuery}
                variables={{ id: bookingId }}
                render={this.renderMobileSelectedBooking}
              />
            );
          }
          if (simpleToken) {
            return (
              <BookingRenderer
                query={selectedSingleBookingQuery}
                variables={{ id: bookingId, authToken: simpleToken }}
                render={this.renderMobileSelectedBooking}
              />
            );
          }
          return null;
        }}
      </UserContext.Consumer>
    );
  }
}

export default MobileSelectedBooking;
