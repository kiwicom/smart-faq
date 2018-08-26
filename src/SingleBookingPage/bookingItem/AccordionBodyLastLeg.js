// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import css from 'styled-jsx/css';
import idx from 'idx';
import Calendar from '@kiwicom/orbit-components/lib/icons/Calendar';

import LegTypeIcon from './AccordionLegTypeIcon';
import { FormatDate } from '../../helpers/dateUtils';
import AccordionLegCities from './AccordionLegCities';
import type { AccordionBodyLastLeg_leg } from './__generated__/AccordionBodyLastLeg_leg.graphql';

const lastLegStyle = css`
  div.lastLeg {
    position: relative;
    padding: 0px 18px;
    margin: 5px 0 -30px 2px;
  }
  div.lastLeg:before {
    content: '';
    position: absolute;
    border-left: 2px dotted #adb9c5;
    height: 64px;
    left: -2px;
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
    color: #2f363c;
    font-weight: 500;
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

const AccordionLastLeg = (props: LastLegProps) => {
  const { leg } = props;
  const initialDeparture = idx(leg.departure, _ => _.localTime) || '';
  return (
    <React.Fragment>
      <div className="lastLeg">
        <div className="calendarIcon">
          <Calendar customColor="#2f363c" />
        </div>
        <div className="date">
          {FormatDate({ dateString: initialDeparture })}
        </div>
        <AccordionLegCities leg={leg} />
        <LegTypeIcon leg={leg} />
      </div>
      <style jsx>{lastLegStyle}</style>
    </React.Fragment>
  );
};

export const RawAccordionLastLeg = AccordionLastLeg;

export default createFragmentContainer(
  AccordionLastLeg,
  graphql`
    fragment AccordionBodyLastLeg_leg on Leg {
      ...AccordionLegCities_leg
      ...AccordionLegTypeIcon_leg
      departure {
        localTime
      }
    }
  `,
);
