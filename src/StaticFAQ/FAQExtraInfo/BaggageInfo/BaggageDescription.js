// @flow

import * as React from 'react';
import { BaggageSmall } from '@kiwicom/orbit-components/lib/icons';

type Props = {||};
const BaggageDescription = ({ dimensions, amount, type }: Props) => {
  const { height, weight, width, length } = dimensions;
  return (
    <React.Fragment>
      <div className="baggageNumber">
        <p>{amount}x</p>
      </div>
      <BaggageSmall customColor="#7f91a8" />
      <p className="baggageWeight">Cabin baggage {weight} kg</p>
      <div className="baggageSize">
        <p>
          {height} x {width} x {length}
        </p>
      </div>
      <style jsx>
        {`
          div.baggageSize {
            display: inline-block;
            float: right;
          }
          div.baggageSize p {
            font-size: 12px;
            line-height: 1.4;
            color: #46515e;
          }
          div.baggageNumber {
            display: inline-block;
            margin-right: 8px;
          }
          div.baggageNumber p {
            font-size: 14px;
            font-weight: bold;
            line-height: 1.4;
            color: #46515e;
            display: inline-block;
          }
          p.baggageWeight {
            font-size: 14px;
            font-weight: bold;
            line-height: 1.4;
            color: #46515e;
            display: inline-block;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default BaggageDescription;
