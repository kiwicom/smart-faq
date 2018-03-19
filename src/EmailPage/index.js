// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Close } from '@kiwicom/orbit-components/lib/icons';
import image from '../../static/mailbox@2x.png';

type EmailType = {
  email: string,
};

const style = css`
  .Email {
    position: absolute;
    right: 0;
    width: 480px;
    height: 100vh;
    background-color: #ffffff;
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.15);
    padding-top: 240px;
  }
  p.title {
    width: 305px;
    height: 34px;
    font-size: 28px;
    font-weight: bold;
    line-height: 1.2;
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
  p.secondary {
    width: 352px;
    height: 44.8px;
    font-size: 16px;
    line-height: 1.4;
    text-align: left;
    color: #7f91a8;
  }
`;

const Email = ({ email = 'example@gmail.com' }: EmailType) => (
  <div className="Email">
    <div className="close-icon">
      <Close fill="#7f91a8" size="32" />
    </div>
    <div className="picture">
      <img alt="Email" src={image} />
    </div>
    <div className="text">
      <p className="title">Check your e-mail inbox</p>
      <p className="secondary">
        To sign in, just click the link in the email we sent to
        <span className="email-text">{` ${email}`}</span>.
      </p>
    </div>
    <style jsx>{style}</style>
  </div>
);

export default Email;
