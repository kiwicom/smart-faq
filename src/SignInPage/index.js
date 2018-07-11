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
} from '@kiwicom/orbit-components';
import {
  AlertCircle,
  Google,
  Facebook,
} from '@kiwicom/orbit-components/lib/icons';
import type { Location } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import image from '../../static/woman-with-laptop@2x.jpg';
import chevronRight from '../../static/chevron-right.png';
import BackButton from '../common/buttons/BackButton';
import CloseButton from '../common/buttons/CloseButton';
import ResponsiveSocialButton from './ResponsiveSocialButton';
import type { onSocialLogin } from '../types';

const style = css`
  .SignIn {
    width: 480px;
    padding-top: 128px;
    padding-bottom: 50px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    margin: auto;
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
  @media only screen and (max-width: 480px) {
    .SignIn {
      width: 100%;
      padding-top: 30px;
    }
    div.picture {
      text-align: center;
      margin: 50px 0px 20px 0px;
    }
    div.text {
      width: 288px;
      margin-left: auto;
      margin-right: auto;
    }
    div.title {
      text-align: center;
    }
    .buttons {
      display: table;
      margin: 0 auto;
    }
  }
  @media only screen and (orientation: landscape) and (max-height: 480px) {
    .SignIn {
      width: 100%;
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    div.picture {
      display: none;
    }
    div.text {
      margin: 0 auto 29px;
      width: 288px;
    }
    div.title {
      text-align: center;
    }
    .buttons {
      display: table;
      margin: 0 auto;
      width: 288px;
    }
    div.kiwi-account {
      margin-top: 28px;
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
            <MediaQuery query="screen and (max-width: 700px)">
              <Heading weight="bold" size="medium">
                Sign in
              </Heading>
            </MediaQuery>
            <MediaQuery query="screen and (min-width: 701px)">
              <Heading weight="bold">Sign in</Heading>
            </MediaQuery>
          </div>
          <MediaQuery query="(min-width: 480px) and (min-height: 480px)">
            <Text type="secondary">
              We need you to sign in to provide you with more personalised help.
            </Text>
          </MediaQuery>
          <MediaQuery query="only screen and (max-width: 480px) and (orientation: portrait)">
            <Text type="secondary">
              We need you to sign in to provide you with more personalised help.
            </Text>
          </MediaQuery>
          {sessionExpired && this.renderExpiredSession()}
        </div>
        <div className="buttons">
          <div className="googleButton">
            <ResponsiveSocialButton
              title="Continue with Google"
              type="google"
              icon={Google}
              variation="bordered"
              onSocialLogin={onSocialLogin}
            />
          </div>
          <div className="facebookButton">
            <ResponsiveSocialButton
              title="Continue with Facebook"
              type="facebook"
              icon={Facebook}
              onSocialLogin={onSocialLogin}
            />
          </div>
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

export default SignIn;
