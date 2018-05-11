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
declare export opaque type MulticityBooking_booking$ref: FragmentReference;
export type MulticityBooking_booking = {|
  +status: ?BookingStatus,
  +databaseId: ?number,
  +passengerCount: ?number,
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
  +$refType: MulticityBooking_booking$ref,
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
  "name": "MulticityBooking_booking",
  "type": "BookingMulticity",
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
      "name": "start",
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
      "name": "end",
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
})();
(node/*: any*/).hash = '9855b7fa811cfe88cba433a5b2499e27';
module.exports = node;
