// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import MediaQuery from 'react-responsive';
import {
  Text,
  Alert,
  Button,
  TextLink,
  Illustration,
} from '@kiwicom/orbit-components';
import { AlertCircle, Loading } from '@kiwicom/orbit-components/lib/icons';
import Trans from '@kiwicom/nitro/lib/components/Text';

import CloseButton from './../common/buttons/CloseButton';
import BackButton from '../common/buttons/BackButton';
import Input from '../common/Input';
import { withLogin } from '../context/User';
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
      text-align: left;
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
          <Trans t={__('smartfaq.kiwi_login.sign_in_button')} />
        </Button>
      ) : (
        <Button block onClick={kiwiLoginTracker}>
          <Trans t={__('smartfaq.kiwi_login.sign_in_button')} />
        </Button>
      );

    return (
      <div className="KiwiLogin">
        <CloseButton />
        <BackButton prevScreen="/sign-in" />
        <div className="picture">
          <Illustration size="medium" name="Help" />
        </div>
        <div className="main">
          <p className="title">
            <Trans t={__('smartfaq.kiwi_login.title')} />
          </p>
          <MediaQuery query="(min-width: 480px) and (min-height: 480px)">
            <Text type="secondary">
              <Trans t={__('smartfaq.kiwi_login.subtitle')} />
            </Text>
          </MediaQuery>
          <MediaQuery query="only screen and (max-width: 480px) and (orientation: portrait)">
            <Text type="secondary">
              <Trans t={__('smartfaq.kiwi_login.subtitle')} />
            </Text>
          </MediaQuery>
          <form onSubmit={this.handleSignIn}>
            <label htmlFor="email">
              <Trans t={__('smartfaq.kiwi_login.email_label')} />
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
              <Trans t={__('smartfaq.kiwi_login.password_label')} />
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
                  <Trans t={__('smartfaq.kiwi_login.wrong_credentials')} />
                </Alert>
              </div>
            )}
            <div className="forgotPassword" data-cy="link-forgotten-password">
              <TextLink
                external={false}
                onClick={() => this.props.history.push('/forgotten-password')}
                type="primary"
              >
                <Trans
                  t={__('smartfaq.kiwi_login.link_to_forgotten_password')}
                />
              </TextLink>
            </div>
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
