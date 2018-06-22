// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import idx from 'idx';

import QueryRenderer from '../relay/QueryRenderer';
import BookingError from './BookingError';
import BookingDetail from './BookingDetail';
import BookingNotFound from './BookingNotFound';
import BookingLoader from './BookingLoader';
import { BookingState, type BookingStateType } from '../context/BookingState';
import type { NearestBookingQueryResponse as QueryResponseType } from './__generated__/NearestBookingQuery.graphql';

type Props = {||};

type RenderState = {
  props: ?QueryResponseType,
  error: ?Error,
};

const query = graphql`
  query NearestBookingQuery {
    nearestBooking {
      id
      ...BookingDetail_booking
    }
  }
`;

class NearestBooking extends React.Component<Props> {
  renderBooking = (renderState: RenderState) => {
    console.log(renderState);
    const id = idx(renderState.props, _ => _.nearestBooking);
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
      <BookingState.Consumer>
        {({ onSelectBooking }: BookingStateType) => (
          <div style={{ height: '100%', backgroundColor: '#f5f7f9' }}>
            {content}
            {onSelectBooking(id)}
          </div>
        )}
      </BookingState.Consumer>
    );
  };

  render() {
    return (
      <QueryRenderer query={query} variables={{}} render={this.renderBooking} />
    );
  }
}

export default NearestBooking;
