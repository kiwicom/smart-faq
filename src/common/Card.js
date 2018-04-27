// @flow

import * as React from 'react';
import css from 'styled-jsx/css';

const styles = css`
  .card {
    padding: 14px 22px;
    position: relative;
    margin-top: 24px;
    height: 100px;
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
  }
`;

type Props = {|
  children: React.Node,
|};

const Card = (props: Props) => (
  <div className="card">
    {props.children}
    <style jsx>{styles}</style>
  </div>
);

export default Card;
