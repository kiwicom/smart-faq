// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import css from 'styled-jsx/css';

import { Box } from '../../common';
import AccordionBody from './AccordionBody';
import AccordionHeader from './AccordionHeader';
import type { AccordionTripSummary_trip } from './__generated__/AccordionTripSummary_trip.graphql';

const styles = css`
  .accordionWrapper {
    margin-bottom: 16px;
  }
  .bookingAccordion {
    position: relative;
    width: 100%;
    border-radius: 3px;
  }
  .bookingAccordion > div:focus {
    outline: 0;
  }
`;

type Props = {|
  trip: AccordionTripSummary_trip,
|};
type State = {|
  isToggled: boolean,
|};

class Accordion extends React.Component<Props, State> {
  state = {
    isToggled: false,
  };
  toggleBody = () => {
    this.setState(prevState => ({ isToggled: !prevState.isToggled }));
  };
  render() {
    const { trip } = this.props;
    return (
      <div className="accordionWrapper">
        <Box padding="12px 16px 16px 12px">
          <div className="bookingAccordion">
            <div
              onClick={this.toggleBody}
              onKeyUp={null}
              tabIndex="0"
              role="button"
            >
              <AccordionHeader isToggled={this.state.isToggled} trip={trip} />
            </div>
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
