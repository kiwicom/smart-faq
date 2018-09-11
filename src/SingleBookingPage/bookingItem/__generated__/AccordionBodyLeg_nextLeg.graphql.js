/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type CoveredBy = ('CARRIER' | 'KIWICOM' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type AccordionBodyLeg_nextLeg$ref: FragmentReference;
export type AccordionBodyLeg_nextLeg = {|
  +departure: ?{|
    +time: ?any,
  |},
  +guarantee: ?CoveredBy,
  +$refType: AccordionBodyLeg_nextLeg$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AccordionBodyLeg_nextLeg",
  "type": "Leg",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "time",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "guarantee",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = 'ff049d69200bda7297778ec906f3800d';
module.exports = node;
