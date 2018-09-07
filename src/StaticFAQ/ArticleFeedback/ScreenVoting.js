// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { ThumbUp, ThumbDown } from '@kiwicom/orbit-components/lib/icons';

import screenList from './screenList';
import { simpleTracker } from '../../helpers/analytics/trackers';

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

const ScreenVoting = (props: Props) => {
  const handleUpVote = () => {
    simpleTracker('smartFAQCategories', { action: 'upVote' });
    props.changeScreen(screenList.THANK_YOU);
  };

  const handleDownVote = () => {
    simpleTracker('smartFAQCategories', { action: 'downVote' });
    props.changeScreen(screenList.FEEDBACK);
  };

  return (
    <div className="initial-screen">
      <p className="question">Was this article helpful?</p>
      <div
        className="feedback-button thumb-up"
        role="button"
        onClick={handleUpVote}
        onKeyUp={handleUpVote}
        tabIndex={0}
      >
        <ThumbUp size="medium" customColor="#00a991" />
        <p>Yes</p>
      </div>
      <div
        className="feedback-button thumb-down"
        role="button"
        onClick={handleDownVote}
        onKeyUp={handleDownVote}
        tabIndex={0}
      >
        <ThumbDown size="medium" customColor="#00a991" />
        <p>No</p>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default ScreenVoting;
