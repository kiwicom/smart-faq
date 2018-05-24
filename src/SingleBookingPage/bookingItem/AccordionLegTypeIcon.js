// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import css from 'styled-jsx/css';
import { AirplaneDown, Train, Bus } from '@kiwicom/orbit-components/lib/icons';

import type { AccordionLegTypeIcon_leg } from './__generated__/AccordionLegTypeIcon_leg.graphql';

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
const AIRCRAFT = 'AIRCRAFT';
const TRAIN = 'TRAIN';
const BUS = 'BUS';

const LegTypeIcon = (props: IconProps) => {
  const type = props.leg.type;
  let icon;
  switch (type) {
    case AIRCRAFT:
      icon = <AirplaneDown customColor="#adb9c5" height="12" />;
      break;

    case TRAIN:
      icon = <Train customColor="#adb9c5" height="12" />;
      break;

    case BUS:
      icon = <Bus customColor="#adb9c5" height="12" />;
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
