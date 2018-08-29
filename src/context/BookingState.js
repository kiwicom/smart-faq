// @flow
/* eslint-disable react/no-unused-state */

import * as React from 'react';

import type { onLogout } from '../types';
import { isUrgentBooking } from '../common/booking/utils';
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
  FAQSection: 'BEFORE_BOOKING',
  selectedBooking: null,
};

export type FAQSectionType =
  | 'BEFORE_BOOKING'
  | 'UPCOMING_BOOKING'
  | 'URGENT_BOOKING'
  | 'PAST_BOOKING';

type Props = {
  children: React.Node,
  isPastBooking?: boolean, // eslint-disable-line react/no-unused-prop-types
  hasBooking: boolean,
  departureTime: ?Date,
};

type StateValues = {
  FAQSection: ?FAQSectionType,
};

type StateCallbacks = {
  onLogout: onLogout,
  toggleGuaranteeChat: (showGuaranteeChat: boolean) => void,
  isChatEnabled: () => boolean,
};

type BookingStateDescription = {
  hasBooking: boolean,
  isPastBooking?: boolean,
  isUrgent?: boolean,
};

export type BookingStateType = StateValues & StateCallbacks;

export const BookingState = React.createContext({
  ...initialState,
  onLogout: () => Promise.resolve(null),
  toggleGuaranteeChat: (showGuaranteeChat: boolean) => {}, // eslint-disable-line no-unused-vars
  isChatEnabled: () => true,
});

class BookingStateProvider extends React.Component<Props, BookingStateType> {
  constructor(props: Props) {
    super(props);
    const { hasBooking, departureTime, isPastBooking } = props;
    const isUrgent =
      isUrgentBooking !== undefined
        ? isUrgentBooking(isPastBooking === true, departureTime)
        : undefined;

    this.state = {
      ...initialState,
      onLogout: this.onLogout,
      toggleGuaranteeChat: this.toggleGuaranteeChat,
      isChatEnabled: this.isChatEnabled,
      FAQSection: getFAQSection({ hasBooking, isUrgent, isPastBooking }),
    };
  }

  onLogout = async () => {
    await this.props.onLogout();
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
