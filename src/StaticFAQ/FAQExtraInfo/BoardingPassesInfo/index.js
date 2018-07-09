// @flow

import idx from 'idx';
import * as React from 'react';
import css from 'styled-jsx/css';
import { graphql } from 'react-relay';
import { Text } from '@kiwicom/orbit-components';
import { Ticket } from '@kiwicom/orbit-components/lib/icons';

import {
  BookingState,
  type BookingStateType,
} from '../../../context/BookingState';
import BoardingPassesSummary from './BoardingPassesSummary';
import QueryRenderer from '../../../relay/QueryRenderer';
import type { BoardingPassesInfoQuery } from './__generated__/BoardingPassesInfoSelectedQuery.graphql';
import type { BoardingPassesInfoNearestQuery } from './__generated__/BoardingPassesInfoNearestQuery.graphql';

type Props = {||};

type QueryProps = {|
  props: BoardingPassesInfoQuery | BoardingPassesInfoNearestQuery,
|};

const styles = css`
  div.boardingPassesCard {
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
    line-height: 1.8;
    vertical-align: bottom;
    color: #171b1e;
  }
  div.subtitle {
    margin-left: 24px;
    margin-bottom: 24px;
  }
`;

const selectedInfoBoardingPasses = graphql`
  query BoardingPassesInfoSelectedQuery($id: ID!) {
    booking(id: $id) {
      assets {
        ...BoardingPassesSummary
      }
      directAccessURL
    }
  }
`;

const nearestInfoBoardingPasses = graphql`
  query BoardingPassesInfoNearestQuery {
    nearestBooking {
      assets {
        ...BoardingPassesSummary
      }
      directAccessURL
    }
  }
`;

class BoardingPassesInfo extends React.Component<Props> {
  renderBoardingPassesCard = (queryProps: QueryProps) => {
    const boardingPasses =
      idx(queryProps.props, _ => _.booking.assets) ||
      idx(queryProps.props, _ => _.nearestBooking.assets);
    const directAccessURL =
      idx(queryProps.props, _ => _.booking.directAccessURL) ||
      idx(queryProps.props, _ => _.nearestBooking.directAccessURL);

    return (
      <div className="boardingPassesCard">
        <div className="iconTitle">
          <Ticket customColor="black" />
        </div>
        <h1 className="title">Your boarding passes</h1>
        <div className="subtitle">
          <Text type="attention">
            Here, you can download your boarding passes or see when they will
            become available.
          </Text>
        </div>
        <BoardingPassesSummary data={boardingPasses} mmbUrl={directAccessURL} />
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
              query={nearestInfoBoardingPasses}
              render={this.renderBoardingPassesCard}
              cacheConfig={{ force: true }}
            />
          ) : (
            <QueryRenderer
              query={selectedInfoBoardingPasses}
              render={this.renderBoardingPassesCard}
              cacheConfig={{ force: true }}
              variables={{ id: selectedBooking }}
            />
          );
        }}
      </BookingState.Consumer>
    );
  }
}

export default BoardingPassesInfo;
