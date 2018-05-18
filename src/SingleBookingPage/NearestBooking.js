// @flow

import * as React from 'react';
import { graphql } from 'react-relay';

import Loader from '../common/Loader';
import QueryRenderer from '../relay/QueryRenderer';
import BookingError from './BookingError';
import BookingDetail from './BookingDetail';
import BookingNotFound from './BookingNotFound';
import type { NearestBookingQueryResponse as QueryResponseType } from './__generated__/NearestBookingQuery.graphql';

type Props = {||};

type RenderState = {
  props: ?QueryResponseType,
  error: ?Error,
};

const query = graphql`
  query NearestBookingQuery {
    nearestBooking {
      ...BookingDetail_booking
    }
  }
`;

class NearestBooking extends React.Component<Props> {
  renderBooking = (renderState: RenderState) => {
    if (renderState.error) {
      return <BookingError />;
    }

    if (!renderState.props) {
      return <Loader />;
    }

    const booking = renderState.props.nearestBooking;

    if (!booking) {
      return <BookingNotFound />;
    }

    return <BookingDetail booking={booking} />;
  };

  render() {
    return (
      <QueryRenderer query={query} variables={{}} render={this.renderBooking} />
    );
  }
}

export default NearestBooking;
