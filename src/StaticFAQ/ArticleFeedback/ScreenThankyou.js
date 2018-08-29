// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Heading } from '@kiwicom/orbit-components';
import { Close } from '@kiwicom/orbit-components/lib/icons';

import screensList from './screensList';
import { Box } from '../../common';

type Props = {|
  changeScreen: (nextScreen: string) => void,
|};

const style = css`
  div.feedbackMessage {
    text-align: center;
    padding: 32px 83px;
  }
  div.close-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`;

const ScreenThankyou = (props: Props) => {
  return (
    <Box border="none" borderRadius="4px" backgroundColor="#f5f7f9">
      <div className="feedbackMessage">
        <div
          className="close-icon"
          onClick={() => props.changeScreen(screensList.INITIAL)}
          onKeyUp={null}
          tabIndex="-1"
          role="button"
        >
          <Close customColor="#bac7d5" size="small" />
        </div>
        <Heading type="title2">Thanks, we appreciate your insight.</Heading>
        <style jsx>{style}</style>
      </div>
    </Box>
  );
};

export default ScreenThankyou;
