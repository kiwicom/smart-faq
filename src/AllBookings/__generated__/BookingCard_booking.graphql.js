/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CarrierLogoWrapper_legs$ref = any;
export type BookingStatus = ('CANCELLED' | 'CLOSED' | 'CONFIRMED' | 'DELETED' | 'EXPIRED' | 'NEW' | 'PENDING' | 'REFUNDED' | '%future added value');
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BookingCard_booking$ref: FragmentReference;
export type BookingCard_booking = {|
  +type: ?BookingType,
  +passengerCount: ?number,
  +status: ?BookingStatus,
  +databaseId: ?number,
  +oneWay: ?{|
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
      +legs: ?$ReadOnlyArray<?{|
        +$fragmentRefs: CarrierLogoWrapper_legs$ref,
      |}>,
    |},
  |},
  +return: ?{|
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
      +legs: ?$ReadOnlyArray<?{|
        +$fragmentRefs: CarrierLogoWrapper_legs$ref,
      |}>,
    |},
  |},
  +multicity: ?{|
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
    +trips: ?$ReadOnlyArray<?{|
      +legs: ?$ReadOnlyArray<?{|
        +$fragmentRefs: CarrierLogoWrapper_legs$ref,
      |}>,
    |}>,
  |},
  +$refType: BookingCard_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
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
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  },
  v0
],
v2 = [
  v0
],
v3 = {
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
},
v4 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v1
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v2
  },
  v3
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
      "kind": "ScalarField",
      "alias": null,
      "name": "status",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "oneWay",
      "storageKey": null,
      "args": null,
      "concreteType": "BookingOneWay",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "trip",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": v4
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
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "outbound",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": v4
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
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "start",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": v1
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "end",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": v2
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
            v3
          ]
        }
      ]
    }
  ]
};
})();
(node/*: any*/).hash = '6bec4f61dfd334948b03ef1ffd80eaac';
module.exports = node;
