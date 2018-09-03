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
  FAQSection: 'BEFORE_BOOKING',
  selectedBooking: null,
  showGuaranteeChat: false,
};

export type FAQSectionType =
  | 'BEFORE_BOOKING'
  | 'UPCOMING_BOOKING'
  | 'URGENT_BOOKING'
  | 'PAST_BOOKING';

type Props = {
  children: React.Node,
  isPastBooking?: boolean, // eslint-disable-line react/no-unused-prop-types
  isUrgent?: boolean, // eslint-disable-line react/no-unused-prop-types
  onLogout: onLogout,
  enableChat?: boolean,
};

type StateValues = {
  FAQSection: ?FAQSectionType,
  showGuaranteeChat: boolean,
};

type StateCallbacks = {
  onSetFAQSection: (isUrgent: boolean, isPastBooking: boolean) => void,
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
  onSetFAQSection: (isUrgent: boolean, isPastBooking: boolean) => {}, // eslint-disable-line no-unused-vars
  onLogout: () => Promise.resolve(null),
  toggleGuaranteeChat: (showGuaranteeChat: boolean) => {}, // eslint-disable-line no-unused-vars
  isChatEnabled: () => true,
});

class BookingStateProvider extends React.Component<Props, BookingStateType> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...initialState,
      onSetFAQSection: this.onSetFAQSection,
      FAQSection: getFAQSection({ hasBooking: false }),
      onLogout: this.onLogout,
      toggleGuaranteeChat: this.toggleGuaranteeChat,
      isChatEnabled: this.isChatEnabled,
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

  toggleGuaranteeChat = (showGuaranteeChat: boolean) => {
    this.setState({ showGuaranteeChat });
  };

  isChatEnabled = () => {
    return this.props.enableChat || false;
  };

  render() {
    return (
      <BookingState.Provider value={this.state}>
        {this.props.children}
      </BookingState.Provider>
    );
  }
}

export const withLogout = <Props>(Component: React.ComponentType<{} & Props>) =>
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
