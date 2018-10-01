// @flow
import React from 'react';
import css from 'styled-jsx/css';
import { Heading, Text } from '@kiwicom/orbit-components';
import Trans from '@kiwicom/nitro/lib/components/Text';

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
      <Heading>
        <Trans t={__('smartfaq.error_message.title')} />
      </Heading>
      <div className="desc">
        <Text size="large" type="secondary">
          <Trans t={__('smartfaq.error_message.description')} />
        </Text>
      </div>
      <ContactPageLink
        text={__('smartfaq.error_message.contact_page_link')}
        textColor="#00a991"
      />
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default ErrorMessage;
