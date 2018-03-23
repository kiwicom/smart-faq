// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';
import image from '../../static/woman-with-laptop@2x.jpg';
import chevronRight from '../../static/chevron-right.png';
import facebookLogo from '../../static/facebook-icon.png';
import googleLogo from '../../static/google-logo.png';
import routeDefinitions from '../routeDefinitions';
import BackButton from '../common/BackButton';
import CloseIcon from '../common/CloseIcon';
import Input from '../common/Input';

const style = css`
  .SignIn {
    width: 480px;
    padding-top: 128px;
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
  }
  label {
    font-size: 14px;
    line-height: 1.43;
    color: #46515e;
  }
  .form {
    margin: 0px 40px 0px 40px;
  }
  div.input {
    display: inline-block;
    width: 309px;
    height: 44px;
    margin-top: 4px;
    margin-right: 8px;
  }
  .form button {
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
  }
  button {
    width: 212px;
    height: 44px;
    border-radius: 3px;
    margin-bottom: 16px;
    border: none;
    cursor: pointer;
  }
  button.get-help{
    width: 83px;
    background-color: #00a991;
    border: 0;
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
  }
  .facebook-icon, .google-icon {
    width: 16px;
    height: 16px;
    float: left;
    margin-left: 8px; 
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
`;

type Props = {
  history: Object,
};

type State = {|
  email: string,
|};

class SignIn extends React.Component<Props, State> {
  state = {
    email: '',
  };

  handleSubmitEmail = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <div className="SignIn">
        <CloseIcon />
        <BackButton text="Back" link={routeDefinitions.HOME} />
        <div className="picture">
          <img alt="Help" src={image} />
        </div>
        <div className="text">
          <p className="title">Sign in</p>
          <Typography type="secondary">
            {
              "We need your email address to send you a magic link for signing in. Then you'll be able to receive personalised help about your particular situation."
            }
          </Typography>
        </div>
        <div className="form">
          <label htmlFor="email">
            Email used for your booking:
            <div className="input">
              <Input
                type="email"
                value={this.state.email}
                onChange={this.handleSubmitEmail}
                placeholder="your@email.com"
              />
            </div>
          </label>
          <button
            className="get-help"
            onClick={() => {
              this.props.history.push(routeDefinitions.CHECK_EMAIL);
            }}
          >
            Get Help
          </button>
        </div>
        <p className="or"> or </p>
        <div className="buttons">
          <button className="google">
            <img
              className="google-icon"
              src={googleLogo}
              alt="Login with google"
            />
            <span className="label">Continue with Google </span>
          </button>
          <button className="facebook">
            <img
              className="facebook-icon"
              src={facebookLogo}
              alt="Login with facebook"
            />
            <span className="label">Continue with Facebook </span>
          </button>
        </div>
        <div className="kiwi-account">
          <Link
            to={routeDefinitions.KIWI_LOGIN}
            style={{ textDecoration: 'none' }}
          >
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

export default SignIn;
