/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type availabilityStatus = ('AT_AIRPORT' | 'AVAILABLE' | 'IN_FUTURE' | 'OTHER' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BoardingPassesDescription$ref: FragmentReference;
export type BoardingPassesDescription = {|
  +flightNumber: ?string,
  +boardingPassUrl: ?string,
  +availableAt: ?any,
  +availabilityStatus: ?availabilityStatus,
  +leg: ?{|
    +id: string,
    +departure: ?{|
      +airport: ?{|
        +city: ?{|
          +name: ?string,
        |},
      |},
    |},
    +arrival: ?{|
      +airport: ?{|
        +city: ?{|
          +name: ?string,
        |},
      |},
    |},
  |},
  +$refType: BoardingPassesDescription$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "city",
        "storageKey": null,
        "args": null,
        "concreteType": "LocationArea",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "BoardingPassesDescription",
  "type": "BoardingPass",
  "metadata": null,
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
      "kind": "ScalarField",
      "alias": null,
      "name": "boardingPassUrl",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "availableAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "availabilityStatus",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "leg",
      "storageKey": null,
      "args": null,
      "concreteType": "Leg",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "departure",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": v0
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "arrival",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": v0
        }
      ]
    }
  ]
};
})();
(node/*: any*/).hash = '0af5205d9fdcf8e2958e866c875ee930';
module.exports = node;
