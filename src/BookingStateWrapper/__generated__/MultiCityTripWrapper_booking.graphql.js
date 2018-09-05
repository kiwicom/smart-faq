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
declare export opaque type MultiCityTripWrapper_booking$ref: FragmentReference;
export type MultiCityTripWrapper_booking = {|
  +isPastBooking: ?boolean,
  +trips: ?$ReadOnlyArray<?{|
    +departure: ?{|
      +time: ?any,
    |},
  |}>,
  +$fragmentRefs: (MobileBookingDetail_booking$ref & BookingDetail_booking$ref),
  +$refType: MultiCityTripWrapper_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MultiCityTripWrapper_booking",
  "type": "BookingMulticity",
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
(node/*: any*/).hash = '44eea387f57a06c203a474677e9330d3';
module.exports = node;
