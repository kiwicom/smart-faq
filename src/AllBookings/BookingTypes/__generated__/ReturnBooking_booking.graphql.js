/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BookingCard_arrival$ref = any;
type BookingCard_booking$ref = any;
type BookingCard_departure$ref = any;
type CarrierLogoWrapper_legs$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type ReturnBooking_booking$ref: FragmentReference;
export type ReturnBooking_booking = {|
  +outbound: ?{|
    +departure: ?{|
      +$fragmentRefs: BookingCard_departure$ref,
    |},
    +arrival: ?{|
      +$fragmentRefs: BookingCard_arrival$ref,
    |},
    +legs: ?$ReadOnlyArray<?{|
      +$fragmentRefs: CarrierLogoWrapper_legs$ref,
    |}>,
  |},
  +$fragmentRefs: BookingCard_booking$ref,
  +$refType: ReturnBooking_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ReturnBooking_booking",
  "type": "BookingReturn",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "BookingCard_booking",
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
              "kind": "FragmentSpread",
              "name": "BookingCard_departure",
              "args": null
            }
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
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "BookingCard_arrival",
              "args": null
            }
          ]
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
              "kind": "FragmentSpread",
              "name": "CarrierLogoWrapper_legs",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '6c7dbfbd83ac0bb2e47dd29fc26129aa';
module.exports = node;
