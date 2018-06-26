// @flow
/* eslint-disable react/no-unused-state */

import * as React from 'react';

const initialState = {
  FAQSection: 'BEFORE_BOOKING',
  bookingPage: 'SINGLE_BOOKING',
  selectedBooking: null,
};

export type FAQSectionType =
  | 'BEFORE_BOOKING'
  | 'UPCOMING_BOOKING'
  | 'URGENT_BOOKING'
  | 'PAST_BOOKING';

type Props = {
  children: React.Node,
};

type StateValues = {
  FAQSection: FAQSectionType,
  bookingPage: 'SINGLE_BOOKING' | 'ALL_BOOKINGS',
  selectedBooking: ?number,
};

type StateCallbacks = {
  onDisplayAll: () => void,
  onSelectBooking: (id: number) => void,
  onSetFAQSection: (isUrgent: boolean, isPastBooking: boolean) => void,
};

export type BookingStateType = StateValues & StateCallbacks;

export const BookingState = React.createContext({
  ...initialState,
  onDisplayAll: () => {},
  onSelectBooking: (id: number) => {}, // eslint-disable-line no-unused-vars
  onSetFAQSection: (isUrgent: boolean, isPastBooking: boolean) => {}, // eslint-disable-line no-unused-vars
});

class BookingStateProvider extends React.Component<Props, BookingStateType> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...initialState,
      onSelectBooking: this.onClickSelect,
      onDisplayAll: this.onClickAllBooking,
      onSetFAQSection: this.onSetFAQSection,
    };
  }

  onClickAllBooking = () => {
    this.setState({ bookingPage: 'ALL_BOOKINGS' });
  };

  onClickSelect = (id: number) => {
    this.setState({ bookingPage: 'SINGLE_BOOKING', selectedBooking: id });
  };

  onSetFAQSection = (isUrgent: boolean, isPastBooking: boolean) => {
    let section = 'UPCOMING_BOOKING';

    if (isUrgent) {
      section = 'URGENT_BOOKING';
    } else if (isPastBooking) {
      section = 'PAST_BOOKING';
    }

    this.setState(({ FAQSection }) => {
      if (FAQSection !== section) {
        return { FAQSection: section };
      }
    });
  };

  render() {
    return (
      <BookingState.Provider value={this.state}>
        {this.props.children}
      </BookingState.Provider>
    );
  }
}

export default BookingStateProvider;
