// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Text } from '@kiwicom/orbit-components';
import Trans from '@kiwicom/nitro/lib/components/Text';

const style = css`
  .BookingError {
    width: 480px;
    padding: 40px;
    background-color: #f5f7f9;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
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

const BookingError = () => (
  <div className="BookingError">
    <h1 className="title">
      <Trans t={__('smartfaq.single_booking_page.booking_error.title')} />
    </h1>
    <Text type="secondary" size="large">
      <Trans t={__('smartfaq.single_booking_page.booking_error.text')} />
    </Text>
    <style jsx>{style}</style>
  </div>
);

export default BookingError;
