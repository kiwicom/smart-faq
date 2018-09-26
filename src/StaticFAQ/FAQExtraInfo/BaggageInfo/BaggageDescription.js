// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import {
  BaggageCabin,
  BaggageChecked,
  BaggagePersonalItem,
} from '@kiwicom/orbit-components/lib/icons';
import Trans from '@kiwicom/nitro/lib/components/Text';

import type { BaggageDescription as BaggageDescriptionProps } from './__generated__/BaggageDescription.graphql';

type Props = {|
  data: BaggageDescriptionProps,
|};

function renderIcon(category: ?string) {
  switch (category) {
    case 'CABIN_BAG':
      return <BaggageCabin size="medium" customColor="#bac7d5" />;
    case 'CHECKED':
      return <BaggageChecked size="medium" customColor="#bac7d5" />;
    case 'PERSONAL_ITEM':
      return <BaggagePersonalItem size="medium" customColor="#bac7d5" />;
  }
  return null;
}

function formatCategory(category: ?string) {
  switch (category) {
    case 'CABIN_BAG':
      return <Trans t={__('smartfaq.baggage_info.cabin_bag')} />;
    case 'CHECKED':
      return <Trans t={__('smartfaq.baggage_info.checked_baggage')} />;
    case 'PERSONAL_ITEM':
      return <Trans t={__('smartfaq.baggage_info.personal_item')} />;
  }
  return null;
}

export const BaggageDescription = ({ data: { bag } }: Props) => {
  if (!bag) {
    return;
  }
  const { height, weight, width, length, category } = bag;

  return (
    <React.Fragment>
      <hr className="separationLine" />
      <div className="baggageRow">
        {renderIcon(category)}
        <p className="baggageWeight">
          {formatCategory(category)} {weight} kg
        </p>
        <div className="baggageSize">
          <p>
            {height} x {width} x {length} cm
          </p>
        </div>
      </div>
      <style jsx>
        {`
          div.baggageRow {
            padding: 15px 24px 15px 24px;
          }
          div.baggageSize {
            display: inline-block;
            float: right;
          }
          div.baggageSize p {
            font-size: 12px;
            line-height: 1.4;
            color: #46515e;
          }
          div.baggageNumber {
            display: inline-block;
            margin-right: 8px;
          }
          div.baggageNumber p {
            font-size: 14px;
            font-weight: bold;
            line-height: 1.4;
            color: #46515e;
            display: inline-block;
          }
          p.baggageWeight {
            margin-left: 5px;
            font-size: 14px;
            font-weight: bold;
            line-height: 1.4;
            color: #46515e;
            display: inline-block;
          }
          hr.separationLine {
            height: 1px;
            background-color: #e8edf1;
            border: none;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default createFragmentContainer(
  BaggageDescription,
  graphql`
    fragment BaggageDescription on BookingBaggage {
      bag {
        height
        weight
        width
        length
        note
        category
      }
      quantity
    }
  `,
);
