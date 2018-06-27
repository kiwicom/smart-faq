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

// const countBaggage = (baggage: []) =>
//   baggage.reduce((acc, obj) => {
//     const key = JSON.stringify(obj);
//     acc[key] = (acc[key] || 0) + 1;
//     return acc;
//   }, {});

const BaggageSummary = ({ data }: Props) => {
  const cabinBaggage = idx(data, _ => _.cabin) || [];
  const checkedBaggage = idx(data, _ => _.checked) || [];
  return data ? (
    <React.Fragment>
      {checkedBaggage.map((bagagge, i) => (
        /* eslint-disable react/no-array-index-key*/
        <BaggageDescription key={i} data={bagagge} amount={3} type="Checked" />
      ))}
      {cabinBaggage.map((bagagge, i) => (
        /* eslint-disable react/no-array-index-key*/
        <BaggageDescription key={i} data={bagagge} amount={3} type="Cabin" />
      ))}
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
        ...BaggageDescription @relay(mask: false)
      }
      cabin {
        ...BaggageDescription @relay(mask: false)
      }
    }
  `,
);
