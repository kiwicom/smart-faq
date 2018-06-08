// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import idx from 'idx';

import QueryRenderer from '../relay/QueryRenderer';
import BookingError from './BookingError';
import BookingDetail from './BookingDetail';
import BookingNotFound from './BookingNotFound';
import BookingLoader from './BookingLoader';
import bookingTypes from '../common/booking/bookingTypes';
import type { SelectedBookingQueryResponse as QueryResponseType } from './__generated__/SelectedBookingQuery.graphql';

type Props = {|
  bookingId: string,
|};

type RenderState = {
  props: ?QueryResponseType,
  error: ?Error,
};

const selectedBookingQuery = graphql`
  query SelectedBookingQuery($id: ID!) {
    booking(id: $id) {
      type
      oneWay {
        ...BookingDetail_booking
      }
      return {
        ...BookingDetail_booking
      }
      multicity {
        ...BookingDetail_booking
      }
    }
  }
`;

class SelectedBooking extends React.Component<Props> {
  renderSelectedBooking = (renderState: RenderState) => {
    const bookingType = idx(renderState.props, _ => _.booking.type);
    let content = null;
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

    if (booking) {
      content = <BookingDetail booking={booking} />;
    } else {
      content = <BookingNotFound />;
    }

    if (!renderState.props) {
      content = <BookingLoader />;
    }

    if (renderState.error) {
      content = <BookingError />;
    }

    return (
      <div style={{ height: '100%', backgroundColor: '#f5f7f9' }}>
        {content}
      </div>
    );
  };

  render() {
    const { bookingId } = this.props;

    return (
      <QueryRenderer
        query={selectedBookingQuery}
        variables={{ id: bookingId }}
        render={this.renderSelectedBooking}
      />
    );
  }
}

export default SelectedBooking;
