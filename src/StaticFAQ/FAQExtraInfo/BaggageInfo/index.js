// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { graphql } from 'react-relay';
import { Heading, Text } from '@kiwicom/orbit-components';
import { Baggages } from '@kiwicom/orbit-components/lib/icons';

import {
  BookingState,
  type BookingStateType,
} from '../../../context/BookingState';
import QueryRenderer from '../../../relay/QueryRenderer';

type Props = {||};

const styles = css`
  div.card {
    margin-top: 22px;
    width: 100 %;
    height: 303px;
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
  }
  hr.separationLine {
    margin-top: 24.4px;
    border: solid 1px #e8edf1;
    width: 100 %;
  }
`;

const queryInfoBaggage = graphql`
  query BaggageInfoQuery($id: ID!) {
    booking(id: $id) {
      allowedBaggage {
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
        additionalBaggage {
          price {
            amount
            currency
          }
          quantity
        }
      }
    }
  }
`;

class BaggageInfo extends React.Component<Props> {
  renderBaggageCard = queryProps => {
    console.log(queryProps);
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
