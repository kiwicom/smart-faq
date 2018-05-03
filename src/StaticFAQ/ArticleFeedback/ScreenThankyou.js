// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Close } from '@kiwicom/orbit-components/lib/icons';

import { Box, ContactPageLink } from '../../common';

const style = css`
  div.thank-you {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 251px;
  }
  div.close-icon {
    position: absolute;
    top: 8px;
    right: 8px;
  }
  div.message-1,
  div.message-2 {
    color: #171b1e;
    font-size: 16px;
  }
  div.message-2 {
    margin-bottom: 16.6px;
  }
`;
const ScreenThankyou = () => (
  <Box border="none" borderRadius="4px" backgroundColor="#f5f7f9">
    <div className="thank-you">
      <div className="close-icon">
        <Close fill="#bac7d5" height="12" />
      </div>
      <div className="message-1">Thanks again.</div>
      <div className="message-2">We appreciate your insight.</div>
      <ContactPageLink />
      <style jsx>{style}</style>
    </div>
  </Box>
);

export default ScreenThankyou;
