// @flow

import * as React from 'react';
import { Typography } from '@kiwicom/orbit-components';
import css from 'styled-jsx/css';

import Box from '../common/Box';
import Markdown from '../common/Markdown';
import type { FAQArticleDetailContent_article } from './__generated__/FAQArticleDetailContent_article.graphql';

type Props = {};
type State = {
  screen: 'initial' | 'form' | 'thank_you',
};
const style = css`
  .FAQArticleFeedback {
    margin-top: 24px;
  }
`;
const buttonStyle = css`
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
  }
  .button button span {
    font-weight: bold;
    color: #46515e;
    font-size: 14px;
  }
`;

const ButtonBox = () => {
  return (
    <Box
      border="none"
      padding="16px 24px"
      borderRadius="4px"
      backgroundColor="#f5f7f9"
    >
      <div className="question">
        Didn&apos;t find the answer you were looking for?
      </div>
      <div className="button">
        <button>
          <span>Ask us</span>
        </button>
      </div>
      <style jsx>{buttonStyle}</style>
    </Box>
  );
};
//const FAQArticleFeedback = (props: Props) => <div className="" />;

class FAQArticleFeedback extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      screen: 'initial',
    };
  }
  renderScreen() {
    switch (this.state.screen) {
      case 'initial':
        return <ButtonBox />;
    }
  }
  render() {
    return (
      <div className="FAQArticleFeedback">
        {this.renderScreen()}
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default FAQArticleFeedback;
