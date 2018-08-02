// @flow

import * as React from 'react';

import { BookingState } from '../../context/BookingState';

type Props = {
  wasSelected: boolean,
  setSelected: (bookingId: number) => void,
};

type State = {
  selectedBooking: ?number,
};

class SelectUrlBooking extends React.Component<Props, State> {
  static getDerivedStateFromProps(prevProps: Props, prevState: State) {
    if (typeof window === 'undefined') {
      return null;
    }

    const { selectedBooking } = prevState;
    const urlMatch = window.location.href.match(
      /.*(?:kiwi.com|localhost:\d*)\/.*\/(?:account\/bookings|manage)\/(\d*)\?.*$/,
    );
    const bookingId = urlMatch && urlMatch[1];
    if (bookingId && bookingId !== selectedBooking) {
      return { selectedBooking: Number(bookingId) };
    }
    return null;
  }

  state = {
    selectedBooking: null,
  };

  render() {
    const { selectedBooking } = this.state;
    const { wasSelected, setSelected } = this.props;
    return (
      <BookingState.Consumer>
        {({ onSelectBooking }) => {
          if (selectedBooking && !wasSelected) {
            onSelectBooking(selectedBooking);
            setSelected(selectedBooking);
          }
          return null;
        }}
      </BookingState.Consumer>
    );
  }
}

export { SelectUrlBooking };
