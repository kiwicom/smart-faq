// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Alert } from '@kiwicom/orbit-components';
import { Close } from '@kiwicom/orbit-components/lib/icons';

import screenList from './screenList';
import { Box } from '../../common';

type Props = {|
  changeScreen: (nextScreen: string) => void,
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
const ScreenCommentLimit = ({ changeScreen }: Props) => {
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
        <Alert type="warning">
          You&apos;ve reached the maximum of 3 feedback comments for this
          article. We&apos;ll review your notes and adjust the article if
          necessary. Thank you.
        </Alert>
        <style jsx>{style}</style>
      </div>
    </Box>
  );
};

export default ScreenCommentLimit;
