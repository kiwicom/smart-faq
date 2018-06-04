// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { SystemMessage } from '@kiwicom/orbit-components';
import { Close, Alert } from '@kiwicom/orbit-components/lib/icons';

import screensList from './screensList';
import { Box } from '../../common';

type Props = {|
  changeScreen: (nextScreen: string) => void,
|};

const style = css`
  div.thankYou {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 251px;
    padding-left: 14px;
    padding-right: 14px;
  }
  div.closeIcon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
  div.systemMessage {
    margin-bottom: 16px;
  }
`;
const ScreenError = (props: Props) => {
  return (
    <Box border="none" borderRadius="4px" backgroundColor="#f5f7f9">
      <div className="thankYou">
        <div
          className="closeIcon"
          onClick={() => props.changeScreen(screensList.INITIAL)}
          onKeyUp={null}
          tabIndex="-1"
          role="button"
        >
          <Close customColor="#bac7d5" size="small" />
        </div>
        <div className="systemMessage">
          <SystemMessage
            title="Feedback form failed"
            type="warning"
            Icon={Alert}
          >
            Our bad. We weren&apos;t able to send your feedback. But, follow the
            link below to drop us a line.
          </SystemMessage>
        </div>
        <style jsx>{style}</style>
      </div>
    </Box>
  );
};

export default ScreenError;
