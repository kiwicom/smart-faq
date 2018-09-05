/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type MultiCityTripWrapper_booking$ref = any;
type OneWayTripWrapper_booking$ref = any;
type ReturnTripWrapper_booking$ref = any;
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type HasBooking_booking$ref: FragmentReference;
export type HasBooking_booking = {|
  +type: ?BookingType,
  +isPastBooking: ?boolean,
  +$fragmentRefs: (OneWayTripWrapper_booking$ref & ReturnTripWrapper_booking$ref & MultiCityTripWrapper_booking$ref),
  +$refType: HasBooking_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HasBooking_booking",
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
      "name": "isPastBooking",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "type": "BookingMulticity",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "MultiCityTripWrapper_booking",
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
          "name": "ReturnTripWrapper_booking",
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
          "name": "OneWayTripWrapper_booking",
          "args": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '22430182e3c34ca0be0b4d62dc7f1907';
module.exports = node;
