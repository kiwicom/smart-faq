// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Text } from '@kiwicom/orbit-components';

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
    <h1 className="title">Something&apos;s not right</h1>
    <Text type="secondary" size="large">
      We weren&apos;t able to find your booking. Please, check your credentials
      and try again.
    </Text>
    <style jsx>{style}</style>
  </div>
);

export default BookingError;
