// @flow
/* eslint-disable react/no-unused-state */

import * as React from 'react';

import type { BasicBookingData } from '../types';
import { isUrgentBooking } from '../common/booking/utils';

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
  booking: null,
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
  isPastBooking?: boolean,
  departureTime: ?Date,
  booking: ?BasicBookingData,
};

type StateValues = {
  FAQSection: ?FAQSectionType,
  booking: ?BasicBookingData,
};

type StateCallbacks = {};

type BookingStateDescription = {
  hasBooking: boolean,
  isPastBooking?: boolean,
  isUrgent?: boolean,
};

export type BookingStateType = StateValues & StateCallbacks;

export const BookingState = React.createContext({
  ...initialState,
});

class BookingStateProvider extends React.Component<Props, BookingStateType> {
  constructor(props: Props) {
    super(props);
    const { hasBooking, departureTime, isPastBooking, booking } = props;
    const isUrgent =
      isUrgentBooking !== undefined
        ? isUrgentBooking(isPastBooking === true, departureTime)
        : undefined;

    this.state = {
      ...initialState,
      FAQSection: getFAQSection({ hasBooking, isUrgent, isPastBooking }),
      booking,
    };
  }

  render() {
    return (
      <BookingState.Provider value={this.state}>
        {this.props.children}
      </BookingState.Provider>
    );
  }
}

export default BookingStateProvider;
