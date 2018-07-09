// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import css from 'styled-jsx/css';
import idx from 'idx';
import { Clock, Check, Calendar } from '@kiwicom/orbit-components/lib/icons';

import LegTypeIcon from './AccordionLegTypeIcon';
import { FormatDate, formatTimeDuration } from '../../helpers/dateUtils';
import AccordionLegCities from './AccordionLegCities';
import type { AccordionBodyLeg_leg } from './__generated__/AccordionBodyLeg_leg.graphql';
import type { AccordionBodyLeg_nextLeg } from './__generated__/AccordionBodyLeg_nextLeg.graphql';

const legStyle = css`
  div.leg {
    border-left: 2px dotted #adb9c5;
    padding: 0px 18px;
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
  div.layover span.text {
    color: #7c8b99;
    margin-left: 8px;
    font-size: 12px;
  }
  div.layover,
  div.guarantee {
    display: flex;
    align-items: center;
  }
  div.guarantee .text {
    color: #7c8b99;
    margin-left: 8px;
    font-size: 12px;
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

type LegProps = {|
  leg: AccordionBodyLeg_leg,
  nextLeg: AccordionBodyLeg_nextLeg,
|};

const AccordionBodyLeg = (props: LegProps) => {
  const { leg, nextLeg } = props;
  const initialDeparture = idx(leg.departure, _ => _.localTime) || '';
  const arrivalTime = idx(leg.arrival, _ => _.time) || '';
  const nextDepartureTime = idx(nextLeg.departure, _ => _.time) || '';
  const layoverTime =
    (new Date(nextDepartureTime) - new Date(arrivalTime)) / 60e3; // Diff in minutes
  return (
    <React.Fragment>
      <div className="leg">
        <div className="calendarIcon">
          <Calendar customColor="#2f363c" height="20" />
        </div>
        <div className="date">
          {FormatDate({ dateString: initialDeparture })}
        </div>
        <AccordionLegCities leg={props.leg} />
        <div className="layover">
          <Clock customColor="#7c8b99" height="16" />
          <span className="text">
            {formatTimeDuration(layoverTime)} layover
          </span>
        </div>
        <div className="guarantee">
          <Check customColor="#01bba5" height="23" />
          <span className="text">
            Transfer protected by the <b>Kiwi.com Guarantee</b>
          </span>
        </div>
        <LegTypeIcon leg={leg} />
      </div>
      <style jsx>{legStyle}</style>
    </React.Fragment>
  );
};

export default createFragmentContainer(AccordionBodyLeg, {
  leg: graphql`
    fragment AccordionBodyLeg_leg on Leg {
      ...AccordionLegCities_leg
      ...AccordionLegTypeIcon_leg
      arrival {
        time
        localTime
      }
      departure {
        time
        localTime
      }
    }
  `,
  nextLeg: graphql`
    fragment AccordionBodyLeg_nextLeg on Leg {
      departure {
        time
      }
    }
  `,
});
