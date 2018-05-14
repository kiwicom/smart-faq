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
declare export opaque type OneWayBooking_booking$ref: FragmentReference;
export type OneWayBooking_booking = {|
  +trip: ?{|
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
  +$refType: OneWayBooking_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "OneWayBooking_booking",
  "type": "BookingOneWay",
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
(node/*: any*/).hash = 'db7306a26ab24b9bf8a3a76ab0ff6422';
module.exports = node;
