/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type AccordionLegCities_leg$ref: FragmentReference;
export type AccordionLegCities_leg = {|
  +duration: ?number,
  +airline: ?{|
    +code: ?string,
    +name: ?string,
  |},
  +arrival: ?{|
    +localTime: ?any,
    +airport: ?{|
      +locationId: ?string,
      +name: ?string,
      +city: ?{|
        +name: ?string,
      |},
    |},
  |},
  +departure: ?{|
    +localTime: ?any,
    +airport: ?{|
      +locationId: ?string,
      +name: ?string,
      +city: ?{|
        +name: ?string,
      |},
    |},
  |},
  +$refType: AccordionLegCities_leg$ref,
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
      v0,
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
  "name": "AccordionLegCities_leg",
  "type": "Leg",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "duration",
      "args": null,
      "storageKey": null
    },
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
        v0
      ]
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
    }
  ]
};
})();
(node/*: any*/).hash = '4682a89eb9e174cf020c40a7793110c7';
module.exports = node;
