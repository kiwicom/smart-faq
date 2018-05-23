/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Multicity_bookingHeader$ref: FragmentReference;
export type Multicity_bookingHeader = {|
  +trips: ?$ReadOnlyArray<?{|
    +departure: ?{|
      +airport: ?{|
        +city: ?{|
          +name: ?string,
        |},
      |},
    |},
  |}>,
  +end: ?{|
    +airport: ?{|
      +city: ?{|
        +name: ?string,
      |},
    |},
  |},
  +$refType: Multicity_bookingHeader$ref,
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
  "name": "Multicity_bookingHeader",
  "type": "BookingMulticity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "trips",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "departure",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": v0
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "end",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": v0
    }
  ]
};
})();
(node/*: any*/).hash = 'a719713533d53e77465abddcaa17de8c';
module.exports = node;
