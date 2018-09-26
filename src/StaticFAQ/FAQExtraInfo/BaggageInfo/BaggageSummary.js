// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { graphql, createFragmentContainer } from 'react-relay';
import Trans from '@kiwicom/nitro/lib/components/Text';

import BaggageLoader from './BaggageLoader';
import BaggageDescriptionFragment from './BaggageDescription';
import replaceWithCurrentDomain from '../../../helpers/replaceWithCurrentDomain';
import type { BaggageSummary as BaggageSummaryProps } from './__generated__/BaggageSummary.graphql';

type Props = {|
  data: ?BaggageSummaryProps,
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

export const RawBaggageSummary = ({ data, mmbUrl }: Props) => {
  return data ? (
    <React.Fragment>
      {data.map((baggage, i) => (
        /* eslint-disable react/no-array-index-key*/
        <BaggageDescriptionFragment key={i} data={baggage} />
      ))}
      <div className="moreInfo">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={replaceWithCurrentDomain(mmbUrl)}
        >
          <Trans t={__('smartfaq.baggage_info.more_info')} />
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
  RawBaggageSummary,
  graphql`
    fragment BaggageSummary on BookingBaggage @relay(plural: true) {
      ...BaggageDescription
    }
  `,
);
