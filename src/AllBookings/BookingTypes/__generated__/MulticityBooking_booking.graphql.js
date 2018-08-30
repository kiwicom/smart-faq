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
declare export opaque type MulticityBooking_booking$ref: FragmentReference;
export type MulticityBooking_booking = {|
  +start: ?{|
    +$fragmentRefs: BookingCard_departure$ref,
  |},
  +end: ?{|
    +$fragmentRefs: BookingCard_arrival$ref,
  |},
  +trips: ?$ReadOnlyArray<?{|
    +legs: ?$ReadOnlyArray<?{|
      +airline: ?{|
        +name: ?string,
        +code: ?string,
      |},
    |}>,
  |}>,
  +$fragmentRefs: BookingCard_booking$ref,
  +$refType: MulticityBooking_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MulticityBooking_booking",
  "type": "BookingMulticity",
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
      "name": "start",
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
      "name": "end",
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
      "name": "trips",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": true,
      "selections": [
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
(node/*: any*/).hash = 'f2f36b3005cf8ecf202108ce835445f1';
module.exports = node;
