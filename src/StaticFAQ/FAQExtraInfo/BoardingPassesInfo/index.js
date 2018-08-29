// @flow

import idx from 'idx';
import * as React from 'react';
import css from 'styled-jsx/css';
import { graphql } from 'react-relay';
import { Text } from '@kiwicom/orbit-components';
import { Ticket } from '@kiwicom/orbit-components/lib/icons';

import { SelectedBooking } from '../../../context/SelectedBooking';
import type { SelectedBookingType } from '../../../context/SelectedBooking';
import BoardingPassesSummary from './BoardingPassesSummary';
import QueryRenderer from '../../../relay/QueryRenderer';
import { UserContext } from '../../../context/User';
import type { UserContextType } from '../../../context/User';
import type { BoardingPassesInfoQuery } from './__generated__/BoardingPassesInfoSelectedQuery.graphql';
import type { BoardingPassesInfoNearestQuery } from './__generated__/BoardingPassesInfoNearestQuery.graphql';
import type { BoardingPassesInfoSingleQuery } from './__generated__/BoardingPassesInfoSingleQuery.graphql';

type Props = {||};

type QueryProps = {|
  props:
    | BoardingPassesInfoQuery
    | BoardingPassesInfoNearestQuery
    | BoardingPassesInfoSingleQuery,
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
    line-height: 1.2;
    color: #171b1e;
    margin: 0;
  }
  div.subtitle {
    margin: 0 24px 24px;
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

const singleBookingBoardingPasses = graphql`
  query BoardingPassesInfoSingleQuery($id: Int!, $authToken: String!) {
    singleBooking(id: $id, authToken: $authToken) {
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
      idx(queryProps.props, _ => _.nearestBooking.assets) ||
      idx(queryProps.props, _ => _.singleBooking.assets);
    const directAccessURL =
      idx(queryProps.props, _ => _.booking.directAccessURL) ||
      idx(queryProps.props, _ => _.nearestBooking.directAccessURL) ||
      idx(queryProps.props, _ => _.singleBooking.directAccessURL);

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
      <SelectedBooking.Consumer>
        {({ selectedBooking }: SelectedBookingType) => {
          return selectedBooking ? (
            <UserContext.Consumer>
              {({ simpleToken }: UserContextType) => {
                return simpleToken ? (
                  <QueryRenderer
                    query={singleBookingBoardingPasses}
                    variables={{ id: selectedBooking, authToken: simpleToken }}
                    render={this.renderBoardingPassesCard}
                  />
                ) : (
                  <QueryRenderer
                    query={selectedInfoBoardingPasses}
                    render={this.renderBoardingPassesCard}
                    variables={{ id: selectedBooking }}
                  />
                );
              }}
            </UserContext.Consumer>
          ) : (
            <QueryRenderer
              query={nearestInfoBoardingPasses}
              render={this.renderBoardingPassesCard}
            />
          );
        }}
      </SelectedBooking.Consumer>
    );
  }
}

export default BoardingPassesInfo;
