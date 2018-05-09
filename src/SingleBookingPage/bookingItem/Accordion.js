// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import css from 'styled-jsx/css';
import idx from 'idx';
import { Typography } from '@kiwicom/orbit-components';
import { FlightDirect, ChevronDown } from '@kiwicom/orbit-components/lib/icons';

import { formatDate } from '../../helpers/dateUtils';
import { Box } from '../../common';
import CarrierLogoWrapper from './CarrierLogoWrapper';
import type { AccordionTripSummary_trip } from './__generated__/AccordionTripSummary_trip.graphql';

const styles = css`
  .AccordionWrapper {
    margin-bottom: 16px;
  }
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
  .logo {
    margin-right: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .toggle {
    position: relative;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .itinerary .location {
    margin-right: 4px;
  }
`;

type Props = {|
  trip: AccordionTripSummary_trip,
|};

const Accordion = ({ trip }: Props) => {
  const departureDate = idx(trip, _ => _.departure.localTime);
  const departureCode = idx(trip, _ => _.departure.airport.locationId);
  const departureCity = idx(trip, _ => _.departure.airport.city.name);
  const arrivalCity = idx(trip, _ => _.arrival.airport.city.name);
  const arrivalCode = idx(trip, _ => _.arrival.airport.locationId);

  return (
    <div className="AccordionWrapper">
      <Box padding="12px 16px 16px 12px">
        <div className="Accordion">
          <div className="header">
            <div className="logo">
              <CarrierLogoWrapper legs={trip.legs} />
            </div>
            <div className="info">
              <Typography type="secondary" size="small">
                {departureDate && formatDate(departureDate)}
              </Typography>
              <div className="itinerary">
                <span className="location">
                  <Typography variant="bold" type="primary">
                    {departureCity}&nbsp;({departureCode})
                  </Typography>
                </span>
                <span className="arrow">
                  <span className="inline-icon">
                    <FlightDirect customColor="#bac7d5" />
                  </span>
                </span>
                <span className="location">
                  <Typography variant="bold" type="primary">
                    {arrivalCity}&nbsp;({arrivalCode})
                  </Typography>
                </span>
              </div>
            </div>
            <div className="toggle">
              <ChevronDown />
            </div>
          </div>
        </div>
      </Box>
      <style jsx>{styles}</style>
    </div>
  );
};

export default createFragmentContainer(
  Accordion,
  graphql`
    fragment AccordionTripSummary_trip on Trip {
      departure {
        localTime
        airport {
          locationId
          city {
            name
          }
        }
      }
      arrival {
        airport {
          locationId
          city {
            name
          }
        }
      }
      legs {
        ...CarrierLogoWrapper_legs
      }
    }
  `,
);
