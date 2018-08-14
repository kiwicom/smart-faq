// @flow
/* eslint-disable react/no-unused-state */

import * as React from 'react';

import type { onLogout } from '../types';

export const getFAQSection = ({
  hasBooking,
  isPastBooking,
  isUrgent,
}: BookingStateDescription) => {
  if (!hasBooking) return 'BEFORE_BOOKING';
  if (isPastBooking) return 'PAST_BOOKING';
  if (isUrgent) return 'URGENT_BOOKING';

  return 'UPCOMING_BOOKING';
};

const initialState = {
  FAQSection: null,
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
  onLogout: onLogout,
  hasBooking: boolean,
  isPastBooking?: boolean,
  isUrgent?: boolean,
};

type StateValues = {
  FAQSection: ?FAQSectionType,
  bookingPage: 'SINGLE_BOOKING' | 'ALL_BOOKINGS',
  selectedBooking: ?number,
};

type StateCallbacks = {
  closeAllBooking: () => void,
  onDisplayAll: () => void,
  onSelectBooking: (id: number) => void,
  onSetFAQSection: (isUrgent: boolean, isPastBooking: boolean) => void,
  onLogout: onLogout,
};

type BookingStateDescription = {
  hasBooking: boolean,
  isPastBooking?: boolean,
  isUrgent?: boolean,
};

export type BookingStateType = StateValues & StateCallbacks;

export const BookingState = React.createContext({
  ...initialState,
  closeAllBooking: () => {},
  onDisplayAll: () => {},
  onSelectBooking: (id: number) => {}, // eslint-disable-line no-unused-vars
  onSetFAQSection: (isUrgent: boolean, isPastBooking: boolean) => {}, // eslint-disable-line no-unused-vars
  onLogout: () => Promise.resolve(true),
});

class BookingStateProvider extends React.Component<Props, BookingStateType> {
  constructor(props: Props) {
    super(props);
    const { hasBooking, isUrgent, isPastBooking } = props;

    this.state = {
      ...initialState,
      closeAllBooking: this.closeAllBooking,
      onLogout: this.onLogout,
      onSelectBooking: this.onClickSelect,
      onDisplayAll: this.onClickAllBooking,
      onSetFAQSection: this.onSetFAQSection,
      FAQSection: getFAQSection({ hasBooking, isUrgent, isPastBooking }),
    };
  }

  closeAllBooking = () => {
    this.setState({ bookingPage: 'SINGLE_BOOKING' });
  };

  onLogout = async () => {
    await this.props.onLogout();
    this.setState({ FAQSection: 'BEFORE_BOOKING' });
  };

  onClickAllBooking = () => {
    this.setState({ bookingPage: 'ALL_BOOKINGS' });
  };

  onClickSelect = (id: number) => {
    this.setState({ bookingPage: 'SINGLE_BOOKING', selectedBooking: id });
    const Body = document.querySelector('#SmartFAQ_Body');
    if (!Body) return;
    Body.dispatchEvent(new Event('scroll'));
  };

  onSetFAQSection = (isUrgent: boolean, isPastBooking: boolean) => {
    const section = getFAQSection({
      isUrgent,
      isPastBooking,
      hasBooking: true,
    });

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

export const withLogout = <Props>(
  Component: React.ComponentType<{ onLogout: onLogout } & Props>,
) =>
  function withLogoutHOC(props: Props) {
    return (
      <BookingState.Consumer>
        {({ onLogout }: BookingStateType) => (
          <Component {...props} onLogout={onLogout} />
        )}
      </BookingState.Consumer>
    );
  };

export default BookingStateProvider;
