// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { BaggageSmall } from '@kiwicom/orbit-components/lib/icons';

import type { CabinBaggage as CabinBaggageProps } from './__generated__/CabinBaggage.graphql';

type Props = {|
  data: CabinBaggageProps,
|};

export const CabinBaggage = ({ data }: Props) => {
  const baggageNumber = (idx(data, _ => _.cabin) || []).length;
  const { height, weight, width, length } = idx(data, _ => _.cabin[0]) || {};
  return (
    <React.Fragment>
      <div className="baggageNumber">
        <p>{baggageNumber}x</p>
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

export default createFragmentContainer(
  CabinBaggage,
  graphql`
    fragment CabinBaggage on AllowedBaggage {
      cabin {
        height
        length
        width
        weight
      }
    }
  `,
);
