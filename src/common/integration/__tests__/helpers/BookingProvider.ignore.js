// @flow
import * as React from 'react';

import BookingStateProvider from '../../../../context/BookingState';

type Props = {
  children: React.Node,
};

const BookingHelper = (props: Props) => (
  <BookingStateProvider>{props.children}</BookingStateProvider>
);

export default BookingHelper;
