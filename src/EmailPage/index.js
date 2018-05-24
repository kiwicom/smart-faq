// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';
import idx from 'idx';

import image from '../../static/mailbox@3x.png';
import CloseButton from './../common/buttons/CloseButton';

const style = css`
  div.mobile-header {
    display: none;
  }
  .Email {
    width: 480px;
    padding-top: 240px;
  }
  p.title {
    font-size: 28px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 8px;
    color: #171b1e;
  }
  div.picture {
    margin: 0px 127px 52px 127px;
  }
  div.picture img {
    height: 188px;
    widht: 226px;
  }
  div.text {
    margin-left: 40px;
    margin-right: 40px;
  }
  span.email-text {
    font-weight: bold;
    color: #171b1e;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .Email {
      width: 100%;
      padding-top: 42px;
    }
    div.mobile-header {
      display: block;
      width: 100%;
      height: 66px;
      background-color: #ffffff;
      box-shadow: inset 0 -1px 0 0 #e8edf1;
      padding-top: 21px;
    }
    div.help-title {
      height: 24px;
      font-size: 20px;
      font-weight: bold;
      line-height: 1.2;
      text-align: center;
      color: #171b1e;
    }
    div.text {
      margin: 40px 16px 0px 16px;
    }
    div.picture {
      text-align: center;
      margin: 0;
    }
  }
`;
/* eslint-disable */
type Props = {
  text: string,
  location: {
    state: {
      email: string,
    },
  },
};
/* eslint-enable */

const CheckEmail = (props: Props) => {
  const email = idx(props, _ => _.location.state.email) || 'example@gmail.com';
  return (
    <React.Fragment>
      <div className="mobile-header">
        <div className="help-title">Help</div>
      </div>
      <div className="Email">
        <CloseButton />
        <div className="picture">
          <img alt="Email" src={image} />
        </div>
        <div className="text">
          <p className="title">Check your e-mail inbox</p>
          <Typography size="large" type="secondary">
            {props.text}
            <span className="email-text">{` ${email}`}</span>.
          </Typography>
        </div>
      </div>
      <style jsx>{style}</style>
    </React.Fragment>
  );
};

export const CheckRecoveryLink = (props: Props) => {
  const text = 'We sent a recovery link to';
  return <CheckEmail {...props} text={text} />;
};

export const CheckMagicLink = (props: Props) => {
  const text = 'To sign in, just click the link in the email we sent to';
  return <CheckEmail {...props} text={text} />;
};
