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
  const cabinBaggage = idx(data, _ => _.cabin) || [];
  const checkedBaggage = idx(data, _ => _.checked) || [];
  return data ? (
    <React.Fragment>
      {checkedBaggage.map((bagagge, i) => (
        /* eslint-disable react/no-array-index-key*/
        <BaggageDescription key={i} data={bagagge} type="Checked" />
      ))}
      {cabinBaggage.map((bagagge, i) => (
        /* eslint-disable react/no-array-index-key*/
        <BaggageDescription key={i} data={bagagge} type="Cabin" />
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
        ...BaggageDescription
      }
      cabin {
        ...BaggageDescription
      }
    }
  `,
);
