// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import idx from 'idx';

import QueryRenderer from '../relay/QueryRenderer';
import BookingError from './BookingError';
import NearestBooking from './NearestBooking';
import Loader from '../common/Loader';
import type { SingleBookingPageQueryResponse as QueryResponseType } from './__generated__/SingleBookingPageQuery.graphql';

type Props = {||};

type RenderState = {
  props: ?QueryResponseType,
  error: ?Error,
};

const query = graphql`
  query SingleBookingPageQuery {
    allBookings {
      edges {
        ...NearestBooking_bookingEdges
      }
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

    const edges = idx(renderState.props, _ => _.allBookings.edges);

    return <NearestBooking bookingEdges={edges} />;
  };

  render() {
    return (
      <QueryRenderer query={query} variables={{}} render={this.renderBooking} />
    );
  }
}

export default SingleBookingPage;
