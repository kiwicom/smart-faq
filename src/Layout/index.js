// @flow
import * as React from 'react';
import css from 'styled-jsx/css';

type Props = {
  children?: React.Node,
};
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
  div.Layout {
    position: absolute;
    right: 0;
    min-width: 480px;
    height: 100vh;
    background-color: #ffffff;
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.15);
  }
  span.inline-icon svg {
    display: inline-block;
    vertical-align: bottom;
  }
`;
const Layout = (props: Props) => (
  <div className="Layout">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
    />
    {props.children}
    <style jsx global>
      {style}
    </style>
  </div>
);

export default Layout;
