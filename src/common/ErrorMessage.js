// @flow
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import css from 'styled-jsx/css';
import { Heading, Typography, TextLink } from '@kiwicom/orbit-components';
import { NewWindow } from '@kiwicom/orbit-components/lib/icons';

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

const ErrorMessage = () => (
  <div className="errorContainer">
    <div>
      <Heading weight="bold">Something's not quite right.</Heading>
      <div className="desc">
        <Typography size="large" type="secondary">
          Please, try refreshing the page. Sign out. Then sign in again. If the
          problem persists, don't hesitate to contact us.
        </Typography>
      </div>
      <p>
        <TextLink url="" title="Go to contact page" onClick={() => {}} />
        {` `}
        <NewWindow size="small" color="secondary" />
      </p>
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default ErrorMessage;
