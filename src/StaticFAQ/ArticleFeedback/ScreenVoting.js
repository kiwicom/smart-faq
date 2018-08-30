// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { ThumbUp, ThumbDown } from '@kiwicom/orbit-components/lib/icons';

import screensList from './screensList';

type Props = {|
  changeScreen: (nextScreen: string) => void,
|};

const style = css`
  div.initial-screen {
    display: flex;
    align-items: center;
  }
  p.question {
    font-size: 14px;
    color: #46515e;
  }
  div.feedback-button {
    color: #00a991;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  div.feedback-button p {
    margin-left: 9px;
    font-size: 14px;
  }
  div.feedback-button.thumb-up {
    margin-left: 23px;
  }
  div.feedback-button.thumb-down {
    margin-left: 28px;
  }
`;

const ScreenVoting = (props: Props) => (
  <div className="initial-screen">
    <p className="question">Was this article helpful?</p>
    <div
      className="feedback-button thumb-up"
      onClick={() => props.changeScreen(screensList.THANK_YOU)}
    >
      <ThumbUp size="medium" customColor="#00a991" />
      <p>Yes</p>
    </div>
    <div
      className="feedback-button thumb-down"
      onClick={() => props.changeScreen(screensList.FEEDBACK)}
    >
      <ThumbDown size="medium" customColor="#00a991" />
      <p>No</p>
    </div>
    <style jsx>{style}</style>
  </div>
);

export default ScreenVoting;
