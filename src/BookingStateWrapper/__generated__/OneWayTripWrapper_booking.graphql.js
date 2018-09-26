/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BookingDetail_booking$ref = any;
type MobileBookingDetail_booking$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type OneWayTripWrapper_booking$ref: FragmentReference;
export type OneWayTripWrapper_booking = {|
  +isPastBooking: ?boolean,
  +trip: ?{|
    +departure: ?{|
      +time: ?any,
    |},
  |},
  +$fragmentRefs: (MobileBookingDetail_booking$ref & BookingDetail_booking$ref),
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
      "kind": "ScalarField",
      "alias": null,
      "name": "isPastBooking",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "MobileBookingDetail_booking",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "BookingDetail_booking",
      "args": null
    },
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
(node/*: any*/).hash = 'a1f7ad8dfafe1e9e57fc7a5f615a0f8d';
module.exports = node;
