// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Alert } from '@kiwicom/orbit-components';
import { Close } from '@kiwicom/orbit-components/lib/icons';
import Trans from '@kiwicom/nitro/lib/components/Text';

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
  const warningMessage = commentLimitReached ? (
    <Trans
      t={__('smartfaq.article_feedback.error_message.comment_limit_reached')}
    />
  ) : (
    <Trans
      t={__('smartfaq.article_feedback.error_message.feedback_not_received')}
    />
  );

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
