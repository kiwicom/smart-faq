// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import css from 'styled-jsx/css';

import BaggageLoader from './BaggageLoader';
import BaggageDescriptionFragment from './BaggageDescription';
import replaceWithCurrentDomain from '../../../helpers/replaceWithCurrentDomain';
import type { BaggageSummary as BaggageSummaryProps } from './__generated__/BaggageSummary.graphql';

type Props = {|
  data: BaggageSummaryProps,
  mmbUrl: string,
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
  hr.separationLine {
    height: 1px;
    background-color: #e8edf1;
    border: none;
  }
`;

const BaggageSummary = ({ data, mmbUrl }: Props) => {
  const cabinBaggage = idx(data, _ => _.cabin) || [];
  const checkedBaggage = idx(data, _ => _.checked) || [];
  return data ? (
    <React.Fragment>
      {checkedBaggage.map((baggage, i) => (
        /* eslint-disable react/no-array-index-key*/
        <BaggageDescriptionFragment key={i} data={baggage} type="Checked" />
      ))}
      {cabinBaggage.map((baggage, i) => (
        /* eslint-disable react/no-array-index-key*/
        <BaggageDescriptionFragment key={i} data={baggage} type="Cabin" />
      ))}
      <div className="moreInfo">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={replaceWithCurrentDomain(mmbUrl)}
        >
          More Info
        </a>
      </div>
      <style jsx>{styles}</style>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <hr className="separationLine" />
      <BaggageLoader />
      <style jsx>{styles}</style>
    </React.Fragment>
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
