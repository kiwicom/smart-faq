// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from 'react-relay';

import BoardingPassesLoader from './BoardingPassesLoader';
import BoardingPassesDescription from './BoardingPassesDescription';
import type { BoardingPassesSummary as BoardingPassesSummaryProps } from './__generated__/BoardingPassesSummary.graphql';

type Props = {|
  data: BoardingPassesSummaryProps,
  mmbUrl: string,
|};

const BoardingPassesSummary = ({ data, mmbUrl }: Props) => {
  if (data === null) {
    return (
      <React.Fragment>
        <hr className="separationLine" />
        <BoardingPassesLoader />
        <style jsx>
          {`
            hr.separationLine {
              height: 1px;
              background-color: #e8edf1;
              border: none;
              margin: 0;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
  const { boardingPasses } = data;
  return (
    boardingPasses &&
    boardingPasses
      .slice()
      .sort(
        (a, b) =>
          new Date(idx(a, _ => _.leg.departure.time) || '') -
          new Date(idx(b, _ => _.leg.departure.time) || ''),
      )
      .map(
        boardingPass =>
          boardingPass && (
            <BoardingPassesDescription
              key={boardingPass.flightNumber}
              data={boardingPass}
              mmbUrl={mmbUrl}
            />
          ),
      )
  );
};

export default createFragmentContainer(
  BoardingPassesSummary,
  graphql`
    fragment BoardingPassesSummary on BookingAssets {
      boardingPasses {
        flightNumber
        leg {
          departure {
            time
          }
        }
        ...BoardingPassesDescription
      }
    }
  `,
);
