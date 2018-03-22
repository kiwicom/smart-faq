// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography, Button } from '@kiwicom/orbit-components';
import BackButton from '../common/BackButton';
import CloseIcon from '../common/CloseIcon';
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
  .send {
    float: right;
  }
  form {
    margin-top: 32.8px;
  }
  div.input {
    display: inline-block;
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
|};

class ForgottenPasword extends React.Component<Props, State> {
  state = {
    email: '',
  };

  handleSubmitEmail = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <div className="ForgottenPassword">
        <CloseIcon />
        <BackButton text="Back" link={routeDefinitions.KIWI_LOGIN} />
        <div className="picture">
          <img alt="Help" src={image} />
        </div>
        <div className="main">
          <p className="title">Forgotten password</p>
          <Typography type="secondary">
            {`Enter your email address and we'll send you the instructions to set your new password.`}
          </Typography>
          <form>
            <label htmlFor="email">
              Email:
              <div className="input">
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleSubmitEmail}
                  placeholder="e.g. your@email.com"
                />
              </div>
            </label>
          </form>
          <span className="send">
            <Button
              isDisabled={false}
              onClick={() => {}}
              size="large"
              title="Send"
              type="primary"
            />
          </span>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}
export default ForgottenPasword;
