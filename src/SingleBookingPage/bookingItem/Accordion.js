// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import css from 'styled-jsx/css';
import idx from 'idx';
import { Typography } from '@kiwicom/orbit-components';
import {
  FlightDirect,
  ChevronDown,
  ChevronUp,
} from '@kiwicom/orbit-components/lib/icons';

import { FormatDate } from '../../helpers/dateUtils';
import { Box } from '../../common';
import CarrierLogoWrapper from './CarrierLogoWrapper';
import AccordionBody from './AccordionBody';
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
`;
const headerStyles = css`
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
    cursor: pointer;
  }
  .itinerary .location {
    margin-right: 4px;
  }
`;

type Props = {|
  trip: AccordionTripSummary_trip,
|};
type State = {|
  isToggled: boolean,
|};
type HeaderProps = {|
  trip: AccordionTripSummary_trip,
  toggle: () => void,
  isToggled: boolean,
|};

const AccordionHeader = ({ trip, toggle, isToggled }: HeaderProps) => {
  const departureDate = idx(trip, _ => _.departure.localTime);
  const departureCode = idx(trip, _ => _.departure.airport.locationId);
  const departureCity = idx(trip, _ => _.departure.airport.city.name);
  const arrivalCity = idx(trip, _ => _.arrival.airport.city.name);
  const arrivalCode = idx(trip, _ => _.arrival.airport.locationId);
  return (
    <div className="header">
      <div className="logo">
        <CarrierLogoWrapper legs={trip.legs} />
      </div>
      <div className="info">
        <Typography type="secondary" size="small">
          {departureDate && <FormatDate dateString={departureDate} />}
        </Typography>
        <div className="itinerary">
          <span className="location">
            <Typography variant="bold" type="primary">
              {departureCity}&nbsp;({departureCode})
            </Typography>
          </span>
          <span className="arrow">
            <span className="inline-icon">
              <FlightDirect />
            </span>
          </span>
          <span className="location">
            <Typography variant="bold" type="primary">
              {arrivalCity}&nbsp;({arrivalCode})
            </Typography>
          </span>
        </div>
      </div>
      <div
        className="toggle"
        onKeyUp={null}
        onClick={toggle}
        tabIndex="0"
        role="button"
      >
        {isToggled ? (
          <ChevronUp customColor="#bac7d5" />
        ) : (
          <ChevronDown customColor="#bac7d5" />
        )}
      </div>
      <style jsx>{headerStyles}</style>
    </div>
  );
};

class Accordion extends React.Component<Props, State> {
  state = {
    isToggled: false,
  };
  toggleBody = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };
  render() {
    const { trip } = this.props;
    return (
      <div className="AccordionWrapper">
        <Box padding="12px 16px 16px 12px">
          <div className="Accordion">
            <AccordionHeader
              isToggled={this.state.isToggled}
              trip={trip}
              toggle={this.toggleBody}
            />
            {this.state.isToggled && <AccordionBody legs={trip.legs} />}
          </div>
        </Box>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

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
        airline {
          name
          code
          logoUrl
        }
        ...CarrierLogoWrapper_legs
        ...AccordionBody_legs
      }
    }
  `,
);
