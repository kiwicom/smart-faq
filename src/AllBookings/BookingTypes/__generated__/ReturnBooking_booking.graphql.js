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
      +airline: ?{|
        +name: ?string,
        +code: ?string,
      |},
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
                  "name": "name",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "code",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '207c604cb36f3f7f3871d7439a35ec53';
module.exports = node;
