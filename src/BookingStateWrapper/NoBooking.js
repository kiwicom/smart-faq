// @flow

import * as React from 'react';

import BookingStateProvider from '../context/BookingState';
import type { onLogout } from '../types';

type Props = {
  children: React.Node,
  onLogout: onLogout,
};

const NoBooking = ({ children, onLogout }: Props) => (
  <BookingStateProvider
    hasBooking={false}
    onLogout={onLogout}
    departureTime={null}
    booking={null}
  >
    {children}
  </BookingStateProvider>
);

export default NoBooking;
