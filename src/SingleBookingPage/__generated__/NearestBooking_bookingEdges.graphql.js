/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Header_booking$ref = any;
type Multicity_booking$ref = any;
type OneWay_booking$ref = any;
type Return_booking$ref = any;
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type NearestBooking_bookingEdges$ref: FragmentReference;
export type NearestBooking_bookingEdges = $ReadOnlyArray<{|
  +node: ?{|
    +type: ?BookingType,
    +oneWay: ?{|
      +databaseId: ?number,
      +trip: ?{|
        +arrival: ?{|
          +time: ?any,
        |},
      |},
      +$fragmentRefs: (OneWay_booking$ref & Header_booking$ref),
    |},
    +return: ?{|
      +databaseId: ?number,
      +inbound: ?{|
        +arrival: ?{|
          +time: ?any,
        |},
      |},
      +$fragmentRefs: (Return_booking$ref & Header_booking$ref),
    |},
    +multicity: ?{|
      +databaseId: ?number,
      +end: ?{|
        +time: ?any,
      |},
      +$fragmentRefs: (Multicity_booking$ref & Header_booking$ref),
    |},
  |},
  +$refType: NearestBooking_bookingEdges$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  }
],
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v1
  }
],
v3 = {
  "kind": "FragmentSpread",
  "name": "Header_booking",
  "args": null
};
return {
  "kind": "Fragment",
  "name": "NearestBooking_bookingEdges",
  "type": "BookingEdge",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "node",
      "storageKey": null,
      "args": null,
      "concreteType": "Booking",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "type",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "oneWay",
          "storageKey": null,
          "args": null,
          "concreteType": "BookingOneWay",
          "plural": false,
          "selections": [
            v0,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "trip",
              "storageKey": null,
              "args": null,
              "concreteType": "Trip",
              "plural": false,
              "selections": v2
            },
            {
              "kind": "FragmentSpread",
              "name": "OneWay_booking",
              "args": null
            },
            v3
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "return",
          "storageKey": null,
          "args": null,
          "concreteType": "BookingReturn",
          "plural": false,
          "selections": [
            v0,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "inbound",
              "storageKey": null,
              "args": null,
              "concreteType": "Trip",
              "plural": false,
              "selections": v2
            },
            {
              "kind": "FragmentSpread",
              "name": "Return_booking",
              "args": null
            },
            v3
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "multicity",
          "storageKey": null,
          "args": null,
          "concreteType": "BookingMulticity",
          "plural": false,
          "selections": [
            v0,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "end",
              "storageKey": null,
              "args": null,
              "concreteType": "RouteStop",
              "plural": false,
              "selections": v1
            },
            {
              "kind": "FragmentSpread",
              "name": "Multicity_booking",
              "args": null
            },
            v3
          ]
        }
      ]
    }
  ]
};
})();
(node/*: any*/).hash = 'e96a3891dd011e32b65b97ebab86f453';
module.exports = node;
