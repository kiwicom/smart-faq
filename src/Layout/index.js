// @flow
import * as React from 'react';
import css from 'styled-jsx/css';
import withAuth from '../HOC/withAuth';

type Props = {
  children?: React.Node,
  token: string,
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
const smallStyle = css`
  div.logged-out {
    border: 1px solid #b22222;
    position: fixed;
    bottom: 50px;
    left: 50px;
    color: #b22222;
    padding: 0.5em;
  }
  div.logged-in {
    border: 1px solid #85c285;
    position: fixed;
    bottom: 50px;
    left: 50px;
    color: #85c285;
    padding: 0.5em;
  }
`;
const Layout = (props: Props) => (
  <div className="Layout">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
    />
    {props.children}
    {props.token ? (
      <div className="logged-in">Logged in</div>
    ) : (
      <div className="logged-out">Logged out</div>
    )}
    <style jsx>{smallStyle}</style>
    <style jsx global>
      {style}
    </style>
  </div>
);

export default withAuth(Layout);
