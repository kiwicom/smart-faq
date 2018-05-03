// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Close } from '@kiwicom/orbit-components/lib/icons';

import { Box, ContactPageLink } from '../../common';

type Props = {|
  submitComment: () => void,
|};

const style = css`
  div.title {
    color: #171b1e;
    font-size: 16px;
    margin-bottom: 8px;
  }
  div.question {
    font-size: 14px;
    color: #46515e;
    margin-bottom: 4px;
  }
  div.input-area textarea {
    width: 352px;
    height: 72px;
    border-radius: 3px;
    background-color: #ffffff;
    border: solid 1px #bac7d5;
  }
  div.button button {
    font-weight: bold;
    font-size: 14px;
    width: 100px;
    height: 44px;
    border-radius: 3px;
    border: none;
    background-color: #00a991;
    color: #ffffff;
  }
  div.button {
    display: flex;
    justify-content: space-between;
    margin-top: 19px;
  }
  div.close-icon {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;
const ScreenInput = (props: Props) => (
  <Box
    border="none"
    padding="40px 24px 24px 24px"
    borderRadius="4px"
    backgroundColor="#f5f7f9"
  >
    <div className="close-icon">
      <Close fill="#bac7d5" height="12" />
    </div>
    <div className="title">Your feedback helps us improve.</div>
    <div className="question">What problem were you trying to solve?</div>
    <div className="input-area">
      <textarea />
    </div>
    <div className="button">
      <ContactPageLink />
      <button onClick={props.submitComment}>
        <span>Submit</span>
      </button>
    </div>
    <style jsx>{style}</style>
  </Box>
);

export default ScreenInput;
