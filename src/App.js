// @flow

import * as React from 'react';
import css from 'styled-jsx/css';

import Routes from './Routes';

const style = css`
  .smartFAQ {
    position: relative;
    min-width: 480px;
    height: 100vh;
    overflow-y: auto;
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
  }
  .smartFAQ * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .smartFAQ {
      min-width: 100%;
    }
  }
`;

const App = () => (
  <div className="smartFAQ">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1 shrink-to-fit=no"
    />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
    />

    <Routes />

    <style jsx global>
      {style}
    </style>
  </div>
);

export default App;
