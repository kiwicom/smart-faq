// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Trans } from 'react-i18next';
import { Typography } from '@kiwicom/orbit-components';

import image from '../../static/woman-with-laptop@2x.jpg';
import CloseButton from './../common/buttons/CloseButton';
import { withUser } from '../context/User';
import type { User } from '../types';
import FullFAQLink from '../common/FullFAQLink';
import redirectsLoggedIn from '../common/redirectsLoggedIn';

const style = css`
  .Intro {
    width: 480px;
    padding-top: 128px;
  }
  div.picture {
    margin-left: 150px;
    margin-bottom: 68px;
  }
  div.text {
    margin-left: 40px;
  }
  div.picture img {
    width: 203px;
    height: 156px;
  }
  p.title {
    color: #171b1e;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 6px;
  }
  button {
    cursor: pointer;
    height: 44px;
    border-radius: 3px;
    border: 0;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    padding: 12px 16px;
  }
  .primary button {
    background-color: #00a991;
    color: #ffffff;
    margin-bottom: 16px;
  }
  .secondary button {
    background-color: #e8edf1;
    color: #46515e;
  }
  div.buttons {
    margin-left: 40px;
    margin-top: 52.4px;
  }
  hr.hr-line {
    margin: 36px 64px 22px 64px;
    height: 0;
    border: 0;
    border-top: 1px solid #e8edf1;
  }
  .faq-link {
    margin-left: 182px;
    line-height: 1.4;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .Intro {
      width: 100%;
      padding-top: 75px;
    }
    div.picture {
      text-align: center;
      margin: 0px 0px 40px 0px;
    }
    hr.hr-line {
      margin: 28px 16px 22px 16px;
    }
    div.text {
      margin-left: 16px;
      margin-right: 16px;
    }
    div.buttons {
      margin: 28px 16px 24px 16px;
    }
    button {
      width: 100%;
    }
    .faq-link {
      text-align: center;
      margin: 0;
    }
  }
`;

type Props = {
  user: User,
  history: {
    push: string => void,
  },
};

export class PureIntro extends React.Component<Props> {
  goToExistingBooking = () => {
    this.props.user
      ? this.props.history.push('/faq/')
      : this.props.history.push('/sign-in');
  };

  goToNoBooking = () => {
    this.props.history.push('/faq/');
  };

  render() {
    return (
      <div className="Intro">
        <CloseButton />
        <div className="picture">
          <img alt="Help" src={image} />
        </div>
        <div className="text">
          <p className="title">
            <Trans i18nKey="IntroPage.header">Need help?</Trans>
          </p>
          <Typography type="secondary">
            ALOHA
            <Trans i18nKey="IntroPage.subheader">
              {"We're here for you. First, let's narrow down your request."}
            </Trans>
          </Typography>
        </div>
        <div className="buttons">
          <div className="primary">
            <button
              onClick={this.goToExistingBooking}
              data-cy="btn-existent-booking"
            >
              <Trans i18nKey="IntroPage.existingBooking">
                I have an existing booking
              </Trans>
            </button>
          </div>
          <div className="secondary">
            <button
              onClick={this.goToNoBooking}
              data-cy="btn-nonexistent-booking"
            >
              <Trans i18nKey="IntroPage.noBooking">
                I don&apos;t have a booking
              </Trans>
            </button>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="faq-link">
          <FullFAQLink />
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default withUser(redirectsLoggedIn(PureIntro));
