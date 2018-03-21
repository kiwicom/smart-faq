// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';
import { Close } from '@kiwicom/orbit-components/lib/icons';
import { Typography, Button } from '@kiwicom/orbit-components';
import image from '../../static/woman-with-laptop.jpg';
import arrow from '../../static/arrow-16-px@3x.png';
import { allRoutes } from '../Routes';

const style = css`
  .KiwiLogin {
    width: 480px;
    padding-top: 128px;
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
  .forgot-password {
    margin-top: 12px;
    display: inline-block;
  }
  .singIn {
    float: right;
  }
  form {
    margin-top: 32.8px;
  }
  input {
    width: 400px;
    height: 44px;
    border-radius: 3px;
    background-color: #ffffff;
    border: solid 1px #bac7d5;
    margin-bottom: 34px;
    margin-top: 4px;
    font-size: 16px;
    line-height: 1.25;
    padding: 12px 24px 12px 16px;
  }
  input::placeholder {
    width: 315px;
    height: 20px;
    font-size: 16px;
    line-height: 1.25;
    text-align: left;
    color: #bac7d5;
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
`;

const KiwiLogin = () => (
  <div className="KiwiLogin">
    <div className="close-icon">
      <Close fill="#7f91a8" size="32" />
    </div>
    <Link to={allRoutes.SIGN_IN}>
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
    <div className="main">
      <p className="title">Kiwi.com account</p>
      <Typography type="secondary">
        {
          'If you have an account with us, just use your credentials to sign in.'
        }
      </Typography>
      <form>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" placeholder="e.g. your@email.com" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" />
        </label>
      </form>
      <div className="forgot-password">
        <Typography type="active">Forgot your password?</Typography>
      </div>
      <span className="singIn">
        <Button
          isDisabled={false}
          onClick={() => {}}
          size="large"
          title="Sign In"
          type="primary"
        />
      </span>
    </div>
    <style jsx>{style}</style>
  </div>
);

export default KiwiLogin;
