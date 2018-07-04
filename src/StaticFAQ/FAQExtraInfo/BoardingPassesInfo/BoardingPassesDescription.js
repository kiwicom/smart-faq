// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from 'react-relay';
import { FlightDirect, Download } from '@kiwicom/orbit-components/lib/icons';

import replaceWithCurrentDomain from '../../../helpers/replaceWithCurrentDomain';
import type { BoardingPassesDescription as BoardingPassesDescriptionProps } from './__generated__/BoardingPassesDescription.graphql';

type Props = {|
  data: BoardingPassesDescriptionProps,
  mmbUrl: string,
|};

const BoardingPassesDescription = ({ data, mmbUrl }: Props) => {
  if (data.leg === null) return null;
  const departureCity = idx(data, _ => _.leg.departure.airport.city.name);
  const arrivalCity = idx(data, _ => _.leg.arrival.airport.city.name);
  const boardingPassUrl = idx(data, _ => _.boardingPassUrl);
  const availableAt = idx(data, _ => _.availableAt);

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
            <a href={boardingPassUrl} className="download">
              <Download size="medium" customColor="#00a991" />
              Download
            </a>
          ) : availableAt ? (
            <p>Available {availableAt}</p>
          ) : (
            <a href={replaceWithCurrentDomain(mmbUrl)} className="moreInfo">
              More info
            </a>
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
          div.info a.download {
            font-size: 12px;
            color: #00a991;
            text-decoration: none;
          }
          div.info a.moreInfo {
            color: inherit;
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
      availableAt
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
