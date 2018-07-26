// @flow
import React from 'react';
import css from 'styled-jsx/css';
import { Heading, Text } from '@kiwicom/orbit-components';

import ContactPageLink from './ContactPageLink';

const styles = css`
  .errorContainer {
    display: flex;
    flex: 1;
    align-items: center;
    width: 480px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 50px;
  }
  .desc {
    margin: 10px 0;
  }
`;
/* eslint-disable react/no-unescaped-entities */
const ErrorMessage = () => (
  <div className="errorContainer">
    <div>
      <Heading>Something's not quite right.</Heading>
      <div className="desc">
        <Text size="large" type="secondary">
          Please, try refreshing the page. Sign out. Then sign in again. If the
          problem persists, don't hesitate to contact us.
        </Text>
      </div>
      <ContactPageLink text="Go to contact page" textColor="#00a991" />
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default ErrorMessage;
