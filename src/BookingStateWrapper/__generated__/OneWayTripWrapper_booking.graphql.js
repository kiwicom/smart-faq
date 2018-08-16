/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type OneWayTripWrapper_booking$ref: FragmentReference;
export type OneWayTripWrapper_booking = {|
  +trip: ?{|
    +departure: ?{|
      +time: ?any,
    |},
  |},
  +$refType: OneWayTripWrapper_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "OneWayTripWrapper_booking",
  "type": "BookingOneWay",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "trip",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
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
        }
      ]
    }
  ]
};
(node/*: any*/).hash = 'c14e8485965b22be52a1f8ce26e839b3';
module.exports = node;
