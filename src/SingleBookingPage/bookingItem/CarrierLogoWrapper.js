// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from 'react-relay';
import { CarrierLogo } from '@kiwicom/orbit-components';

import type { CarrierLogoWrapper_legs } from './__generated__/CarrierLogoWrapper_legs.graphql';

type Props = {
  legs: CarrierLogoWrapper_legs,
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

export default createFragmentContainer(
  CarrierLogoWrapper,
  graphql`
    fragment CarrierLogoWrapper_legs on Leg @relay(plural: true) {
      airline {
        name
        code
      }
    }
  `,
);
