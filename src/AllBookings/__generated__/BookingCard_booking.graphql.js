/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type BookingStatus = ('CANCELLED' | 'CLOSED' | 'CONFIRMED' | 'DELETED' | 'EXPIRED' | 'NEW' | 'PENDING' | 'REFUNDED' | '%future added value');
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BookingCard_booking$ref: FragmentReference;
export type BookingCard_booking = {|
  +type: ?BookingType,
  +passengerCount: ?number,
  +oneWay: ?{|
    +status: ?BookingStatus,
    +databaseId: ?number,
    +trip: ?{|
      +departure: ?{|
        +time: ?any,
        +airport: ?{|
          +locationId: ?string,
          +city: ?{|
            +name: ?string,
          |},
        |},
      |},
      +arrival: ?{|
        +airport: ?{|
          +locationId: ?string,
          +city: ?{|
            +name: ?string,
          |},
        |},
      |},
    |},
  |},
  +return: ?{|
    +status: ?BookingStatus,
    +databaseId: ?number,
    +outbound: ?{|
      +departure: ?{|
        +time: ?any,
        +airport: ?{|
          +locationId: ?string,
          +city: ?{|
            +name: ?string,
          |},
        |},
      |},
      +arrival: ?{|
        +airport: ?{|
          +locationId: ?string,
          +city: ?{|
            +name: ?string,
          |},
        |},
      |},
    |},
  |},
  +multicity: ?{|
    +status: ?BookingStatus,
    +databaseId: ?number,
    +start: ?{|
      +time: ?any,
      +airport: ?{|
        +locationId: ?string,
        +city: ?{|
          +name: ?string,
        |},
      |},
    |},
    +end: ?{|
      +airport: ?{|
        +locationId: ?string,
        +city: ?{|
          +name: ?string,
        |},
      |},
    |},
  |},
  +$refType: BookingCard_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "airport",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "locationId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "city",
      "storageKey": null,
      "args": null,
      "concreteType": "LocationArea",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
},
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  },
  v2
],
v4 = [
  v2
],
v5 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v3
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v4
  }
];
return {
  "kind": "Fragment",
  "name": "BookingCard_booking",
  "type": "Booking",
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
      "name": "passengerCount",
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
        v1,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "trip",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": v5
        }
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
        v1,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "outbound",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": v5
        }
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
        v1,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "start",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": v3
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "end",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": v4
        }
      ]
    }
  ]
};
})();
(node/*: any*/).hash = '3578e1a018916d54ef44547c764c0dc9';
module.exports = node;
