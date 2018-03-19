// @flow
import * as React from 'react';
import css from 'styled-jsx/css';
import { Close, OpenInNew } from '@kiwicom/orbit-components/lib/icons';
import { Typography, Button } from '@kiwicom/orbit-components';
import image from '../../static/woman-with-laptop@2x.jpg';
import { allRoutes } from '../Routes';

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
  div.buttons {
    margin-left: 0px 64px;
    margin-top: 56.4px;
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
  div.buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 64px;
    margin-right: auto;
    width: auto;
  }
  div.buttons .button:nth-child(1) {
    margin-bottom: 16px;
  }
  hr.hr-line {
    margin: 56px 64px 22px 64px;
    height: 0;
    border: 0;
    border-top: 1px solid #e8edf1;
  }
  div.faq-link {
    margin-left: 182px;
    line-height: 1.4;
  }
  div.faq-link .inline-icon {
    padding: 8px;
    margin-left: 4px;
  }
  div.close-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 8px;
  }
`;

type Props = {
  history: {
    push: string => void,
  },
};

const Intro = (props: Props) => (
  <div className="Intro">
    <div className="close-icon">
      <Close fill="#7f91a8" size="32" />
    </div>
    <div className="picture">
      <img className="woman-with-laptop" alt="Help" src={image} />
    </div>
    <div className="content">
      <div className="text">
        <p className="title">Need help?</p>
        <Typography type="secondary">
          {"We're here for you. First, let's narrow down your request."}
        </Typography>
      </div>
      <div className="buttons">
        <div className="button">
          <Button
            isDisabled={false}
            onClick={() => props.history.push(allRoutes.LOGIN)}
            size="large"
            title="I have an existing booking"
            type="primary"
          />
        </div>
        <div className="button">
          <Button
            isDisabled={false}
            onClick={() => props.history.push(allRoutes.STATIC_FAQ)}
            size="large"
            title="I don't have a booking"
            type="secondary"
          />
        </div>
      </div>
    </div>
    <hr className="hr-line" />
    <div className="faq-link">
      <Typography className="faq-link" type="attention" variant="bold">
        Full FAQ Site
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.kiwi.com/helpcenter/"
          className="inline-icon"
        >
          <OpenInNew fill="#171b1e" size="32" />
        </a>
      </Typography>
    </div>
    <style jsx>{style}</style>
  </div>
);

export default Intro;
