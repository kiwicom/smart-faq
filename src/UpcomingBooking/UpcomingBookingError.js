// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';
import routeDefinitions from '../routeDefinitions';
import { BackButton, CloseButton } from '../common';

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

const UpcomingBookingError = () => {
  return (
    <div className="UpcomingBooking">
      <BackButton text="Back" link={routeDefinitions.HOME} />
      <CloseButton />
      <div className="feedback">
        <Typography type="secondary" size="large">
          No Bookings found
        </Typography>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default UpcomingBookingError;
