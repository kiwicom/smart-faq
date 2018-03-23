// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography, Button } from '@kiwicom/orbit-components';
import CloseIcon from './../common/CloseIcon';
import BackButton from '../common/BackButton';
import Input from '../common/Input';
import image from '../../static/woman-with-laptop@2x.jpg';
import routeDefinitions from '../routeDefinitions';

const style = css`
  .KiwiLogin {
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
`;
type Props = {||};

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
  render() {
    return (
      <div className="KiwiLogin">
        <CloseIcon />
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
  }
}

export default KiwiLogin;
