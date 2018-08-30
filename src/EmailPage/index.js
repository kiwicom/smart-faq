// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Text } from '@kiwicom/orbit-components';
import idx from 'idx';

import image from '../../static/images/mailbox@3x.png';
import CloseButton from './../common/buttons/CloseButton';

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
    width: 226px;
  }
  div.text {
    margin-left: 40px;
    margin-right: 40px;
  }
  span.email-text {
    font-weight: bold;
    color: #171b1e;
  }
  @media only screen and (max-width: 480px) {
    .Email {
      width: 100%;
      padding-top: 108px;
    }
    p.title {
      font-size: 22px;
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
  @media only screen and (max-height: 480px) and (orientation: landscape) {
    .Email {
      width: 100%;
      padding-top: 0;
      display: flex;
      justify-content: space-around;
    }
    p.title {
      font-size: 22px;
      text-align: center;
    }
    div.picture {
      display: none;
    }
  }
`;
type Props = {
  text: string,
  location: {
    state: {
      email: string,
    },
  },
};

const CheckEmail = (props: Props) => {
  const { location } = props;
  const email = idx(location, _ => _.state.email) || 'example@gmail.com';
  return (
    <React.Fragment>
      <div className="Email">
        <CloseButton />
        <div className="picture">
          <img alt="Email" src={image} />
        </div>
        <div className="text">
          <p className="title">Check your e-mail inbox</p>
          <Text type="secondary" element="span">
            {props.text}
            <span className="email-text">{` ${email}`}</span>.
          </Text>
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
