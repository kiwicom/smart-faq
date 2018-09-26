// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Alert } from '@kiwicom/orbit-components';
import { Close } from '@kiwicom/orbit-components/lib/icons';

import screenList from './screenList';
import { Box } from '../../common';

type Props = {|
  changeScreen: (nextScreen: string) => void,
  commentLimitReached?: boolean,
|};

const style = css`
  div.feedbackMessage {
    padding: 32px 24px;
  }
  div.closeIcon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`;

const ScreenError = ({ changeScreen, commentLimitReached }: Props) => {
  const warningMessage = commentLimitReached
    ? `You've reached the daily maximum number of comments. We'll review your notes and adjust the article if necessary. Thank you.`
    : `Sorry, we didn't receive your feedback. Please refresh the page or try again later.`;

  return (
    <Box border="none" borderRadius="4px" backgroundColor="#f5f7f9">
      <div className="feedbackMessage">
        <div
          className="closeIcon"
          onClick={() => changeScreen(screenList.VOTING)}
          onKeyUp={null}
          tabIndex="-1"
          role="button"
        >
          <Close customColor="#bac7d5" size="small" />
        </div>
        <Alert type="warning" icon={commentLimitReached ? false : true}>
          {warningMessage}
        </Alert>
        <style jsx>{style}</style>
      </div>
    </Box>
  );
};

export default ScreenError;
