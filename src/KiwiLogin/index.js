// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';
import { Typography, SystemMessage } from '@kiwicom/orbit-components';
import { AlertCircle } from '@kiwicom/orbit-components/lib/icons';

import { ScrollableContent } from './../common';
import CloseButton from './../common/buttons/CloseButton';
import BackButton from '../common/buttons/BackButton';
import Input from '../common/Input';
import { withLogin } from '../context/User';
import image from '../../static/woman-with-laptop@2x.jpg';
import type { onLogin } from '../types';

const style = css`
  div.picture img {
    width: 203px;
    height: 156px;
  }
  div.picture {
    margin-left: 110px;
    margin-bottom: 68px;
  }
  p.title {
    color: #171b1e;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
    line-height: 1.2;
  }
  .forgotPassword {
    margin-top: 12px;
    display: inline-block;
  }
  .singIn {
    float: right;
    margin-bottom: 20px;
  }
  .singIn button {
    width: 100px;
    height: 44px;
    border-radius: 3px;
    background-color: #00a991;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    border: none;
  }
  form {
    margin-top: 32.8px;
  }
  div.input {
    width: 400px;
    height: 44px;
    margin-bottom: 34px;
    margin-top: 4px;
  }
  label {
    width: 352px;
    height: 20px;
    font-size: 14px;
    line-height: 1.43;
    text-align: left;
    color: #46515e;
    display: inline-table;
  }
  div.errorMessage {
    margin-bottom: 15px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .KiwiLogin {
      width: 100%;
      padding-top: 64px;
      padding-left: 0px;
      padding-right: 0px;
    }
    div.picture {
      display: none;
    }
    div.input {
      width: 100%;
      margin-bottom: 26px;
    }
    div.main {
      margin-left: 16px;
      margin-right: 16px;
    }
    div.forgotPassword {
      text-align: center;
      display: block;
      margin-bottom: 20px;
      margin-top: 0px;
    }
    .singIn button {
      width: 100%;
    }
    label {
      width: 100%;
    }
  }
`;
type Props = {
  onLogin: onLogin,
  history: {
    push: string => void,
  },
};

type State = {|
  email: string,
  password: string,
  showError: boolean,
|};

class KiwiLogin extends React.Component<Props, State> {
  state = {
    email: '',
    password: '',
    showError: false,
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.showError && this.setState({ showError: false });
  };
  handleSignIn = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await this.props.onLogin(
        this.state.email,
        this.state.password,
      );

      if (!response) {
        throw new Error('Login failed.');
      }

      this.props.history.push('/faq/');
    } catch (e) {
      this.setState({ showError: true });
    }
  };
  render() {
    const { showError } = this.state;
    return (
      <ScrollableContent styles="width: 480px; padding: 128px 40px 0 40px">
        <CloseButton />
        <BackButton text="Back" />
        <div className="picture">
          <img alt="Help" src={image} />
        </div>
        <div className="main">
          <p className="title">Kiwi.com account</p>
          <Typography type="secondary">
            {
              'If you have an account with us, just use your credentials to sign in.'
            }
          </Typography>
          <form onSubmit={this.handleSignIn}>
            <label htmlFor="email">
              Email:
              <div className="input">
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="e.g. your@email.com"
                  dataCy="input-email"
                />
              </div>
            </label>
            <label htmlFor="password">
              Password:
              <div className="input">
                <Input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  dataCy="input-password"
                />
              </div>
            </label>
            {showError && (
              <div className="errorMessage">
                <SystemMessage type="error" Icon={AlertCircle}>
                  The username or password you&apos;ve entered is invalid.
                </SystemMessage>
              </div>
            )}
            <Link
              to="/forgotten-password"
              style={{ textDecoration: 'none' }}
              data-cy="link-forgotten-password"
            >
              <div className="forgotPassword">
                <Typography type="active">Forgot your password?</Typography>
              </div>
            </Link>
            <span className="singIn">
              <button data-cy="btn-sign-in">Sign In</button>
            </span>
          </form>
        </div>
        <style jsx>{style}</style>
      </ScrollableContent>
    );
  }
}

export const RawKiwiLogin = KiwiLogin;

export default withLogin(KiwiLogin);
