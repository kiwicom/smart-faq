// @flow

import idx from 'idx';
import * as React from 'react';
import css from 'styled-jsx/css';
import { graphql } from 'react-relay';
import { Text } from '@kiwicom/orbit-components';
import { Baggages } from '@kiwicom/orbit-components/lib/icons';

import { SelectedBooking } from '../../../context/SelectedBooking';
import type { SelectedBookingType } from '../../../context/SelectedBooking';
import BaggageSummary from './BaggageSummary';
import QueryRenderer from '../../../relay/QueryRenderer';
import type { BaggageInfoQuery } from './__generated__/BaggageInfoSelectedQuery.graphql';
import type { BaggageInfoNearestQuery } from './__generated__/BaggageInfoNearestQuery.graphql';

type Props = {||};

type QueryProps = {|
  props: BaggageInfoQuery | BaggageInfoNearestQuery,
|};

const styles = css`
  div.baggageCard {
    margin-top: 22px;
    width: 100%;
    border-radius: 3px;
    background-color: #ffffff;
    border: solid 1px #e8edf1;
  }
  div.iconTitle {
    margin: 25px 12px 8.6px 24px;
    display: inline-block;
  }
  h1.title {
    display: inline-block;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.7;
    vertical-align: bottom;
    color: #171b1e;
  }
  div.subtitle {
    margin-left: 24px;
    margin-bottom: 24px;
  }
`;

const selectedInfoBaggage = graphql`
  query BaggageInfoSelectedQuery($id: ID!) {
    booking(id: $id) {
      directAccessURL
      allowedBaggage {
        ...BaggageSummary
      }
    }
  }
`;

const nearestInfoBaggage = graphql`
  query BaggageInfoNearestQuery {
    nearestBooking {
      directAccessURL
      allowedBaggage {
        ...BaggageSummary
      }
    }
  }
`;

class BaggageInfo extends React.Component<Props> {
  renderBaggageCard = (queryProps: QueryProps) => {
    const baggage =
      idx(queryProps.props, _ => _.booking.allowedBaggage) ||
      idx(queryProps.props, _ => _.nearestBooking.allowedBaggage);

    const directAccessURL =
      idx(queryProps.props, _ => _.booking.directAccessURL) ||
      idx(queryProps.props, _ => _.nearestBooking.directAccessURL);

    return (
      <div className="baggageCard">
        <div className="iconTitle">
          <Baggages customColor="black" />
        </div>
        <h1 className="title">Your baggage</h1>
        <div className="subtitle">
          <Text type="attention">Here you can see your baggage allowance.</Text>
        </div>
        <BaggageSummary data={baggage} mmbUrl={directAccessURL} />
        <style jsx>{styles}</style>
      </div>
    );
  };

  render() {
    return (
      <SelectedBooking.Consumer>
        {({ selectedBooking }: SelectedBookingType) => {
          return selectedBooking === null ? (
            <QueryRenderer
              query={nearestInfoBaggage}
              render={this.renderBaggageCard}
              cacheConfig={{ force: true }}
            />
          ) : (
            <QueryRenderer
              query={selectedInfoBaggage}
              render={this.renderBaggageCard}
              cacheConfig={{ force: true }}
              variables={{ id: selectedBooking }}
            />
          );
        }}
      </SelectedBooking.Consumer>
    );
  }
}

export default BaggageInfo;
