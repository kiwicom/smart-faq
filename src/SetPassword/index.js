// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography, Button } from '@kiwicom/orbit-components';
import routeDefinitions from '../routeDefinitions';
import CloseIcon from '../common/CloseIcon';
import Input from '../common/Input';

const style = css`
  .SetPassword {
    width: 480px;
    padding-top: 422px;
  }
  div.text {
    margin: 0px 40px 32.4px 40px;
  }
  p.title {
    color: #171b1e;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  label {
    font-size: 14px;
    color: #46515e;
  }
  form {
    margin: 0px 40px 0px 40px;
  }
  .input {
    display: inline-block;
    width: 309px;
    height: 44px;
    margin-top: 4px;
    margin-right: 8px;
  }
  form button {
    width: 83px;
    height: 44px;
    border-radius: 3px;
    background-color: #00a991;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
  }
  span.label {
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
  }
`;

type Props = {
  history: {
    push: string => void,
  },
};

type State = {|
  password: string,
|};

class SetPassword extends React.Component<Props, State> {
  state = {
    password: '',
  };

  handleChangePassword = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.history.push(routeDefinitions.PASSWORD_IS_SET);
  };

  render() {
    return (
      <div className="SetPassword">
        <CloseIcon />
        <div className="text">
          <p className="title">Create a new password</p>
          <Typography type="secondary">
            Please enter your new secure password.
          </Typography>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            New password:
            <div className="input">
              <Input
                type="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </div>
          </label>
          <Button
            isDisabled={false}
            onClick={() => {}}
            size="large"
            title="Set"
            type="primary"
          />
        </form>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default SetPassword;
