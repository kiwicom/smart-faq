// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Close } from '@kiwicom/orbit-components/lib/icons';

import { Box, ContactPageLink } from '../../common';
import createComment from '../../mutations/CreateCommentMutation';
import screensList from './screensList';

type Props = {|
  changeScreen: (nextScreen: string) => void,
  articleId: string,
|};
type State = {|
  comment: string,
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
  div.inputArea textarea {
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
    cursor: pointer;
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
    cursor: pointer;
  }
  div.inputArea textarea {
    padding: 12px 16px;
    font-size: 14px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    div.inputArea textarea {
      width: 100%;
    }
  }
`;

class ScreenInput extends React.Component<Props, State> {
  state = {
    comment: '',
  };
  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ comment: e.target.value });
  };
  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    const { changeScreen, articleId } = this.props;
    e.preventDefault();
    createComment(
      articleId,
      this.state.comment,
      () => changeScreen(screensList.THANK_YOU),
      () => changeScreen(screensList.ERROR),
    );
  };
  closeScreen = () => {
    this.props.changeScreen(screensList.INITIAL);
  };
  render() {
    return (
      <Box
        border="none"
        padding="40px 24px 24px 24px"
        borderRadius="4px"
        backgroundColor="#f5f7f9"
      >
        <form onSubmit={this.handleSubmit}>
          <div
            className="close-icon"
            onClick={this.closeScreen}
            onKeyUp={null}
            tabIndex="-1"
            role="button"
          >
            <Close customColor="#bac7d5" size="small" />
          </div>
          <div className="title">Your feedback helps us improve.</div>
          <div className="question">What problem were you trying to solve?</div>
          <div className="inputArea">
            <textarea />
          </div>
          <div className="button">
            <ContactPageLink />
            <button type="submit">
              <span>Submit</span>
            </button>
          </div>
        </form>
        <style jsx>{style}</style>
      </Box>
    );
  }
}

export default ScreenInput;
