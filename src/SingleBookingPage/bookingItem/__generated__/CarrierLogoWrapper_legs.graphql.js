/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type CarrierLogoWrapper_legs$ref: FragmentReference;
export type CarrierLogoWrapper_legs = $ReadOnlyArray<{|
  +airline: ?{|
    +name: ?string,
    +code: ?string,
  |},
  +$refType: CarrierLogoWrapper_legs$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CarrierLogoWrapper_legs",
  "type": "Leg",
  "metadata": {
    "plural": true
  },
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
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "code",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '7b1719c9f50eeb8767f939319ded8bb9';
module.exports = node;
