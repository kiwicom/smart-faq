// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from 'react-relay';
import { FlightDirect, Download } from '@kiwicom/orbit-components/lib/icons';

import type { BoardingPassesDescription as BoardingPassesDescriptionProps } from './__generated__/BoardingPassesDescription.graphql';

type Props = {|
  data: BoardingPassesDescriptionProps,
|};

const BoardingPassesDescription = ({ data }: Props) => {
  if (data.leg === null) return null;
  const departureCity = idx(data, _ => _.leg.departure.airport.city.name);
  const arrivalCity = idx(data, _ => _.leg.arrival.airport.city.name);
  const boardingPassUrl = idx(data, _ => _.boardingPassUrl);

  return (
    <React.Fragment>
      <div className="boardingPassesRow">
        <p className="leg">
          {departureCity}
          <FlightDirect size="medium" customColor="#bac7d5" />
          {arrivalCity}
        </p>
        <div className="info">
          {boardingPassUrl ? (
            <a href={boardingPassUrl}>
              <Download size="medium" customColor="#00a991" />
              Download
            </a>
          ) : (
            <p>Not available yet</p>
          )}
        </div>
      </div>
      <hr className="separationLine" />
      <style jsx>
        {`
          div.boardingPassesRow {
            padding: 15px 24px 15px 24px;
          }
          div.info {
            display: inline-block;
            float: right;
          }
          div.info p {
            font-size: 12px;
            line-height: 1.4;
            color: #46515e;
          }
          div.info a {
            font-size: 12px;
            color: #00a991;
            text-decoration: none;
          }
          div.boardingPassesNumber {
            display: inline-block;
            margin-right: 8px;
          }
          div.boardingPassesNumber p {
            font-size: 14px;
            font-weight: bold;
            line-height: 1.4;
            color: #46515e;
            display: inline-block;
          }
          .leg {
            margin-left: 5px;
            font-size: 14px;
            font-weight: bold;
            line-height: 1.4;
            color: #46515e;
            display: inline-block;
          }
          hr.separationLine {
            border: solid 1px #e8edf1;
            width: 100%;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default createFragmentContainer(
  BoardingPassesDescription,
  graphql`
    fragment BoardingPassesDescription on BoardingPass {
      flightNumber
      boardingPassUrl
      leg {
        id
        departure {
          airport {
            city {
              name
            }
          }
        }
        arrival {
          airport {
            city {
              name
            }
          }
        }
      }
    }
  `,
);
