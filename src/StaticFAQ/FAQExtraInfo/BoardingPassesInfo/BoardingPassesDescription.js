// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from 'react-relay';
import { FlightDirect, Download } from '@kiwicom/orbit-components/lib/icons';

import { simpleTracker } from '../../../helpers/analytics/trackers';
import replaceWithCurrentDomain from '../../../helpers/replaceWithCurrentDomain';
import type { BoardingPassesDescription as BoardingPassesDescriptionProps } from './__generated__/BoardingPassesDescription.graphql';

type Props = {|
  data: BoardingPassesDescriptionProps,
  mmbUrl: string,
|};

const moreInfoBoardingTracker = () =>
  simpleTracker('smartFAQ', {
    action: 'clickOnMoreInfoBoarding',
  });

const downloadBoardingPassTracker = () =>
  simpleTracker('smartFAQ', {
    action: 'downloadBoardingPass',
  });

const BoardingPassesDescription = ({ data, mmbUrl }: Props) => {
  if (data.leg === null) return null;
  const departureCity = idx(data, _ => _.leg.departure.airport.city.name);
  const arrivalCity = idx(data, _ => _.leg.arrival.airport.city.name);
  const boardingPassUrl = idx(data, _ => _.boardingPassUrl);
  const availableAt = idx(data, _ => _.availableAt);

  return (
    <React.Fragment>
      <hr className="separationLine" />
      <div className="boardingPassesRow">
        <p className="leg">
          {departureCity}
          <FlightDirect size="medium" customColor="#bac7d5" />
          {arrivalCity}
        </p>
        <div className="info">
          {boardingPassUrl ? (
            <a
              href={boardingPassUrl}
              onClick={downloadBoardingPassTracker}
              target="_blank"
              className="download"
            >
              <Download size="medium" customColor="#00a991" />
              Download
            </a>
          ) : availableAt ? (
            <p>Available {availableAt}</p>
          ) : (
            <a
              href={replaceWithCurrentDomain(mmbUrl)}
              onClick={moreInfoBoardingTracker}
              target="_blank"
              className="moreInfo"
            >
              More info
            </a>
          )}
        </div>
      </div>
      <style jsx>
        {`
          div.boardingPassesRow {
            display: flex;
            justify-content: space-between;
            align-items: center;
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
            margin: 0;
          }
          div.info a.download {
            font-size: 12px;
            color: #00a991;
            text-decoration: none;
          }
          div.info a.moreInfo {
            font-size: 12px;
            font-weight: 500;
            line-height: 1.4;
            color: #171b1e;
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
            font-size: 14px;
            font-weight: bold;
            line-height: 1.4;
            color: #46515e;
            display: inline-block;
            margin: 0 0 0 5px;
          }
          hr.separationLine {
            height: 1px;
            background-color: #e8edf1;
            border: none;
            margin: 0;
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
