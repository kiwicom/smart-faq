/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type UpcomingBookingSingle_booking$ref: FragmentReference;
export type UpcomingBookingSingle_booking = {|
  +id: string,
  +legs: ?$ReadOnlyArray<?{|
    +airline: ?{|
      +name: ?string,
      +code: ?string,
      +logoUrl: ?string,
    |},
    +departure: ?{|
      +time: ?any,
      +localTime: ?any,
      +airport: ?{|
        +locationId: ?string,
        +city: ?{|
          +name: ?string,
        |},
      |},
    |},
    +arrival: ?{|
      +time: ?any,
      +localTime: ?any,
      +airport: ?{|
        +locationId: ?string,
        +city: ?{|
          +name: ?string,
        |},
      |},
    |},
  |}>,
  +$refType: UpcomingBookingSingle_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "localTime",
    "args": null,
    "storageKey": null
  },
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
        "kind": "ScalarField",
        "alias": null,
        "name": "locationId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "city",
        "storageKey": null,
        "args": null,
        "concreteType": "LocationArea",
        "plural": false,
        "selections": [
          v0
        ]
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "UpcomingBookingSingle_booking",
  "type": "Booking",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "legs",
      "storageKey": null,
      "args": null,
      "concreteType": "Leg",
      "plural": true,
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
            v0,
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
              "name": "logoUrl",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "departure",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": v1
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "arrival",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": v1
        }
      ]
    }
  ]
};
})();
(node/*: any*/).hash = 'a4565ea33b6b82cfab1efd7202513613';
module.exports = node;
