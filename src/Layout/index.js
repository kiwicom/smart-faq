// @flow
import * as React from 'react';
import css from 'styled-jsx/css';
import Intro from '../IntroPage';

const style = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  html,
  body {
    height: 100vh;
    padding: 0;
    margin: 0;
  }
  span.inline-icon svg {
    display: inline-block;
    vertical-align: bottom;
  }
`;
const Layout = () => (
  <div className="Layout">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
    />
    <Intro />
    <style jsx global>
      {style}
    </style>
  </div>
);

export default Layout;
