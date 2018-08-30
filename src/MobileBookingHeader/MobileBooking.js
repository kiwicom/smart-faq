// @flow

import * as React from 'react';

import MobileBookingDetail from './MobileBookingDetail';
import { BookingState } from '../context/BookingState';
import type { BasicBookingData } from '../types';

type Props = {||};

class MobileNearestBooking extends React.Component<Props> {
  renderBooking = (renderState: ?BasicBookingData) => {
    if (renderState && renderState.error) {
      return <div>Error</div>;
    }

    if (!renderState) {
      return <div>Loading</div>;
    }

    const booking = renderState.props;

    if (!booking) {
      return <div>Not found</div>;
    }

    return <MobileBookingDetail booking={renderState.props} />;
  };

  render() {
    return (
      <BookingState.Consumer>
        {({ booking }) => this.renderBooking(booking)}
      </BookingState.Consumer>
    );
  }
}

export default MobileNearestBooking;
