// @flow

import * as React from 'react';
import css from 'styled-jsx/css';

import ScreenInitial from './ScreenInitial';
import ScreenInput from './ScreenInput';
import ScreenThankyou from './ScreenThankyou';
import screensList from './screensList';

type Props = {};
type State = {
  screen: $Values<screensList>,
};
const style = css`
  .FAQArticleFeedback {
    margin-top: 24px;
  }
`;
//const thankyouScreenStyle = css`
//  div.thank-you {
//    display: flex;
//    flex-direction: column;
//    justify-content: center;
//    align-items: center;
//    height: 251px;
//  }
//  div.close-icon {
//    position: absolute;
//    top: 8px;
//    right: 8px;
//  }
//  div.message-1,
//  div.message-2 {
//    color: #171b1e;
//    font-size: 16px;
//  }
//  div.message-2 {
//    margin-bottom: 16.6px;
//  }
//`;

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
  //screenInput = () => {
  //  return (
  //    <Box
  //      border="none"
  //      padding="40px 24px 24px 24px"
  //      borderRadius="4px"
  //      backgroundColor="#f5f7f9"
  //    >
  //      <div className="close-icon">
  //        <Close fill="#bac7d5" height="12" />
  //      </div>
  //      <div className="title">Your feedback helps us improve.</div>
  //      <div className="question">What problem were you trying to solve?</div>
  //      <div className="input-area">
  //        <textarea />
  //      </div>
  //      <div className="button">
  //        <ContactPageLink />
  //        <button onClick={() => this.changeScreen(feedbackScreens.THANK_YOU)}>
  //          <span>Submit</span>
  //        </button>
  //      </div>
  //      <style jsx>{inputScreenStyle}</style>
  //    </Box>
  //  );
  //};
  //screenThankYou = () => {
  //  return (
  //    <Box border="none" borderRadius="4px" backgroundColor="#f5f7f9">
  //      <div className="thank-you">
  //        <div className="close-icon">
  //          <Close fill="#bac7d5" height="12" />
  //        </div>
  //        <div className="message-1">Thanks again.</div>
  //        <div className="message-2">We appreciate your insight.</div>
  //        <ContactPageLink />
  //        <style jsx>{thankyouScreenStyle}</style>
  //      </div>
  //    </Box>
  //  );
  //};
  renderScreen() {
    switch (this.state.screen) {
      case screensList.INITIAL:
        return <ScreenInitial changeScreen={this.changeScreen} />;
      case screensList.INPUT:
        return <ScreenInput submitComment={() => {}} />;
      case screensList.THANK_YOU:
        return <ScreenThankyou />;
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
