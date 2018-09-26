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
declare export opaque type ReturnTripWrapper_booking$ref: FragmentReference;
export type ReturnTripWrapper_booking = {|
  +isPastBooking: ?boolean,
  +outbound: ?{|
    +departure: ?{|
      +time: ?any,
    |},
  |},
  +$fragmentRefs: (MobileBookingDetail_booking$ref & BookingDetail_booking$ref),
  +$refType: ReturnTripWrapper_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ReturnTripWrapper_booking",
  "type": "BookingReturn",
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
      "name": "outbound",
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
(node/*: any*/).hash = '351ccd27f218a442c68128461cbf87ea';
module.exports = node;
