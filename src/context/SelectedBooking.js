// @flow
/* eslint-disable react/no-unused-state */

import * as React from 'react';

type Props = {|
  children: React.Node,
|};
type StateValues = {
  selectedBooking: ?number,
  bookingPage: 'SINGLE_BOOKING' | 'ALL_BOOKINGS',
};

type StateCallbacks = {
  closeAllBooking: () => void,
  onDisplayAll: () => void,
  onSelectBooking: (id: number) => void,
};

export type SelectedBookingType = StateValues & StateCallbacks;

const initialState: StateValues = {
  selectedBooking: null,
  bookingPage: 'SINGLE_BOOKING',
};

export const SelectedBooking = React.createContext({
  ...initialState,
  closeAllBooking: () => {},
  onDisplayAll: () => {},
  onSelectBooking: (id: number) => {}, // eslint-disable-line no-unused-vars
});

class SelectedBookingProvider extends React.Component<
  Props,
  SelectedBookingType,
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...initialState,
      onSelectBooking: this.onClickSelect,
      closeAllBooking: this.closeAllBooking,
      onDisplayAll: this.onClickAllBooking,
    };
  }

  onClickSelect = (id: number) => {
    this.setState({ bookingPage: 'SINGLE_BOOKING', selectedBooking: id });
    const Body = document.querySelector('#SmartFAQ_Body');
    if (!Body) return;
    Body.dispatchEvent(new Event('scroll'));
  };

  closeAllBooking = () => {
    this.setState({ bookingPage: 'SINGLE_BOOKING' });
  };

  onClickAllBooking = () => {
    this.setState({ bookingPage: 'ALL_BOOKINGS' });
  };

  render() {
    return (
      <SelectedBooking.Provider value={this.state}>
        {this.props.children}
      </SelectedBooking.Provider>
    );
  }
}

export default SelectedBookingProvider;
