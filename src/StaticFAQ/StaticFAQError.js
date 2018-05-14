// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';

import { ContactPageLink } from '../common';

const style = css`
  .staticFAQError {
    height: 78vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  h1.title {
    font-family: Roboto;
    font-size: 28px;
    font-weight: bold;
    line-height: 1.2;
    color: #171b1e;
    margin-bottom: 8.4px;
  }
  div.contactLink {
    margin-top: 16.8px;
  }
`;

const StaticFAQError = () => (
  <div className="staticFAQError">
    <h1 className="title">Something&apos;s not quite right.</h1>
    <Typography type="secondary" size="large">
      Please, try refreshing the page. If the problem persists, don&apos;t
      hesitate to contact us.
    </Typography>
    <div className="contactLink">
      <ContactPageLink />
    </div>
    <style jsx>{style}</style>
  </div>
);

export default StaticFAQError;
