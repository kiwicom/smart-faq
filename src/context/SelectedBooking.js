// @flow
/* eslint-disable react/no-unused-state */

import * as React from 'react';

type Props = {|
  // isOpen required here only to trigger processUrl when opening/closing SmartFAQ
  isOpen: boolean, // eslint-disable-line react/no-unused-prop-types
  children: React.Node,
|};
type StateValues = {
  selectedBooking: ?number,
  bookingPage: 'SINGLE_BOOKING' | 'ALL_BOOKINGS',
  userSelectedBooking: boolean,
};

type StateCallbacks = {
  closeAllBooking: () => void,
  onDisplayAll: () => void,
  onSelectBooking: (id: number) => void,
};

export type State = StateValues & StateCallbacks;

const initialState: StateValues = {
  selectedBooking: null,
  userSelectedBooking: false,
  bookingPage: 'SINGLE_BOOKING',
};

export const processUrl = (selectedBooking: ?number) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const urlMatch = window.location.href.match(
    /.*(?:kiwi.com|localhost:\d*)\/.*\/(?:account\/bookings|manage)\/(\d*)\?.*$/,
  );
  const bookingId = urlMatch && Number(urlMatch[1]);
  if (bookingId && bookingId !== selectedBooking) {
    return { selectedBooking: bookingId };
  }
  return null;
};

export const SelectedBooking = React.createContext({
  ...initialState,
  closeAllBooking: () => {},
  onDisplayAll: () => {},
  onSelectBooking: (id: number) => {}, // eslint-disable-line no-unused-vars
});

class SelectedBookingProvider extends React.Component<Props, State> {
  static getDerivedStateFromProps(props: Props, state: State) {
    // when user specifically selected one booking, don't change his settings by this
    return state.userSelectedBooking ? null : processUrl(state.selectedBooking);
  }

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
    this.setState({
      bookingPage: 'SINGLE_BOOKING',
      selectedBooking: id,
      userSelectedBooking: true,
    });
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
