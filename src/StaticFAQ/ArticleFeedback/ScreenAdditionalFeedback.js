// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Heading, Text, Button } from '@kiwicom/orbit-components';
import { Close } from '@kiwicom/orbit-components/lib/icons';

import { Box } from '../../common';
import createComment from '../../mutations/CreateCommentMutation';
import screensList from './screensList';

type Props = {|
  changeScreen: (nextScreen: string) => void,
  articleId: string,
  commentType: string,
  clearCommentType: () => void,
|};

type State = {|
  comment: string,
|};

const style = css`
  div.question {
    margin-top: 16px;
    margin-bottom: 4px;
  }
  div.inputArea.invalid textarea {
    border-color: #d21c1c;
  }
  div.inputArea p {
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 400;
    color: #d21c1c;
  }
  div.inputArea textarea {
    width: 100%;
    height: 72px;
    border-radius: 3px;
    background-color: #ffffff;
    border: solid 1px #bac7d5;
    resize: none;
  }
  div.inputArea textarea::placeholder {
    color: #bac7d5;
  }
  div.button {
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
  @media only screen and (max-width: 901px) {
    div.inputArea textarea {
      width: 100%;
    }
  }
`;

class ScreenAdditionalFeedback extends React.Component<Props, State> {
  state = {
    comment: '',
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { changeScreen, articleId, commentType } = this.props;
    const { comment } = this.state;

    createComment(
      articleId,
      commentType,
      comment,
      () => changeScreen(screensList.THANK_YOU),
      () => changeScreen(screensList.ERROR),
    );
    this.props.clearCommentType();
  };

  closeScreen = () => {
    this.props.changeScreen(screensList.VOTING);
    this.props.clearCommentType();
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
          <Heading type="title3">
            Please tell us more about your issue with the article (optional)
          </Heading>
          <div className="question">
            <Text>Comment</Text>
          </div>
          <div className="inputArea">
            <textarea
              data-gramm_editor="false"
              onChange={this.handleChange}
              value={this.state.comment}
              placeholder="How could this be better?"
            />
          </div>
          <div className="button">
            <Button onClick={() => {}}>Submit</Button>
          </div>
        </form>
        <style jsx>{style}</style>
      </Box>
    );
  }
}

export default ScreenAdditionalFeedback;
