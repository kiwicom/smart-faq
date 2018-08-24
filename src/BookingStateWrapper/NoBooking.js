// @flow

import * as React from 'react';

import BookingStateProvider from '../context/BookingState';

type Props = {
  children: React.Node,
};

const NoBooking = ({ children }: Props) => (
  <BookingStateProvider hasBooking={false} onLogout={async () => null}>
    {children}
  </BookingStateProvider>
);

export default NoBooking;
