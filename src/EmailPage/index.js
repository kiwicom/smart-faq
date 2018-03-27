// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';
import image from '../../static/mailbox@3x.png';
import CloseIcon from './../common/CloseIcon';

const style = css`
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
`;

type Props = {
  email: string,
  text: string,
  location: {
    state: {
      email: string,
    },
  },
};

const CheckEmail = (props: Props) => {
  const email = props.location.state.email || 'example@gmail.com';
  return (
    <div className="Email">
      <CloseIcon />
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
      <style jsx>{style}</style>
    </div>
  );
};

export const CheckRecoveryLink = (props: Object) => {
  const text = 'We sent a recovery link to';
  return <CheckEmail text={text} {...props} />;
};

export const CheckMagicLink = (props: Object) => {
  const text = 'To sign in, just click the link in the email we sent to';
  return <CheckEmail text={text} {...props} />;
};
