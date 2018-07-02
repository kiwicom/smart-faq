// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import idx from 'idx';
import { CarrierLogo } from '@kiwicom/orbit-components';
import { InformationCircle } from '@kiwicom/orbit-components/lib/icons';
import { createFragmentContainer, graphql } from 'react-relay';

import type { AccordionLegCitiesInfo_leg } from './__generated__/AccordionLegCitiesInfo_leg.graphql';

const citiesInfoStyle = css`
  div.legCitiesInfo {
    color: #7c8b99;
    margin-top: 19px;
    font-size: 12px;
  }
  div.infoRow {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }
  p {
    margin-left: 10px;
  }
`;

type Props = {|
  leg: AccordionLegCitiesInfo_leg,
|};

const LegCitiesInfo = (props: Props) => {
  const { leg } = props;
  const carrier = {
    code: idx(leg.airline, _ => _.code) || '',
    name: idx(leg.airline, _ => _.name) || '',
  };
  const flightNumber = leg.flightNumber || '';

  return (
    leg.type === 'AIRCRAFT' && (
      <div className="legCitiesInfo">
        <div className="infoRow">
          <CarrierLogo className="logo" size="small" carriers={[carrier]} />
          <p>Airline: {carrier.name}</p>
        </div>
        <div className="infoRow">
          <InformationCircle size="small" color="secondary" />
          <p>Flight no: {`${carrier.code} ${flightNumber}`}</p>
        </div>
        <style jsx>{citiesInfoStyle}</style>
      </div>
    )
  );
};

export default createFragmentContainer(
  LegCitiesInfo,
  graphql`
    fragment AccordionLegCitiesInfo_leg on Leg {
      airline {
        code
        name
      }
      flightNumber
      type
    }
  `,
);
