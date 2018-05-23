// @flow

import * as React from 'react';

export const ClickAllBooking = React.createContext(() => {});

export const ClickSelectBooking = React.createContext(
  (id: string) => {}, // eslint-disable-line no-unused-vars
);
