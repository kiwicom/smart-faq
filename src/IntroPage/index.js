// @flow
import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography, Button } from '@kiwicom/balkan-ui';
import image from '../../static/woman-with-laptop.jpg';

const style = css`
  .woman-with-laptop {
    margin-top: 128px;
    margin-left: 150px;
    margin-right: 127px;
    width: 203px;
    height: 156px;
    object-fit: contain;
  }

  .hr-line {
    width: 352px;
    border: solid 1px #e8edf1;
    margin 0 auto;
  }

  .column {
    width: 480px;
    height: 1024px;
    background-color: #ffffff;
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.15);
  }

  .grid {
    display: grid;
    margin-left: 64px;
    margin-right: 64px;
    margin-bootom: 54px;
    grid-column: 1;
  }
`;

function haveBooking() {}
function noBooking() {}
const Intro = () => (
  <div className="column">
    <img className="woman-with-laptop" alt="Help" src={image} />
    <div className="grid">
      <h1 className="title" size="large">
        Need help?
      </h1>
      <Typography size="large" type="secondary">
        {"We're here for you. First, let's narrow down your request."}
      </Typography>
      <Button
        isDisabled={false}
        onClick={haveBooking}
        size="large"
        title="I have an existing booking"
        type="primary"
      />
      <Button
        isDisabled={false}
        onClick={noBooking}
        size="large"
        title="I don't have a booking"
        type="secondary"
      />
    </div>
    <hr className="hr-line" />
    <Typography className="faq-link" type="primary" variant="bold">
      Full FAQ Site
    </Typography>
    <style jsx>{style}</style>
  </div>
);

export default Intro;
