// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';
import {
  AirplaneRight,
  ChevronDown,
} from '@kiwicom/orbit-components/lib/icons';
import { formatDate } from '../helpers/utils';

const styles = css`
  .Accordion {
    position: relative;
    width: 100%;
    border-radius: 3px;
  }
  .header {
    display: flex;
    width: 100%;
  }
  span.arrow {
    margin: 0px 4px;
  }
  div.logo {
    margin-right: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  div.logo img {
    height: 32px;
    width: 32px;
  }
  div.toggle {
    position: relative;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //margin-right: 0px;
  }
  div.itinerary .location {
    margin-right: 4px;
  }
`;

type Props = {|
  date: string,
  airlineUrl: string,
  departureCityName: string,
  departureCityCode: string,
  arrivalCityName: string,
  arrivalCityCode: string,
|};

const Accordion = (props: Props) => {
  const {
    date,
    airlineUrl,
    departureCityName,
    departureCityCode,
    arrivalCityName,
    arrivalCityCode,
  } = props;
  return (
    <div className="Accordion">
      <div className="header">
        <div className="logo">
          <img src={airlineUrl} alt="" />
        </div>
        <div className="info">
          <Typography type="secondary" size="small">
            {formatDate(date)}
          </Typography>
          <div className="itinerary">
            <span className="location">
              <Typography variant="bold" type="primary">
                {departureCityName}&nbsp;({departureCityCode})
              </Typography>
            </span>
            <span className="arrow">
              <span className="inline-icon">
                <AirplaneRight />
              </span>
            </span>
            <span className="location">
              <Typography variant="bold" type="primary">
                {arrivalCityName}&nbsp;({arrivalCityCode})
              </Typography>
            </span>
          </div>
        </div>
        <div className="toggle">
          <ChevronDown />
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Accordion;
