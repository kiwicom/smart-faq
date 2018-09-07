// @flow

import * as React from 'react';
import css from 'styled-jsx/css';

import ScreenVoting from './ScreenVoting';
import ScreenFeedback from './ScreenFeedback';
import ScreenAdditionalFeedback from './ScreenAdditionalFeedback';
import ScreenThankyou from './ScreenThankyou';
import ScreenError from './ScreenError';
import screensList from './screensList';
import { ContactPageLink } from '../../common';
import UserStatus from '../../helpers/UserStatus';

type Props = {
  articleId: string,
};
type State = {
  screen: $Values<typeof screensList>,
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
      screen: screensList.VOTING,
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
      case screensList.VOTING:
        return <ScreenVoting changeScreen={this.changeScreen} />;
      case screensList.FEEDBACK:
        return (
          <ScreenFeedback
            changeScreen={this.changeScreen}
            handleCommentTypeChange={this.handleCommentTypeChange}
            commentType={this.state.commentType}
          />
        );
      case screensList.ADDITIONAL_FEEDBACK:
        return (
          <ScreenAdditionalFeedback
            articleId={this.props.articleId}
            changeScreen={this.changeScreen}
            commentType={this.state.commentType}
            clearCommentType={this.clearCommentType}
          />
        );
      case screensList.THANK_YOU:
        return <ScreenThankyou changeScreen={this.changeScreen} />;
      case screensList.ERROR:
        return <ScreenError changeScreen={this.changeScreen} />;
    }
    return <ScreenVoting changeScreen={this.changeScreen} />;
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
