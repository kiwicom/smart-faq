// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import idx from 'idx';

import QueryRenderer from '../relay/QueryRenderer';
import BookingError from './BookingError';
import BookingDetail from './BookingDetail';
import BookingNotFound from './BookingNotFound';
import BookingLoader from './BookingLoader';
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
    let content = null;
    const booking = idx(renderState.props, _ => _.nearestBooking);

    if (booking) {
      content = <BookingDetail booking={booking} />;
    } else if (!booking) {
      content = <BookingNotFound />;
    }

    if (!renderState.props) {
      content = <BookingLoader />;
    }

    if (renderState && renderState.error) {
      content = <BookingError />;
    }

    return (
      <div style={{ height: '100%', backgroundColor: '#f5f7f9' }}>
        {content}
      </div>
    );
  };

  render() {
    return (
      <QueryRenderer query={query} variables={{}} render={this.renderBooking} />
    );
  }
}

export default NearestBooking;
