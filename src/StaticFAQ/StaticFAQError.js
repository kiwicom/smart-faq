// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Text, Heading } from '@kiwicom/orbit-components';
import Trans from '@kiwicom/nitro/lib/components/Text';

import { ContactPageLink } from '../common';

const style = css`
  .staticFAQError {
    height: 100%;
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
      <Heading>
        <Trans t={__('smartfaq.single_booking_page.booking_error.title')} />
      </Heading>
    </div>
    <Text type="secondary" size="large">
      <Trans t={__('smartfaq.faq.error_page.description')} />
    </Text>
    <div className="contactLink">
      <ContactPageLink />
    </div>
    <style jsx>{style}</style>
  </div>
);

export default StaticFAQError;
