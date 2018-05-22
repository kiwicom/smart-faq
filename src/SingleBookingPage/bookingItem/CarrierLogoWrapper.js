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
  const addedCarriers = {};
  const carriers = (props.legs || [])
    .filter(leg => {
      const code = idx(leg, _ => _.airline.code);
      if (code && !addedCarriers[code]) {
        addedCarriers[code] = true;
        return true;
      }
      return false;
    })
    .map(leg => {
      const name = idx(leg, _ => _.airline.name);
      const code = idx(leg, _ => _.airline.code);
      if (code && name) {
        return { code, name };
      }

      return null;
    })
    .filter(Boolean);

  return <CarrierLogo size="large" carriers={carriers} />;
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
