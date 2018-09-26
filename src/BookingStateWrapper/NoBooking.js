// @flow

import * as React from 'react';

import BookingStateProvider from '../context/BookingState';

type Props = {
  children: React.Node,
  loading?: boolean,
  error?: boolean,
  notFound?: boolean,
};

const NoBooking = ({ children, loading, notFound, error }: Props) => (
  <BookingStateProvider
    hasBooking={false}
    departureTime={null}
    booking={null}
    loadingStatus={{
      notFound: true,
      ...((loading && { loading }) || {}),
      ...((error && { error }) || {}),
      ...((notFound && { notFound }) || {}),
    }}
  >
    {children}
  </BookingStateProvider>
);

export default NoBooking;
