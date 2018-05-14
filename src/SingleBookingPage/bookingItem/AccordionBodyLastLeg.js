// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import css from 'styled-jsx/css';
import idx from 'idx';
import { AirplaneDown, Calendar } from '@kiwicom/orbit-components/lib/icons';

import { FormatDate } from '../../helpers/dateUtils';
import AccordionLegCities from './AccordionLegCities';
import type { AccordionBodyLastLeg_leg } from './__generated__/AccordionBodyLastLeg_leg.graphql';

const lastLegStyle = css`
  div.lastLeg {
    border-left: 2px dotted #adb9c5;
    padding: 0px 18px;
    height: 64px;
    position: relative;
    margin-top: 5px;
  }
  div.calendarIcon {
    position: absolute;
    top: -5px;
    left: -13px;
    background: #fff;
    color: #2f363c;
  }
  div.date {
    margin-bottom: 6px;
  }
  div.airplaneIcon {
    position: absolute;
    left: -13px;
    top: 40px;
    background: #fff;
  }
`;

type LastLegProps = {|
  leg: AccordionBodyLastLeg_leg,
|};

const RawAccordionLastLeg = (props: LastLegProps) => {
  const { leg } = props;
  const initialDeparture = idx(leg.departure, _ => _.localTime) || '';
  return (
    <React.Fragment>
      <div className="lastLeg">
        <div className="calendarIcon">
          <Calendar customColor="#2f363c" height="20" />
        </div>
        <div className="date">
          {FormatDate({ dateString: initialDeparture })}
        </div>
        <AccordionLegCities leg={leg} />
        <div className="airplaneIcon">
          <AirplaneDown customColor="#adb9c5" height="12" />
        </div>
      </div>
      <style jsx>{lastLegStyle}</style>
    </React.Fragment>
  );
};

export default createFragmentContainer(
  RawAccordionLastLeg,
  graphql`
    fragment AccordionBodyLastLeg_leg on Leg {
      ...AccordionLegCities_leg
      departure {
        localTime
      }
    }
  `,
);
