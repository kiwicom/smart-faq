// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import css from 'styled-jsx/css';
import { AirplaneDown, Train, Bus } from '@kiwicom/orbit-components/lib/icons';

import type { AccordionLegTypeIcon_leg } from './__generated__/AccordionLegTypeIcon_leg.graphql';
import bookingLegTypes from '../../common/booking/bookingLegTypes';

const IconStyle = css`
  div.legTypeIcon {
    position: absolute;
    left: -13px;
    top: 40px;
    background: #fff;
  }
`;

type IconProps = {
  leg: AccordionLegTypeIcon_leg,
};

const LegTypeIcon = (props: IconProps) => {
  const type = props.leg.type;
  let icon;
  switch (type) {
    case bookingLegTypes.AIRCRAFT:
      icon = <AirplaneDown customColor="#adb9c5" size="medium" />;
      break;

    case bookingLegTypes.TRAIN:
      icon = <Train customColor="#00a991" size="medium" />;
      break;

    case bookingLegTypes.BUS:
      icon = <Bus customColor="#00a991" size="medium" />;
      break;

    default:
      icon = null;
  }
  return (
    <React.Fragment>
      {icon ? (
        <div className="legTypeIcon">
          {icon}
          <style jsx>{IconStyle}</style>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export const PureLegTypeIcon = LegTypeIcon;

export default createFragmentContainer(
  LegTypeIcon,
  graphql`
    fragment AccordionLegTypeIcon_leg on Leg {
      type
    }
  `,
);
