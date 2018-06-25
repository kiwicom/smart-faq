// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { BaggageBig } from '@kiwicom/orbit-components/lib/icons';

import type { CheckedBaggage as CheckedBaggageProps } from './__generated__/CheckedBaggage.graphql';

type Props = {|
  data: CheckedBaggageProps,
|};

export const CheckedBaggage = ({ data }: Props) => {
  const baggageNumber = (idx(data, _ => _.checked) || []).length;
  const { height, weight, width, length } = idx(data, _ => _.checked[0]) || {};
  return (
    <React.Fragment>
      <div className="baggageNumber">
        <p>{baggageNumber}x</p>
      </div>
      <BaggageBig customColor="#7f91a8" />
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
  CheckedBaggage,
  graphql`
    fragment CheckedBaggage on AllowedBaggage {
      checked {
        height
        length
        width
        weight
      }
    }
  `,
);
