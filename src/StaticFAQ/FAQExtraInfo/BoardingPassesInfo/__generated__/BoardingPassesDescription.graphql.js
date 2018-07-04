/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BoardingPassesDescription$ref: FragmentReference;
export type BoardingPassesDescription = {|
  +flightNumber: ?string,
  +boardingPassUrl: ?string,
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
(node/*: any*/).hash = '79ae2b9a33e71179c462b525db2e5548';
module.exports = node;
