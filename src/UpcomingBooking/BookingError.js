// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';

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
    text-align: center;
  }
`;

const BookingError = () => {
  return (
    <div className="UpcomingBooking">
      <div className="feedback">
        <Typography type="secondary" size="large">
          No Bookings found
        </Typography>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default BookingError;
