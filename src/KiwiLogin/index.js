// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';
import MediaQuery from 'react-responsive';
import { Text, Alert, Button } from '@kiwicom/orbit-components';
import { AlertCircle, Loading } from '@kiwicom/orbit-components/lib/icons';

import CloseButton from './../common/buttons/CloseButton';
import BackButton from '../common/buttons/BackButton';
import Input from '../common/Input';
import { withLogin } from '../context/User';
import image from '../../static/woman-with-laptop@2x.jpg';
import { simpleTracker } from '../helpers/analytics/trackers';
import type { onLogin } from '../types';

const style = css`
  .KiwiLogin {
    width: 480px;
    padding-top: 128px;
    padding-left: 40px;
    padding-right: 40px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    margin: auto;
  }
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
    font-size: 14px;
    color: #00a991;
  }
  .signIn {
    float: right;
    margin-bottom: 20px;
  }
  form {
    margin-top: 33px;
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
  @media only screen and (max-width: 480px) {
    .KiwiLogin {
      width: 100%;
      padding-top: 64px;
      padding-left: 0px;
      padding-right: 0px;
    }
    p.title {
      font-size: 22px;
      text-align: center;
      margin-top: 0;
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
    .signIn {
      float: none;
      display: block;
      margin: 0;
    }
    label {
      width: 100%;
    }
  }
  @media only screen and (max-height: 480px) {
    .KiwiLogin {
      width: 100%;
      padding-top: 20px;
    }
    p.title {
      font-size: 22px;
      text-align: center;
      margin-top: 0;
    }
    div.picture {
      display: none;
    }
    div.main {
      width: 288px;
      margin-left: auto;
      margin-right: auto;
    }
    div.input {
      width: 288px;
      margin-bottom: 26px;
    }
    div.forgotPassword {
      display: block;
      text-align: center;
      margin-bottom: 20px;
      margin-top: 0;
    }
    .signIn {
      float: none;
      display: block;
      margin: 0;
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
  isLoading: boolean,
|};

const kiwiLoginTracker = () =>
  simpleTracker('smartFAQ', {
    action: 'clickOnLogin',
    loginType: 'kiwi',
  });

class KiwiLogin extends React.Component<Props, State> {
  state = {
    email: '',
    password: '',
    showError: false,
    isLoading: false,
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.showError && this.setState({ showError: false });
  };
  handleSignIn = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    try {
      const response = await this.props.onLogin(
        this.state.email,
        this.state.password,
      );

      if (!response) {
        throw new Error('Login failed.');
      }

      this.setState({ isLoading: false });
      this.props.history.push('/faq/');
    } catch (e) {
      this.setState({ showError: true, isLoading: false });
    }
  };
  render() {
    const { showError, isLoading } = this.state;

    const renderButton = () =>
      isLoading ? (
        <Button block onClick={() => {}} disabled icon={<Loading />}>
          Sign In
        </Button>
      ) : (
        <Button block onClick={kiwiLoginTracker}>
          Sign In
        </Button>
      );

    return (
      <div className="KiwiLogin">
        <CloseButton />
        <BackButton text="Back" />
        <div className="picture">
          <img alt="Help" src={image} />
        </div>
        <div className="main">
          <p className="title">Kiwi.com account</p>
          <MediaQuery query="(min-width: 480px) and (min-height: 480px)">
            <Text type="secondary">
              If you have an account with us, just use your credentials to sign
              in.
            </Text>
          </MediaQuery>
          <MediaQuery query="only screen and (max-width: 480px) and (orientation: portrait)">
            <Text type="secondary">
              If you have an account with us, just use your credentials to sign
              in.
            </Text>
          </MediaQuery>
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
                <Alert type="critical" icon={<AlertCircle />}>
                  The username or password you&apos;ve entered is invalid.
                </Alert>
              </div>
            )}
            <Link
              to="/forgotten-password"
              style={{ textDecoration: 'none' }}
              data-cy="link-forgotten-password"
            >
              <div className="forgotPassword">Forgot your password?</div>
            </Link>
            <span className="signIn" data-cy="btn-sign-in">
              {renderButton()}
            </span>
          </form>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export const RawKiwiLogin = KiwiLogin;

export default withLogin(KiwiLogin);
