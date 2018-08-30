// @flow

import * as React from 'react';

import BookingError from './BookingError';
import BookingDetail from './BookingDetail';
import BookingNotFound from './BookingNotFound';
import BookingLoader from './BookingLoader';
import type { BasicBookingData } from '../types';
import { BookingState } from '../context/BookingState';

type Props = {||};

class NearestBooking extends React.Component<Props> {
  renderBooking = (renderState: ?BasicBookingData) => {
    let content = null;
    if (!renderState) {
      content = <BookingLoader />;
      return (
        <div style={{ height: '100%', backgroundColor: '#f5f7f9' }}>
          {content}
        </div>
      );
    }

    const booking = renderState.props;

    if (booking) {
      content = <BookingDetail booking={booking} />;
    } else if (!booking) {
      content = <BookingNotFound />;
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
      <BookingState.Consumer>
        {({ booking }) => this.renderBooking(booking)}
      </BookingState.Consumer>
    );
  }
}

export default NearestBooking;
