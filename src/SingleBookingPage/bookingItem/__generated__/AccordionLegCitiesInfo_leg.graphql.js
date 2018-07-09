/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type AccordionLegCitiesInfo_leg$ref: FragmentReference;
export type AccordionLegCitiesInfo_leg = {|
  +airline: ?{|
    +code: ?string,
    +name: ?string,
  |},
  +flightNumber: ?number,
  +$refType: AccordionLegCitiesInfo_leg$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AccordionLegCitiesInfo_leg",
  "type": "Leg",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "airline",
      "storageKey": null,
      "args": null,
      "concreteType": "Airline",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "code",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "flightNumber",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = 'dd3c189d66ffdd6a5195e525e8c1dbb7';
module.exports = node;
