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
|};
type State = {|
  comment: string,
|};

const style = css`
  div.question {
    margin-bottom: 4px;
    margin-top: 8px;
  }
  div.inputArea textarea {
    width: 100%;
    height: 72px;
    border-radius: 3px;
    background-color: #ffffff;
    border: solid 1px #bac7d5;
    resize: none;
  }
  div.button {
    display: flex;
    justify-content: flex-end;
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
  @media only screen and (max-width: 812px) {
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
          <Heading weight="bold" size="small">
            Your feedback helps us improve.
          </Heading>
          <div className="question">
            <Text>What problem were you trying to solve?</Text>
          </div>
          <div className="inputArea">
            <textarea data-gramm_editor="false" />
          </div>
          <div className="button">
            <Button title="Submit" onClick={() => {}} width={100} />
          </div>
        </form>
        <style jsx>{style}</style>
      </Box>
    );
  }
}

export default ScreenInput;
