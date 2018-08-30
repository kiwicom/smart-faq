// @flow

import * as React from 'react';

import AccordionBodyLeg from './AccordionBodyLeg';
import AccordionBodyLastLeg from './AccordionBodyLastLeg';
import type { Leg } from '../../types';

type Props = {|
  legs: Array<Leg>,
|};

class AccordionBody extends React.Component<Props> {
  renderLegs = () => {
    const { legs } = this.props;
    return legs.map((l, li) => {
      if (li === legs.length - 1) {
        return <AccordionBodyLastLeg key={l.flightNumber} leg={l} />;
      }
      return (
        <AccordionBodyLeg key={l.flightNumber} leg={l} nextLeg={legs[li + 1]} />
      );
    });
  };
  render() {
    return (
      <React.Fragment>
        <hr />
        <div className="allLegs">{this.renderLegs()}</div>
        <style jsx>
          {`
            div.allLegs {
              padding: 16px 53px;
              padding-bottom: 40px;
            }
            hr {
              margin-top: 16px;
              margin-bottom: 0;
              border: none;
              border-bottom: 1px solid #e8edf1;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default AccordionBody;
