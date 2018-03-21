// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';
import { Close } from '@kiwicom/orbit-components/lib/icons';
import { Typography } from '@kiwicom/orbit-components';
import image from '../../static/woman-with-laptop@2x.jpg';
import arrow from '../../static/arrow-16-px@3x.png';
import facebookLogo from '../../static/facebook-icon.png';
import googleLogo from '../../static/google-logo.png';
import { allRoutes } from '../Routes';

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
    margin-left: 150px;
    margin-bottom: 68px;
  }
  div.close-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 8px;
  }
  div.back {
    position: absolute;
    top: 18px;
    left: 27px;
  }
  img.arrow {
    width: 6px;
    height: 8px;
    object-fit: contain;
    margin-right: 4px;
  }
  div.text {
    margin-left: 64px;
    margin-right: 64px;
  }
  p.title {
    color: #171b1e;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 6px;
  }
  .button-inside {
    display: inline-flex;
    width: 352px;
  }
  .button-inside input {
    width: 315px;
    height: 41px;
    border: 0px;
    font-size: 16px;
    padding-left: 16px;
  }
  .button-inside input::placeholder {
    font-size: 16px;
    line-height: 1.25;
    text-align: left;
    color: #bac7d5;
  }
  .button-inside button {
    width: 83px;
    height: 43px;
    border-radius: 0px 3px 3px 0px;
    background-color: #00a991;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
  }
  p.button-inside-label {
    width: 352px;
    height: 20px;
    font-size: 14px;
    line-height: 1.43;
    text-align: left;
    color: #46515e;
    margin: 36.2px 64px 4px 64px;
  }
  div.button-inside-wrapper {
    width: 352px;
    height: 44px;
    border-radius: 3px;
    background-color: #ffffff;
    border: solid 1px #bac7d5;
    margin-left: 64px;
    margin-right: 64px;
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
  button.kiwi {
    background-color: #e8edf1;
  }
  span.label {
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    color: #ffffff;
  }
  span.kiwi-label {
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    color: #46515e;
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
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;
type Props = {
  history: Object,
};

const SignIn = (props: Props) => (
  <div className="SignIn">
    <div className="close-icon">
      <Close fill="#7f91a8" size="32" />
    </div>
    <Link to={allRoutes.HOME}>
      <div className="back">
        <img className="arrow" src={arrow} alt="back" />
        <Typography type="secondary" variant="bold">
          Back
        </Typography>
      </div>
    </Link>
    <div className="picture">
      <img alt="Help" src={image} />
    </div>
    <div className="content">
      <div className="text">
        <p className="title">Sign in</p>
        <Typography type="secondary">
          {
            "We need your email address to send you a magic link for signing in. Then you'll be able to receive personalised help about your particular situation."
          }
        </Typography>
      </div>
    </div>
    <p className="button-inside-label">Email used for your booking:</p>
    <div className="button-inside-wrapper">
      <span className="button-inside">
        <input type="text" name="email" placeholder="your@email.com" />
        <button
          className="get-help"
          onClick={() => {
            props.history.push(allRoutes.CHECK_EMAIL);
          }}
        >
          Get Help
        </button>
      </span>
    </div>
    <p className="or"> or </p>
    <div className="buttons">
      <button className="google">
        <img className="google-icon" src={googleLogo} alt="Login with google" />
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
      <button className="kiwi">
        <span className="kiwi-label">Kiwi.com Account</span>
      </button>
    </div>
    <style jsx>{style}</style>
  </div>
);

export default SignIn;
