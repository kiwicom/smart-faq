// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';

import { Requester } from '../helpers/Requests';
import BackButton from '../common/buttons/BackButton';
import CloseButton from '../common/buttons/CloseButton';
import Input from '../common/Input';
import image from '../../static/woman-with-laptop@2x.jpg';
import routeDefinitions from '../routeDefinitions';

const style = css`
  .ForgottenPassword {
    width: 480px;
    padding-top: 128px;
  }
  div.picture img {
    width: 203px;
    height: 156px;
  }
  div.picture {
    margin-left: 150px;
    margin-bottom: 68px;
  }
  div.main {
    margin-left: 40px;
    margin-right: 40px;
  }
  p.title {
    color: #171b1e;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
    line-height: 1.2;
  }
  button.send {
    width: 83px;
    background-color: #00a991;
    border: 0;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    color: #ffffff;
  }
  label {
    display: inline-block;
    width: 300px;
    height: 44px;
  }
  form {
    margin: 32.8px 40px 0px 40px;
  }
  div.input {
    display: inline-block;
    width: 100%;
    height: 44px;
    margin-top: 4px;
  }
  form button {
    width: 83px;
    height: 44px;
    border-radius: 3px;
    background-color: #00a991;
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;
    line-height: 1.43;
    text-align: center;
    border: none;
    margin-left: 8px;
    display: inline-block;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .ForgottenPassword {
      width: 100%;
      padding-top: 64px;
    }
    div.picture {
      display: none;
    }
    div.main {
      margin-left: 16px;
      margin-right: 16px;
    }
    form {
      margin: 28px 16px 0px 16px;
    }
    label {
      display: block;
      width: 100%;
      height: 44px;
      margin-bottom: 33px;
    }
    form button {
      width: 100%;
      border-radius: 3px;
      margin-bottom: 0px;
      margin-left: 0px;
      display: block;
      width: 100%;
    }
    button.send {
      width: 288px;
      height: 44px;
    }
  }
`;

type Props = {
  history: {
    push: ({
      pathname: string,
      state: {
        email: string,
      },
    }) => void,
  },
};

type State = {|
  email: string,
|};

class ForgottenPasword extends React.Component<Props, State> {
  state = {
    email: '',
  };

  handleChangeEmail = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handleSubmitEmail = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = this.state;
    Requester.resetPassword(email);
    this.props.history.push({
      pathname: routeDefinitions.CHECK_RECOVERY_LINK,
      state: { email },
    });
  };

  render() {
    return (
      <div className="ForgottenPassword">
        <CloseButton />
        <BackButton text="Back" />
        <div className="picture">
          <img alt="Help" src={image} />
        </div>
        <div className="main">
          <p className="title">Forgotten password</p>
          <Typography type="secondary">
            {`Please enter your email address. We'll send you instructions to reset your password.`}
          </Typography>
        </div>
        <form onSubmit={this.handleSubmitEmail}>
          <label htmlFor="email">
            <div>Email:</div>
            <div className="input">
              <Input
                type="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                placeholder="e.g. your@email.com"
                required
              />
            </div>
          </label>
          <button className="send">Send</button>
        </form>
        <style jsx>{style}</style>
      </div>
    );
  }
}
export default ForgottenPasword;
