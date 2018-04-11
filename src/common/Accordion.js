// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';
import { ChevronDown } from '@kiwicom/orbit-components/lib/icons';
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
    height: 16px;
    width: 16px;
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
  flight: {
    date: string,
    airlineUrl: string,
    departureCity: {
      name: string,
      iataCode: string,
    },
    arrivalCity: {
      name: string,
      iataCode: string,
    },
  },
|};

const Accordion = (props: Props) => {
  const flight = props.flight;
  return (
    <div className="Accordion">
      <div className="header">
        <div className="logo">
          <img src={flight.airlineUrl} alt="Vueling" />
        </div>
        <div className="info">
          <Typography type="secondary" size="small">
            {formatDate(flight.date)}
          </Typography>
          <div className="itinerary">
            <span className="location">
              <Typography variant="bold" type="primary">
                {flight.departureCity.name}&nbsp;({
                  flight.departureCity.iataCode
                })
              </Typography>
            </span>
            <span className="arrow">
              <Typography type="secondary">&#8594;</Typography>
            </span>
            <span className="location">
              <Typography variant="bold" type="primary">
                {flight.arrivalCity.name}&nbsp;({flight.arrivalCity.iataCode})
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
