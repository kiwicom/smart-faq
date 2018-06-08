// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Text, Heading } from '@kiwicom/orbit-components';

import { ContactPageLink } from '../common';

const style = css`
  .staticFAQError {
    height: 78vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .title {
    margin-bottom: 8.4px;
  }
  div.contactLink {
    margin-top: 16.8px;
  }
`;

const StaticFAQError = () => (
  <div className="staticFAQError">
    <div className="title">
      <Heading>Something&apos;s not quite right.</Heading>
    </div>
    <Text type="secondary" size="large">
      Please, try refreshing the page. If the problem persists, don&apos;t
      hesitate to contact us.
    </Text>
    <div className="contactLink">
      <ContactPageLink available />
    </div>
    <style jsx>{style}</style>
  </div>
);

export default StaticFAQError;
