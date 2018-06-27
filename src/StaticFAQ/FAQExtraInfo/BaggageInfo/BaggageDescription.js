// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { BaggageSmall, BaggageBig } from '@kiwicom/orbit-components/lib/icons';

import type { BaggageDescription as BaggageDescriptionProps } from './__generated__/BaggageDescription.graphql';

type Props = {|
  type: 'Cabin' | 'Checked',
  data: BaggageDescriptionProps,
|};

function renderIcon(type: string) {
  switch (type) {
    case 'Cabin':
      return <BaggageSmall size="medium" customColor="#bac7d5" />;
    case 'Checked':
      return <BaggageBig size="medium" customColor="#bac7d5" />;
  }
  return null;
}

const BaggageDescription = ({
  type,
  data: { height, weight, width, length },
}: Props) => {
  return (
    <React.Fragment>
      <div className="baggageRow">
        <div className="baggageNumber">
          <p>{1}x</p>
        </div>
        {renderIcon(type)}
        <p className="baggageWeight">
          {type} baggage {weight} kg
        </p>
        <div className="baggageSize">
          <p>
            {height} x {width} x {length}
          </p>
        </div>
      </div>
      <hr className="separationLine" />
      <style jsx>
        {`
          div.baggageRow {
            padding: 15px 24px 15px 24px;
          }
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
          hr.separationLine {
            border: solid 1px #e8edf1;
            width: 100%;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default createFragmentContainer(
  BaggageDescription,
  graphql`
    fragment BaggageDescription on Baggage {
      height
      weight
      width
      length
    }
  `,
);
