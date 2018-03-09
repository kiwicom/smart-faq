// @flow
import * as React from 'react';
import css from 'styled-jsx/css';

const style = css`
  * {
    font-family: Roboto;
  }
  div.Layout span.name {
    color: blue;
  }
`;
const Layout = () => (
  <div className="Layout">
    Aloha, I am a <span className="name">Layout</span>
    <style jsx>{style}</style>
  </div>
);

export default Layout;
