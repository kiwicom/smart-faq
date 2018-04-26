// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';

const style = css`
  .UpcomingBooking {
    width: 480px;
    padding: 40px;
    background-color: #f5f7f9;
    height: 100%;
  }
  div.feedback {
    margin-top: 75%;
  }
  h1.title {
    font-family: Roboto;
    font-size: 28px;
    font-weight: bold;
    line-height: 100%;
    color: #171b1e;
    margin-bottom: 8px;
  }
`;

const BookingNotFound = () => {
  return (
    <div className="UpcomingBooking">
      <div className="feedback">
        <h1 className="title">Something&apos;s not right</h1>
        <Typography type="secondary" size="large">
          We weren&apos;t able to find your booking. Please, check your
          credentials and try again.
        </Typography>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default BookingNotFound;
