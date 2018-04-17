// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';
import CloseButton from './../common/CloseButton';
import BackButton from '../common/BackButton';
import Input from '../common/Input';
import image from '../../static/woman-with-laptop@2x.jpg';
import routeDefinitions from '../routeDefinitions';
import withAuth from '../HOC/withAuth';

const style = css`
  .KiwiLogin {
    width: 480px;
    padding-top: 128px;
    padding-left: 40px;
    padding-right: 40px;
  }
  div.picture img {
    width: 203px;
    height: 156px;
  }
  div.picture {
    text-align: center;
    margin-bottom: 68px;
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
  .signIn {
    float: right;
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
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
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
    div.forgot-password {
      text-align: center;
      display: block;
      margin-bottom: 20px;
      margin-top: 0px;
    }
    .singIn button {
      width: 100%;
    }
    .singIn {
      float: none;
      width: 100%;
    }
    label {
      width: 100%;
    }
  }
`;
type Props = {|
  doSignIn: Function,
  history: {
    push: string => void,
  },
|};

type State = {|
  email: string,
  password: string,
|};

class KiwiLogin extends React.Component<Props, State> {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSignIn = () => {
    this.props.doSignIn(this.state.email, this.state.password);
    this.props.history.push(routeDefinitions.CONTENT);
  };
  render() {
    return (
      <div className="KiwiLogin">
        <CloseButton />
        <BackButton text="Back" link={routeDefinitions.SIGN_IN} />
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
              <div className="input">
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="e.g. your@email.com"
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
                />
              </div>
            </label>
          </form>
          <Link
            to={routeDefinitions.FORGOTTEN_PASSWORD}
            style={{ textDecoration: 'none' }}
          >
            <div className="forgot-password">
              <Typography type="active">Forgot your password?</Typography>
            </div>
          </Link>
          <span className="singIn">
            <button onClick={this.handleSignIn}>Sign In</button>
          </span>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default withAuth(KiwiLogin);
