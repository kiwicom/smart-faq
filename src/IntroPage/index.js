// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { OpenInNew } from '@kiwicom/orbit-components/lib/icons';
import { Typography } from '@kiwicom/orbit-components';
import { getSessionToken } from '../helpers/Auth';
import image from '../../static/woman-with-laptop@2x.jpg';
import routeDefinitions from '../routeDefinitions';
import CloseButton from './../common/CloseButton';

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
    margin-left: 64px;
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
    margin-left: 64px;
    margin-top: 52.4px;
  }
  hr.hr-line {
    margin: 36px 64px 22px 64px;
    height: 0;
    border: 0;
    border-top: 1px solid #e8edf1;
  }
  div.faq-link {
    margin-left: 182px;
    line-height: 1.4;
  }
  div.open-icon {
    display: inline-block;
    vertical-align: -3px;
    margin-left: 4px;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
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
    div.faq-link {
      text-align: center;
      margin: 0;
    }
  }
`;

type Props = {
  history: {
    push: string => void,
  },
};

const Intro = (props: Props) => (
  <div className="Intro">
    <CloseButton />
    <div className="picture">
      <img alt="Help" src={image} />
    </div>
    <div className="text">
      <p className="title">Need help?</p>
      <Typography type="secondary">
        {"We're here for you. First, let's narrow down your request."}
      </Typography>
    </div>
    <div className="buttons">
      <div className="primary">
        <button
          onClick={() =>
            getSessionToken()
              ? props.history.push(routeDefinitions.CONTENT)
              : props.history.push(routeDefinitions.SIGN_IN)
          }
        >
          I have an existing booking
        </button>
      </div>
      <div className="secondary">
        <button onClick={() => props.history.push(routeDefinitions.NO_BOOKING)}>
          I don&apos;t have a booking
        </button>
      </div>
    </div>
    <hr className="hr-line" />
    <div className="faq-link">
      <Typography type="attention" variant="bold">
        Full FAQ site
      </Typography>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.kiwi.com/helpcenter/"
        className="inline-icon"
      >
        <div className="open-icon">
          <OpenInNew fill="#171b1e" height="16" />
        </div>
      </a>
    </div>
    <style jsx>{style}</style>
  </div>
);

export default Intro;
