// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Text, Illustration } from '@kiwicom/orbit-components';
import Trans from '@kiwicom/nitro/lib/components/Text';

import BackButton from '../common/buttons/BackButton';
import CloseButton from '../common/buttons/CloseButton';
import Input from '../common/Input';
import resetPassword from '../mutations/ResetPassword';

const style = css`
  .ForgottenPassword {
    width: 480px;
    padding-top: 128px;
    margin: auto;
  }
  div.picture {
    text-align: center;
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
    margin-top: 0;
    margin-bottom: 8px;
    line-height: 1.2;
  }
  button.send {
    width: 83px;
    background-color: #00a991;
    border: 0;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    color: #ffffff;
  }
  label {
    display: inline-block;
    width: 300px;
    height: 44px;
  }
  form {
    margin: 32.8px 40px 0px 40px;
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
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;
    line-height: 1.43;
    text-align: center;
    border: none;
    margin-left: 8px;
    display: inline-block;
  }
  @media only screen and (max-width: 480px) {
    .ForgottenPassword {
      width: 100%;
      padding-top: 64px;
    }
    div.picture {
      display: none;
    }
    p.title {
      font-size: 22px;
      text-align: left;
    }
    div.main {
      margin-left: 16px;
      margin-right: 16px;
    }
    form {
      margin: 33px 16px 0px;
    }
    label {
      display: block;
      width: 100%;
      height: 44px;
      margin-bottom: 33px;
    }
    form button {
      width: 100%;
      border-radius: 3px;
      margin-bottom: 0px;
      margin-left: 0px;
      display: block;
      width: 100%;
    }
    button.send {
      width: 288px;
      height: 44px;
    }
  }
  @media only screen and (max-height: 480px) and (orientation: landscape) {
    .ForgottenPassword {
      width: 288px;
      padding-top: 20px;
    }
    div.picture {
      display: none;
    }
    p.title {
      font-size: 22px;
      text-align: center;
    }
    div.main {
      margin: 0;
    }
    div.input {
      width: 288px;
    }
    form {
      margin: 33px 0 0;
    }
    form button {
      width: 100%;
      margin: 28px 0 0;
    }
  }
`;

type Props = {
  history: {
    push: ({
      pathname: string,
      state: {
        email: string,
      },
    }) => void,
  },
};

type State = {|
  email: string,
|};

class ForgottenPassword extends React.Component<Props, State> {
  state = {
    email: '',
  };

  handleChangeEmail = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handleSubmitEmail = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = this.state;
    try {
      await resetPassword(email);

      this.props.history.push({
        pathname: '/check-recovery-link',
        state: { email },
      });
    } catch (e) {
      // Once the backend responds with error on invalid email address, let's add here frontend error message
      // this.setState({ showError: true });
    }
  };

  render() {
    return (
      <div className="ForgottenPassword">
        <CloseButton />
        <BackButton prevScreen="kiwi-login" />
        <div className="picture">
          <Illustration size="medium" name="Help" />
        </div>
        <div className="main">
          <p className="title">
            <Trans t={__('smartfaq.forgotten_password.title')} />
          </p>
          <Text type="secondary">
            <Trans t={__('smartfaq.forgotten_password.subtitle')} />
          </Text>
        </div>
        <form onSubmit={this.handleSubmitEmail}>
          <label htmlFor="email">
            <Text>
              <Trans t={__('smartfaq.forgotten_password.email_label')} />
            </Text>
            <div className="input">
              <Input
                type="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                placeholder="e.g. your@email.com"
                required
              />
            </div>
          </label>
          <button className="send">
            <Trans t={__('smartfaq.forgotten_password.send_button')} />
          </button>
        </form>
        <style jsx>{style}</style>
      </div>
    );
  }
}
export default ForgottenPassword;
