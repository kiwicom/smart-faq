// @flow

import * as React from 'react';
import { graphql } from 'react-relay';

import Loader from '../common/Loader';
import QueryRenderer from '../relay/QueryRenderer';
import BookingError from './BookingError';
import NearestBooking from './NearestBooking';
import BookingNotFound from './BookingNotFound';
import type { SingleBookingPageQueryResponse as QueryResponseType } from './__generated__/SingleBookingPageQuery.graphql';

type Props = {||};

type RenderState = {
  props: ?QueryResponseType,
  error: ?Error,
};

const query = graphql`
  query SingleBookingPageQuery {
    nearestBooking {
      ...NearestBooking_booking
    }
  }
`;

class SingleBookingPage extends React.Component<Props> {
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

    return <NearestBooking booking={booking} />;
  };

  render() {
    return (
      <QueryRenderer query={query} variables={{}} render={this.renderBooking} />
    );
  }
}

export default SingleBookingPage;
