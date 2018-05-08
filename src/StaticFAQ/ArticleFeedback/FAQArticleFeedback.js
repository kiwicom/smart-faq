// @flow

import * as React from 'react';
import css from 'styled-jsx/css';

import ScreenInitial from './ScreenInitial';
import ScreenInput from './ScreenInput';
import ScreenThankyou from './ScreenThankyou';
import screensList from './screensList';

type Props = {
  articleId: string,
};
type State = {
  screen: $Values<typeof screensList>,
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
      screen: screensList.INITIAL,
    };
  }
  changeScreen = (screen: string) => {
    this.setState({ screen });
  };
  renderScreen() {
    switch (this.state.screen) {
      case screensList.INITIAL:
        return <ScreenInitial changeScreen={this.changeScreen} />;
      case screensList.INPUT:
        return (
          <ScreenInput
            articleId={this.props.articleId}
            changeScreen={this.changeScreen}
          />
        );
      case screensList.THANK_YOU:
        return <ScreenThankyou changeScreen={this.changeScreen} />;
    }
    return <ScreenInitial changeScreen={this.changeScreen} />;
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
