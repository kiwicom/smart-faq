// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { ThumbUp, ThumbDown } from '@kiwicom/orbit-components/lib/icons';
import Trans from '@kiwicom/nitro/lib/components/Text';

import screenList from './screenList';
import voteArticle from '../../mutations/VoteArticleMutation';
import { simpleTracker } from '../../helpers/analytics/trackers';

type Props = {|
  articleId: string,
  changeScreen: (nextScreen: string) => void,
|};

const voteType = {
  UP: 'up',
  DOWN: 'down',
};

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
  const handleVote = vote => {
    const { articleId, changeScreen } = props;
    const screen =
      vote === voteType.UP ? screenList.THANK_YOU : screenList.FEEDBACK;
    const action = vote === voteType.UP ? 'upVote' : 'downVote';

    voteArticle(
      articleId,
      vote,
      () => changeScreen(screen),
      () => changeScreen(screen),
    );

    simpleTracker('smartFAQCategories', { action });
  };

  return (
    <div className="initial-screen">
      <p className="question">
        <Trans t={__('smartfaq.article_feedback.voting.title')} />
      </p>
      <div
        className="feedback-button thumb-up"
        role="button"
        onClick={() => handleVote(voteType.UP)}
        onKeyUp={() => handleVote(voteType.UP)}
        tabIndex={0}
      >
        <ThumbUp size="medium" customColor="#00a991" />
        <p>
          <Trans t={__('smartfaq.article_feedback.voting.yes')} />
        </p>
      </div>
      <div
        className="feedback-button thumb-down"
        role="button"
        onClick={() => handleVote(voteType.DOWN)}
        onKeyUp={() => handleVote(voteType.DOWN)}
        tabIndex={0}
      >
        <ThumbDown size="medium" customColor="#00a991" />
        <p>
          <Trans t={__('smartfaq.article_feedback.voting.no')} />
        </p>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default ScreenVoting;
