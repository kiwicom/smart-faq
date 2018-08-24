// @flow
/* eslint-disable react/no-unused-state */

import * as React from 'react';

import type { onLogout } from '../types';
import { UserContext } from './User';
import type { UserContextType } from './User';

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
};

type StateCallbacks = {
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
  onSetFAQSection: (isUrgent: boolean, isPastBooking: boolean) => {}, // eslint-disable-line no-unused-vars
  onLogout: () => Promise.resolve(true),
});

class BookingStateProvider extends React.Component<Props, BookingStateType> {
  constructor(props: Props) {
    super(props);
    const { hasBooking, isUrgent, isPastBooking } = props;

    this.state = {
      ...initialState,
      onLogout: this.onLogout,
      onSetFAQSection: this.onSetFAQSection,
      FAQSection: getFAQSection({ hasBooking, isUrgent, isPastBooking }),
    };
  }

  onLogout = async () => {
    await this.props.onLogout();
    this.setState({ FAQSection: 'BEFORE_BOOKING' });
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
      <UserContext.Consumer>
        {({ onLogout }: UserContextType) => (
          <Component {...props} onLogout={onLogout} />
        )}
      </UserContext.Consumer>
    );
  };

export default BookingStateProvider;
