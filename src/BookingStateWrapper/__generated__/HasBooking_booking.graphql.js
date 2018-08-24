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
  +trip?: ?{|
    +departure: ?{|
      +time: ?any,
    |},
  |},
  +outbound?: ?{|
    +departure: ?{|
      +time: ?any,
    |},
  |},
  +start?: ?{|
    +time: ?any,
  |},
  +$fragmentRefs: (OneWayTripWrapper_booking$ref & ReturnTripWrapper_booking$ref & MultiCityTripWrapper_booking$ref),
  +$refType: HasBooking_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v0
  }
];
return {
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
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "start",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": v0
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
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "outbound",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": v1
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
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "trip",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": v1
        }
      ]
    }
  ]
};
})();
(node/*: any*/).hash = '040da8bbe7ebc84ed4a9e333f739402e';
module.exports = node;
