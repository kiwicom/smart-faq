// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Close } from '@kiwicom/orbit-components/lib/icons';

import screensList from './screensList';
import { Box, ContactPageLink } from '../../common';

type Props = {|
  changeScreen: (nextScreen: string) => void,
|};
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
    cursor: pointer;
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
const ScreenThankyou = (props: Props) => {
  return (
    <Box border="none" borderRadius="4px" backgroundColor="#f5f7f9">
      <div className="thank-you">
        <div
          className="close-icon"
          onClick={() => props.changeScreen(screensList.INITIAL)}
          onKeyUp={() => props.changeScreen(screensList.INITIAL)}
          tabIndex="-1"
          role="button"
        >
          <Close customColor="#bac7d5" size="small" />
        </div>
        <div className="message-1">Thanks again.</div>
        <div className="message-2">We appreciate your insight.</div>
        <ContactPageLink />
        <style jsx>{style}</style>
      </div>
    </Box>
  );
};

export default ScreenThankyou;
