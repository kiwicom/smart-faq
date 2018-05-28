// @flow

import * as React from 'react';

const initialState = {
  bookingPage: 'SINGLE_BOOKING',
  selectedBooking: null,
};

type Props = {
  children: React.Node,
};

export type State = {
  bookingPage: 'SINGLE_BOOKING' | 'ALL_BOOKINGS',
  selectedBooking: ?string,
};

export type BookingStateProps = State;
export type BookingStateType = State & {
  onDisplayAll: () => void,
  onSelectBooking: (id: string) => void,
};

export const BookingState = React.createContext({
  ...initialState,
  onDisplayAll: () => {},
  onSelectBooking: (id: string) => {}, // eslint-disable-line no-unused-vars
});

class BookingStateProvider extends React.Component<Props, State> {
  state = initialState;

  onClickAllBooking = () => {
    this.setState({ bookingPage: 'ALL_BOOKINGS' });
  };

  onClickSelect = (id: string) => {
    this.setState({ bookingPage: 'SINGLE_BOOKING', selectedBooking: id });
  };

  render() {
    const { bookingPage, selectedBooking } = this.state;

    return (
      <BookingState.Provider
        value={{
          bookingPage,
          selectedBooking,
          onSelectBooking: this.onClickSelect,
          onDisplayAll: this.onClickAllBooking,
        }}
      >
        {this.props.children}
      </BookingState.Provider>
    );
  }
}

export default BookingStateProvider;
