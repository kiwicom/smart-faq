// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import BaggageLoader from './BaggageLoader';
import BaggageDescription from './BaggageDescription';
import type { BaggageSummary as BaggageSummaryProps } from './__generated__/BaggageSummary.graphql';

type Props = {|
  data: BaggageSummaryProps,
|};
const BaggageSummary = ({ data }: Props) => {
  const baggageNumber = (idx(data, _ => _.checked) || []).length;
  const { height, weight, width, length } = idx(data, _ => _.checked[0]) || {};
  const dimensions = { height, weight, width, length };
  return data ? (
    <React.Fragment>
      <div className="baggageRow">
        <BaggageDescription
          dimensions={dimensions}
          amount={baggageNumber}
          type="checked"
        />
      </div>
      <hr className="separationLine" />
      <div className="baggageRow">
        <BaggageDescription
          dimensions={dimensions}
          amount={baggageNumber}
          type="checked"
        />
      </div>
      <style jsx>
        {`
          hr.separationLine {
            border: solid 1px #e8edf1;
            width: 100%;
          }
          div.baggageRow {
            padding: 15px 24px 15px 24px;
          }
        `}
      </style>
    </React.Fragment>
  ) : (
    <BaggageLoader />
  );
};

export default createFragmentContainer(
  BaggageSummary,
  graphql`
    fragment BaggageSummary on AllowedBaggage {
      checked {
        height
        length
        width
        weight
      }
      cabin {
        height
        length
        width
        weight
      }
    }
  `,
);
