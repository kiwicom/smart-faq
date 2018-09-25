// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Text } from '@kiwicom/orbit-components';

const style = css`
  .UpcomingBooking {
    width: 480px;
    padding: 40px;
    padding-top: 128px;
    background-color: #f5f7f9;
    height: 100%;
  }
  div.feedback {
    margin-top: 32px;
    display: flex;
    justify-content: center;
  }
`;

const BookingNotFound = () => (
  <div className="UpcomingBooking">
    <div className="feedback">
      <Text type="secondary" size="large">
        No bookings found
      </Text>
    </div>
    <style jsx>{style}</style>
  </div>
);

export default BookingNotFound;
