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
import CheckedBaggage from './CheckedBaggage';
import CabinBaggage from './CabinBaggage';
import QueryRenderer from '../../../relay/QueryRenderer';
import type { BaggageInfoQuery } from './__generated__/BaggageInfoQuery.graphql';

type Props = {||};

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
  div.baggageRow {
    padding: 15px 24px 15px 24px;
  }
`;

const queryInfoBaggage = graphql`
  query BaggageInfoQuery($id: ID!) {
    booking(id: $id) {
      allowedBaggage {
        ...CabinBaggage
        ...CheckedBaggage
      }
    }
  }
`;

class BaggageInfo extends React.Component<Props> {
  renderBaggageCard = (queryProps: BaggageInfoQuery) => {
    const baggage = idx(queryProps.props, _ => _.booking.allowedBaggage);
    return (
      <div className="card">
        <div className="iconTitle">
          <Baggages customColor="black" />
        </div>
        <div className="title">
          <Heading>Your baggage</Heading>
        </div>
        <div className="subtitle">
          <Text type="attention">Here you can see your baggage allowance</Text>
        </div>
        <hr className="separationLine" />
        <div className="baggageRow">
          <CheckedBaggage data={baggage} />
        </div>
        <hr className="separationLine" />
        <div className="baggageRow">
          <CabinBaggage data={baggage} />
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  };

  render() {
    return (
      <BookingState.Consumer>
        {({ selectedBooking }: BookingStateType) => (
          <QueryRenderer
            query={queryInfoBaggage}
            render={this.renderBaggageCard}
            cacheConfig={{ force: true }}
            variables={{ id: selectedBooking }}
          />
        )}
      </BookingState.Consumer>
    );
  }
}

export default BaggageInfo;
