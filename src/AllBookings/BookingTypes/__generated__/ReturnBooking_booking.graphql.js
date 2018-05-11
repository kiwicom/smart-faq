/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CarrierLogoWrapper_legs$ref = any;
export type BookingStatus = ('CANCELLED' | 'CLOSED' | 'CONFIRMED' | 'DELETED' | 'EXPIRED' | 'NEW' | 'PENDING' | 'REFUNDED' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type ReturnBooking_booking$ref: FragmentReference;
export type ReturnBooking_booking = {|
  +status: ?BookingStatus,
  +databaseId: ?number,
  +passengerCount: ?number,
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
  +$refType: ReturnBooking_booking$ref,
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
};
return {
  "kind": "Fragment",
  "name": "ReturnBooking_booking",
  "type": "BookingReturn",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "kind": "ScalarField",
      "alias": null,
      "name": "passengerCount",
      "args": null,
      "storageKey": null
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
              "kind": "ScalarField",
              "alias": null,
              "name": "time",
              "args": null,
              "storageKey": null
            },
            v0
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
            v0
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
})();
(node/*: any*/).hash = 'f6ec0e3d7a4ec4b285e91771eada5851';
module.exports = node;
