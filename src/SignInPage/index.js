// @flow

import * as React from 'react';
import idx from 'idx';
import { withRouter } from 'react-router-dom';
import css from 'styled-jsx/css';
import {
  Text,
  Heading,
  Alert,
  TextLink,
  Illustration,
} from '@kiwicom/orbit-components';
import { AlertCircle } from '@kiwicom/orbit-components/lib/icons';
import type { Location } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Trans from '@kiwicom/nitro/lib/components/Text';

import chevronRight from '../../static/chevron-right.png';
import BackButton from '../common/buttons/BackButton';
import CloseButton from '../common/buttons/CloseButton';
import ResponsiveSocialButton from './ResponsiveSocialButton';
import type { onSocialLogin } from '../types';
import { redirectsLoggedInAccount } from '../common/loginHOC';

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
  div.picture {
    text-align: center;
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
  div.kiwiAccount {
    margin-top: 8px;
    text-align: center;
  }
  div.kiwiAccount .linkText {
    font-size: 14px;
    color: #00a991;
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
      text-align: left;
    }
    .buttons {
      display: table;
      margin: 0 auto;
    }
  }
  @media only screen and (max-height: 480px) {
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
    div.kiwiAccount {
      margin-top: 28px;
    }
  }
`;

type Props = {|
  location?: Location,
  onSocialLogin: onSocialLogin,
  history: {
    push: string => void,
  },
|};

class SignIn extends React.Component<Props> {
  renderExpiredSession() {
    return (
      <div className="infoMessage" data-cy="message-expired-session">
        <Alert type="info" icon={<AlertCircle />}>
          <Trans t={__('smartfaq.sign_in_page.alert')} />
        </Alert>
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
        <BackButton prevScreen="/" />
        <div className="picture">
          <Illustration size="medium" name="Help" />
        </div>
        <div className="text">
          <div className="title">
            <MediaQuery query="screen and (max-width: 700px)">
              <Heading type="title2">
                <Trans t={__('smartfaq.sign_in_page.title')} />
              </Heading>
            </MediaQuery>
            <MediaQuery query="screen and (min-width: 701px)">
              <Heading>
                <Trans t={__('smartfaq.sign_in_page.title')} />
              </Heading>
            </MediaQuery>
          </div>
          <MediaQuery query="(min-width: 480px) and (min-height: 480px)">
            <Text type="secondary">
              <Trans t={__('smartfaq.sign_in_page.subtitle')} />
            </Text>
          </MediaQuery>
          <MediaQuery query="only screen and (max-width: 480px) and (orientation: portrait)">
            <Text type="secondary">
              <Trans t={__('smartfaq.sign_in_page.subtitle')} />
            </Text>
          </MediaQuery>
          {sessionExpired && this.renderExpiredSession()}
        </div>
        <div className="buttons">
          <div className="googleButton">
            <ResponsiveSocialButton
              type="google"
              bordered
              onSocialLogin={onSocialLogin}
            >
              <Trans t={__('smartfaq.sign_in_page.google_button')} />
            </ResponsiveSocialButton>
          </div>
          <div className="facebookButton">
            <ResponsiveSocialButton
              type="facebook"
              onSocialLogin={onSocialLogin}
            >
              <Trans t={__('smartfaq.sign_in_page.facebook_button')} />
            </ResponsiveSocialButton>
          </div>
        </div>
        <div className="kiwiAccount" data-cy="link-kiwi-login">
          <TextLink
            external={false}
            onClick={() => this.props.history.push('/kiwi-login')}
            type="primary"
          >
            <span className="linkText">
              <Trans t={__('smartfaq.sign_in_page.kiwi_account_link')} />
            </span>
            <img src={chevronRight} className="chevron" alt="kiwi login" />
          </TextLink>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export const SignInRaw = withRouter(SignIn);

export default redirectsLoggedInAccount(withRouter(SignIn));
