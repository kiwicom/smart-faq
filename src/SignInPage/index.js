// @flow

import * as React from 'react';
import idx from 'idx';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';
import {
  Typography,
  Text,
  Heading,
  SystemMessage,
  Button,
} from '@kiwicom/orbit-components';
import {
  AlertCircle,
  Google,
  Facebook,
} from '@kiwicom/orbit-components/lib/icons';
import type { Location } from 'react-router-dom';

import image from '../../static/woman-with-laptop@2x.jpg';
import chevronRight from '../../static/chevron-right.png';
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
    margin: 68px 40px 30px 40px;
  }
  .title {
    margin-bottom: 8px;
  }
  .googleButton {
    margin-bottom: 16px;
  }
  .buttons {
    margin-right: 134px;
    margin-left: 134px;
    margin-bottom: 24px;
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

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .SignIn {
      width: 100%;
      padding-top: 0px;
    }
    div.picture {
      text-align: center;
      margin: 75px 0px 20px 0px;
    }
    div.text {
      margin: 0px 16px 33px 16px;
    }
    .buttons {
      display: table;
      margin: 0 auto;
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
              margin: 20px 0 0;
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
          <div className="title">
            <Heading weight="bold">Sign in</Heading>
          </div>
          <Text type="secondary">
            We need you to sign in to provide you with more personalised help.
          </Text>
          {sessionExpired && this.renderExpiredSession()}
        </div>
        <div className="buttons">
          <div className="googleButton">
            <Button
              title="Continue with Google"
              onClick={() => {
                onSocialLogin('google');
              }}
              variation="bordered"
              width={212}
              type="google"
              Icon={Google}
              Facebook
            />
          </div>
          <Button
            title="Continue with Facebook"
            onClick={() => {
              onSocialLogin('facebook');
            }}
            type="facebook"
            width={212}
            Icon={Facebook}
            Facebook
            className="facebook"
          />
        </div>
        <div className="kiwi-account">
          <Link
            to="/kiwi-login"
            style={{ textDecoration: 'none' }}
            data-cy="link-kiwi-login"
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

export const RawSignIn = SignIn;
export default withSocialLogin(SignIn);
