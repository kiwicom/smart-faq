// @flow

import * as React from 'react';
import css from 'styled-jsx/css';

import { simpleTracker } from '../../helpers/analytics/trackers';
import { Box } from '../../common';
import AccordionBody from './AccordionBody';
import AccordionHeader from './AccordionHeader';
import type { Trip } from '../../types';

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
  trip: Trip,
|};
type State = {|
  isToggled: boolean,
|};

class Accordion extends React.Component<Props, State> {
  state = {
    isToggled: false,
  };

  toggleBody = () => {
    !this.state.isToggled &&
      simpleTracker('smartFAQBookingOverview', {
        action: 'openFlightCard',
      });
    this.setState(prevState => ({ isToggled: !prevState.isToggled }));
  };

  handleKeyUp = (e: { key: string }) => {
    if (e.key !== 'Enter') return;
    this.toggleBody();
  };

  render() {
    const { trip } = this.props;
    return (
      <div className="accordionWrapper">
        <Box padding="12px 16px 16px 12px">
          <div className="bookingAccordion">
            <div
              onClick={this.toggleBody}
              onKeyUp={this.handleKeyUp}
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

export default Accordion;
