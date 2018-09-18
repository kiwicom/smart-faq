// @flow

import * as React from 'react';
import css from 'styled-jsx/css';

import ScreenVoting from './ScreenVoting';
import ScreenFeedback from './ScreenFeedback';
import ScreenAdditionalFeedback from './ScreenAdditionalFeedback';
import ScreenThankyou from './ScreenThankyou';
import ScreenError from './ScreenError';
import ScreenCommentLimit from './ScreenCommentLimit';
import screenList from './screenList';
import { ContactPageLink } from '../../common';
import UserStatus from '../../helpers/UserStatus';

type Props = {
  articleId: string,
};
type State = {
  screen: $Values<typeof screenList>,
  commentType: string,
};
const style = css`
  .FAQArticleFeedback {
    margin-top: 24px;
  }
`;

class FAQArticleFeedback extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      screen: screenList.VOTING,
      commentType: '',
    };
  }

  changeScreen = (screen: string) => {
    this.setState({ screen });
  };

  handleCommentTypeChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { target } = event;
    if (!(target instanceof window.HTMLInputElement)) return;

    this.setState({ commentType: target.value });
  };

  clearCommentType = () => {
    this.setState({ commentType: '' });
  };

  renderScreen() {
    switch (this.state.screen) {
      case screenList.VOTING:
        return (
          <ScreenVoting
            articleId={this.props.articleId}
            changeScreen={this.changeScreen}
          />
        );
      case screenList.FEEDBACK:
        return (
          <ScreenFeedback
            changeScreen={this.changeScreen}
            handleCommentTypeChange={this.handleCommentTypeChange}
            commentType={this.state.commentType}
          />
        );
      case screenList.ADDITIONAL_FEEDBACK:
        return (
          <ScreenAdditionalFeedback
            articleId={this.props.articleId}
            changeScreen={this.changeScreen}
            commentType={this.state.commentType}
            clearCommentType={this.clearCommentType}
          />
        );
      case screenList.THANK_YOU:
        return <ScreenThankyou changeScreen={this.changeScreen} />;
      case screenList.ERROR:
        return <ScreenError changeScreen={this.changeScreen} />;
      case screenList.COMMENT_LIMIT:
        return <ScreenCommentLimit changeScreen={this.changeScreen} />;
    }
    return (
      <ScreenVoting
        articleId={this.props.articleId}
        changeScreen={this.changeScreen}
      />
    );
  }

  render() {
    return (
      <div className="FAQArticleFeedback" data-cy="faq-article-form">
        {this.renderScreen()}
        <UserStatus.LoggedIn>
          <ContactPageLink />
        </UserStatus.LoggedIn>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default FAQArticleFeedback;
