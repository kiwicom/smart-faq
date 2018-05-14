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
      +$fragmentRefs: CarrierLogoWrapper_legs$ref,
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
(node/*: any*/).hash = '62188f8a5a632355dd3060cfd1a0d02d';
module.exports = node;
