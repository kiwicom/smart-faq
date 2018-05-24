// @flow

import * as React from 'react';

type Props = {
  children: React.Node,
};

export type BookingStateType = {
  bookingPage: 'SINGLE_BOOKING' | 'ALL_BOOKINGS',
  selectedBooking: ?string,
};

export const ClickAllBooking = React.createContext(() => {});
export const ClickSelectBooking = React.createContext(
  (id: string) => {}, // eslint-disable-line no-unused-vars
);
const initBookingState = {
  bookingPage: 'SINGLE_BOOKING',
  selectedBooking: null,
};
export const BookingState = React.createContext();

class BookingStateProvider extends React.Component<Props, BookingStateType> {
  state = initBookingState;

  onClickAllBooking = () => {
    this.setState({ bookingPage: 'ALL_BOOKINGS' });
  };

  onClickSelect = (id: string) => {
    this.setState({ bookingPage: 'SINGLE_BOOKING', selectedBooking: id });
  };

  render() {
    const { bookingPage, selectedBooking } = this.state;

    return (
      <ClickAllBooking.Provider value={this.onClickAllBooking}>
        <ClickSelectBooking.Provider value={this.onClickSelect}>
          <BookingState.Provider
            value={{
              bookingPage,
              selectedBooking,
            }}
          >
            {this.props.children}
          </BookingState.Provider>
        </ClickSelectBooking.Provider>
      </ClickAllBooking.Provider>
    );
  }
}

export default BookingStateProvider;
