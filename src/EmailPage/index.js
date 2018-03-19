// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Close } from '@kiwicom/orbit-components/lib/icons';
import { Typography } from '@kiwicom/orbit-components';
import image from '../../static/mailbox@2x.png';

type Props = {
  email: string,
};

const style = css`
  .Email {
    width: 480px;
    padding-top: 240px;
  }
  p.title {
    width: 305px;
    height: 34px;
    font-size: 28px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 6px;
    text-align: left;
    color: #171b1e;
  }
  div.picture {
    margin-left: 127px;
    margin-right: 127px;
    margin-bottom: 61px;
  }
  div.picture img {
    height: 188px;
    widht: 226px;
  }
  div.text {
    margin-left: 64px;
    margin-right: 64px;
  }
  div.close-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 8px;
  }
  span.email-text {
    font-weight: bold;
    color: #171b1e;
  }
`;

const Email = ({ email = 'example@gmail.com' }: Props) => (
  <div className="Email">
    <div className="close-icon">
      <Close fill="#7f91a8" size="32" />
    </div>
    <div className="picture">
      <img alt="Email" src={image} />
    </div>
    <div className="text">
      <p className="title">Check your e-mail inbox</p>
      <Typography size="large" type="secondary">
        To sign in, just click the link in the email we sent to
        <span className="email-text">{` ${email}`}</span>.
      </Typography>
    </div>
    <style jsx>{style}</style>
  </div>
);

export default Email;
