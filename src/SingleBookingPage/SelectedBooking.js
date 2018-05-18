// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import idx from 'idx';

import Loader from '../common/Loader';
import QueryRenderer from '../relay/QueryRenderer';
import BookingError from './BookingError';
import BookingDetail from './BookingDetail';
import BookingNotFound from './BookingNotFound';
import bookingTypes from '../common/booking/bookingTypes';
import type { SelectedBookingQueryResponse as QueryResponseType } from './__generated__/SelectedBookingQuery.graphql';

type Props = {|
  match: {
    params: {
      bookingId: ?string,
    },
  },
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
    if (renderState.error) {
      return <BookingError />;
    }

    if (!renderState.props) {
      return <Loader />;
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
      return <BookingNotFound />;
    }

    return <BookingDetail booking={booking} />;
  };

  render() {
    const bookingId = idx(this.props.match, _ => _.params.bookingId) || null;

    if (bookingId) {
      return (
        <QueryRenderer
          query={selectedBookingQuery}
          variables={{ id: bookingId }}
          render={this.renderSelectedBooking}
        />
      );
    }

    return <BookingNotFound />;
  }
}

export default SelectedBooking;
