// @flow

import * as React from 'react';
import idx from 'idx';
import { CarrierLogo } from '@kiwicom/orbit-components';

import type { Leg } from '../../types';

type Props = {
  legs: Array<Leg>,
};

const CarrierLogoWrapper = (props: Props) => {
  const carriers = {};
  const finalCarriers = [];
  (props.legs || []).forEach(leg => {
    const code = idx(leg, _ => _.airline.code);
    const name = idx(leg, _ => _.airline.name);
    if (code && name && !carriers[code]) {
      carriers[code] = true;
      finalCarriers.push({ code, name });
    }
  });

  return <CarrierLogo size="large" carriers={finalCarriers} />;
};

export const RawCarrierLogoWrapper = CarrierLogoWrapper;

export default CarrierLogoWrapper;
