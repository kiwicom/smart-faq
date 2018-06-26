// @flow

import idx from 'idx';
import * as React from 'react';
import css from 'styled-jsx/css';
import { graphql } from 'react-relay';
import { Heading, Text } from '@kiwicom/orbit-components';
import { Baggages } from '@kiwicom/orbit-components/lib/icons';

import {
  BookingState,
  type BookingStateType,
} from '../../../context/BookingState';
import BaggageSummary from './BaggageSummary';
import QueryRenderer from '../../../relay/QueryRenderer';
import type { BaggageInfoQuery } from './__generated__/BaggageInfoSelectedQuery.graphql';
import type { BaggageInfoNearestQuery } from './__generated__/BaggageInfoNearestQuery.graphql';

type Props = {||};

type QueryProps = {|
  props: BaggageInfoQuery | BaggageInfoNearestQuery,
|};

const styles = css`
  div.card {
    margin-top: 22px;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: #ffffff;
    border: solid 1px #e8edf1;
  }
  div.iconTitle {
    margin: 25px 12px 8.6px 24px;
    display: inline-block;
  }
  div.title {
    display: inline-block;
  }
  div.subtitle {
    margin-left: 24px;
    margin-bottom: 24px;
  }
  hr.separationLine {
    border: solid 1px #e8edf1;
    width: 100%;
  }
`;

const selectedBaggageInfo = graphql`
  query BaggageInfoSelectedQuery($id: ID!) {
    booking(id: $id) {
      allowedBaggage {
        ...BaggageSummary
      }
    }
  }
`;

const nearestInfoBaggage = graphql`
  query BaggageInfoNearestQuery {
    nearestBooking {
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

    return (
      <div className="card">
        <div className="iconTitle">
          <Baggages customColor="black" />
        </div>
        <div className="title">
          <Heading type="title2" element="h2">
            Your baggage
          </Heading>
        </div>
        <div className="subtitle">
          <Text type="attention">Here you can see your baggage allowance</Text>
        </div>
        <hr className="separationLine" />
        <BaggageSummary data={baggage} />
        <style jsx>{styles}</style>
      </div>
    );
  };

  render() {
    return (
      <BookingState.Consumer>
        {({ selectedBooking }: BookingStateType) => {
          return selectedBooking === null ? (
            <QueryRenderer
              query={nearestInfoBaggage}
              render={this.renderBaggageCard}
              cacheConfig={{ force: true }}
            />
          ) : (
            <QueryRenderer
              query={selectedBaggageInfo}
              render={this.renderBaggageCard}
              cacheConfig={{ force: true }}
              variables={{ id: selectedBooking }}
            />
          );
        }}
      </BookingState.Consumer>
    );
  }
}

export default BaggageInfo;
