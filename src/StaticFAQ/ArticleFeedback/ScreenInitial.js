// @flow

import * as React from 'react';
import css from 'styled-jsx/css';

import screensList from './screensList';
import Box from '../../common/Box';

type Props = {|
  changeScreen: (nextScreen: string) => void,
|};

const style = css`
  div.question {
    color: #7f91a8;
    font-size: 14px;
    text-align: center;
    margin-bottom: 16px;
  }
  .button {
    text-align: center;
  }
  .button button {
    padding: 12px 18px;
    border: none;
    boder-radius: 2px;
    background-color: #e8edf1;
    width: 115px;
    height: 44px;
    cursor: pointer;
  }
  .button button span {
    font-weight: bold;
    color: #46515e;
    font-size: 14px;
  }
`;
const ScreenInitial = (props: Props) => (
  <Box
    border="none"
    padding="16px 24px"
    borderRadius="4px"
    backgroundColor="#f5f7f9"
    mobileBackgroundColor="transparent"
  >
    <div className="question">
      Didn&apos;t find the answer you were looking for?
    </div>
    <div className="button">
      <button onClick={() => props.changeScreen(screensList.INPUT)}>
        <span>Ask us</span>
      </button>
    </div>
    <style jsx>{style}</style>
  </Box>
);

export default ScreenInitial;
