// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import css from 'styled-jsx/css';

import BaggageLoader from './BaggageLoader';
import BaggageDescriptionFragment from './BaggageDescription';
// import replaceWithCurrentDomain from '../../../helpers/replaceWithCurrentDomain';
import type { BaggageSummary as BaggageSummaryProps } from './__generated__/BaggageSummary.graphql';

type Props = {|
  data: BaggageSummaryProps,
|};

const styles = css`
  .moreInfo {
    padding-left: 24px;
    padding-bottom: 24px;
  }
  .moreInfo a {
    color: #00a991;
    font-size: 12px;
    text-decoration: none;
    font-weight: 500;
  }
`;

const BaggageSummary = ({ data }: Props) => {
  const cabinBaggage = idx(data, _ => _.cabin) || [];
  const checkedBaggage = idx(data, _ => _.checked) || [];
  return data ? (
    <React.Fragment>
      {checkedBaggage.map((bagagge, i) => (
        /* eslint-disable react/no-array-index-key*/
        <BaggageDescriptionFragment key={i} data={bagagge} type="Checked" />
      ))}
      {cabinBaggage.map((bagagge, i) => (
        /* eslint-disable react/no-array-index-key*/
        <BaggageDescriptionFragment key={i} data={bagagge} type="Cabin" />
      ))}
      <div className="moreInfo">
        <a
          target="_blank"
          rel="noopener noreferrer"
          // href={replaceWithCurrentDomain(booking.directAccessURL)}
          href="/"
        >
          More Info
        </a>
      </div>
      <style jsx>{styles}</style>
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
