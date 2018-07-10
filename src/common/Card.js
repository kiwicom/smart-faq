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
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.06), 0px 3px 6px rgba(0, 0, 0, 0.09);
    transition: box-shadow 0.25s ease-in-out;
  }
  .card:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06),
      0px 6px 6px rgba(0, 0, 0, 0.09);
  }

  @media only screen and (max-width: 1180px) {
    .card {
      padding: 14px 22px;
      position: relative;
      margin-top: 0;
      height: 100px;
      border-radius: none;
      box-shadow: none;
      border-top: 2px solid #e8edf1;
    }
    .card:hover {
      box-shadow: none;
    }
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
