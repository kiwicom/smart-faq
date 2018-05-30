// @flow

import * as React from 'react';
import idx from 'idx';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';
import { Typography, SystemMessage } from '@kiwicom/orbit-components';
import { AlertCircle } from '@kiwicom/orbit-components/lib/icons';
import type { Location } from 'react-router-dom';

import image from '../../static/woman-with-laptop@2x.jpg';
import chevronRight from '../../static/chevron-right.png';
import facebookLogo from '../../static/facebook-icon.png';
import googleLogo from '../../static/google-logo.png';
import BackButton from '../common/buttons/BackButton';
import CloseButton from '../common/buttons/CloseButton';
import { withSocialLogin } from '../context/User';
import type { onSocialLogin } from '../types';

const style = css`
  .SignIn {
    width: 480px;
    padding-top: 128px;
    padding-bottom: 50px;
  }
  div.picture img {
    width: 203px;
    height: 156px;
  }
  div.picture {
    margin: 0px 127px 0px 150px;
  }
  div.text {
    margin: 52px 40px 32.2px 40px;
  }
  p.title {
    color: #171b1e;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
    text-align: center;
  }
  label {
    font-size: 14px;
    line-height: 1.43;
    color: #46515e;
    display: inline-block;
    width: 309px;
    height: 44px;
  }
  form {
    margin: 0px 40px 0px 40px;
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
    font-weight: bold;
    color: #ffffff;
  }
  .buttons {
    margin-right: 134px;
    margin-left: 134px;
    margin-top: 65px;
  }
  button {
    width: 212px;
    height: 44px;
    border-radius: 3px;
    margin-bottom: 26px;
    border: none;
    cursor: pointer;
    display: inline-block;
  }
  button.get-help {
    width: 83px;
    background-color: #00a991;
    border: 0;
    margin-left: 8px;
  }
  button.google {
    background-color: #d24318;
  }
  button.facebook {
    background-color: #4465ad;
  }
  div.kiwi-account {
    margin-top: 8px;
    text-align: center;
  }
  img.chevron {
    width: 8px;
    height: 8px;
    margin-left: 5px;
    object-fit: contain;
  }
  span.label {
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    color: #ffffff;
    display: block;
    text-align: left;
  }
  .facebook-icon, .google-icon {
    width: 16px;
    height: 16px;
    float: left;
    margin-left: 13px;
    margin-right: 13px;
  }
  p.or {
    width: 15px;
    height: 23px;
    font-size: 16px;
    line-height: 1.4;
    color: #46515e;
    margin 0 auto;
    margin-top: 26px;
    margin-bottom: 24px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .SignIn {
      width: 100%;
      padding-top: 22px;
    }
    div.picture img {
      display: none;
    }
    div.text {
      margin: 64px 16px 33px 16px;
    }
    form {
      margin: 0px 16px;
    }
    label {
      margin-bottom: 33px;
      width: 100%;
    }
    div.input {
      width: 100%;
      margin-right: 0px;
      margin-bottom: 8px;
    }
    form button {
      width: 100%;
    }
    .buttons {
      margin-right: 16px;
      margin-left: 16px;
    }
    p.or {
      margin 0 auto;
      margin-bottom: 20px;
    }
    button {
      width: 100%;
      margin-bottom: 20px;
    }
    button.get-help {
      width: 83px;
      background-color: #00a991;
      border: 0;
      margin-left: 0px;
    }
    @media only screen and (width: 320px) {
      .SignIn {
        padding-top: 0px;
      }
    }
  }
`;

type Props = {
  location?: Location,
  onSocialLogin: onSocialLogin,
};

class SignIn extends React.Component<Props> {
  renderExpiredSession() {
    return (
      <div className="infoMessage">
        <SystemMessage type="info" Icon={AlertCircle}>
          Your last session has expired. Please sign in again.
        </SystemMessage>
        <style jsx>
          {`
            div.infoMessage {
              margin-bottom: 15px;
            }
          `}
        </style>
      </div>
    );
  }
  render() {
    const { onSocialLogin } = this.props;
    const sessionExpired = idx(
      this.props.location,
      _ => _.state.sessionExpired,
    );
    return (
      <div className="SignIn">
        <CloseButton />
        <BackButton text="Back" />
        <div className="picture">
          <img alt="Help" src={image} />
        </div>
        <div className="text">
          <p className="title">Sign in</p>
        </div>
        {sessionExpired && this.renderExpiredSession()}
        <div className="buttons">
          <button className="google" onClick={() => onSocialLogin('google')}>
            <img
              className="google-icon"
              src={googleLogo}
              alt="Login with google"
            />
            <span className="label">Continue with Google </span>
          </button>
          <button
            className="facebook"
            onClick={() => onSocialLogin('facebook')}
          >
            <img
              className="facebook-icon"
              src={facebookLogo}
              alt="Login with facebook"
            />
            <span className="label">Continue with Facebook </span>
          </button>
        </div>
        <div className="kiwi-account">
          <Link to="/kiwi-login" style={{ textDecoration: 'none' }}>
            <Typography type="active">
              I want to use my Kiwi.com account
            </Typography>
            <img src={chevronRight} className="chevron" alt="kiwi login" />
          </Link>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export const RawSignIn = SignIn;
export default withSocialLogin(SignIn);
