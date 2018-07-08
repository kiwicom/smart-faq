// @flow

import * as React from 'react';
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
            }
          `}
        </style>
      </React.Fragment>
    );
  }
  const { boardingPasses } = data;
  return (
    boardingPasses &&
    boardingPasses.map(
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
        ...BoardingPassesDescription
      }
    }
  `,
);
