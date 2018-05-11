/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AccordionBodyLastLeg_leg$ref = any;
type AccordionBodyLeg_leg$ref = any;
type AccordionBodyLeg_nextLeg$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type AccordionBody_legs$ref: FragmentReference;
export type AccordionBody_legs = $ReadOnlyArray<{|
  +flightNumber: ?number,
  +$fragmentRefs: (AccordionBodyLeg_leg$ref & AccordionBodyLeg_nextLeg$ref & AccordionBodyLastLeg_leg$ref),
  +$refType: AccordionBody_legs$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AccordionBody_legs",
  "type": "Leg",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "flightNumber",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AccordionBodyLeg_leg",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AccordionBodyLeg_nextLeg",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AccordionBodyLastLeg_leg",
      "args": null
    }
  ]
};
(node/*: any*/).hash = 'd13ed5fe917f396286827a7099cc71da';
module.exports = node;
