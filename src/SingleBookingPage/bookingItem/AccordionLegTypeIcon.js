// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import AirplaneDown from '@kiwicom/orbit-components/lib/icons/AirplaneDown';
import Train from '@kiwicom/orbit-components/lib/icons/Train';
import Bus from '@kiwicom/orbit-components/lib/icons/Bus';

import type { Leg } from '../../types';
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
  leg: Leg,
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

export default LegTypeIcon;
