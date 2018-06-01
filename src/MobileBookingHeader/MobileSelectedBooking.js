// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import idx from 'idx';

import QueryRenderer from '../relay/QueryRenderer';
import type { MobileSelectedBookingQuery as QueryResponseType } from './__generated__/MobileSelectedBookingQuery.graphql';
import MobileBookingDetail from './MobileBookingDetail';
import bookingTypes from '../common/booking/bookingTypes';

type RenderState = {
  props: ?QueryResponseType,
  error: ?Error,
};

const selectedBookingQuery = graphql`
  query MobileSelectedBookingQuery($id: ID!) {
    booking(id: $id) {
      type
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

type Props = {
  bookingId: string,
  expanded: boolean,
};

class MobileSelectedBooking extends React.Component<Props> {
  renderMobileSelectedBooking = (renderState: RenderState) => {
    if (renderState.error) {
      return <div>Error</div>;
    }

    if (!renderState.props) {
      return <div>Loading</div>;
    }

    const bookingType = idx(renderState.props, _ => _.booking.type);
    let booking = null;

    switch (bookingType) {
      case bookingTypes.ONE_WAY:
        booking = idx(renderState.props, _ => _.booking.oneWay);
        break;
      case bookingTypes.RETURN:
        booking = idx(renderState.props, _ => _.booking.return);
        break;
      case bookingTypes.MULTICITY:
        booking = idx(renderState.props, _ => _.booking.multicity);
        break;
    }

    if (!booking) {
      return <div>Not found</div>;
    }

    return (
      <MobileBookingDetail expanded={this.props.expanded} booking={booking} />
    );
  };

  render() {
    const { bookingId } = this.props;

    return (
      <QueryRenderer
        query={selectedBookingQuery}
        variables={{ id: bookingId }}
        render={this.renderMobileSelectedBooking}
      />
    );
  }
}

export default MobileSelectedBooking;
