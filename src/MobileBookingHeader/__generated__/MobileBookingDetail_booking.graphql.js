/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type MultiCityTrip_booking$ref = any;
type OneWayTrip_booking$ref = any;
type ReturnTrip_booking$ref = any;
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type MobileBookingDetail_booking$ref: FragmentReference;
export type MobileBookingDetail_booking = {|
  +type: ?BookingType,
  +databaseId: ?number,
  +isPastBooking: ?boolean,
  +directAccessURL: ?string,
  +$fragmentRefs: (OneWayTrip_booking$ref & ReturnTrip_booking$ref & MultiCityTrip_booking$ref),
  +$refType: MobileBookingDetail_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MobileBookingDetail_booking",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "databaseId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isPastBooking",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "directAccessURL",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "type": "BookingMulticity",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "MultiCityTrip_booking",
          "args": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "BookingReturn",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "ReturnTrip_booking",
          "args": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "BookingOneWay",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "OneWayTrip_booking",
          "args": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = 'c84a3e51d34759dd2c67f6015dd8ad6b';
module.exports = node;
