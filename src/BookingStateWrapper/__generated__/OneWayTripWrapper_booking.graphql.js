/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type OneWayTripWrapper_booking$ref: FragmentReference;
export type OneWayTripWrapper_booking = {|
  +directAccessURL: ?string,
  +isPastBooking: ?boolean,
  +databaseId: ?number,
  +type: ?BookingType,
  +trip: ?{|
    +legs: ?$ReadOnlyArray<?{|
      +duration: ?number,
      +flightNumber: ?number,
      +pnr: ?string,
      +operatingAirline: ?{|
        +name: ?string,
        +iata: ?string,
      |},
      +vehicle: ?{|
        +model: ?string,
        +manufacturer: ?string,
      |},
      +airline: ?{|
        +name: ?string,
        +code: ?string,
        +logoUrl: ?string,
      |},
      +arrival: ?{|
        +time: ?any,
        +localTime: ?any,
        +airport: ?{|
          +locationId: ?string,
          +name: ?string,
          +city: ?{|
            +name: ?string,
          |},
        |},
      |},
      +departure: ?{|
        +time: ?any,
        +localTime: ?any,
        +airport: ?{|
          +locationId: ?string,
          +name: ?string,
          +city: ?{|
            +name: ?string,
          |},
        |},
      |},
    |}>,
    +arrival: ?{|
      +time: ?any,
      +localTime: ?any,
      +airport: ?{|
        +locationId: ?string,
        +name: ?string,
        +city: ?{|
          +name: ?string,
        |},
      |},
    |},
    +departure: ?{|
      +time: ?any,
      +localTime: ?any,
      +airport: ?{|
        +locationId: ?string,
        +name: ?string,
        +city: ?{|
          +name: ?string,
        |},
      |},
    |},
  |},
  +$refType: OneWayTripWrapper_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
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
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "localTime",
    "args": null,
    "storageKey": null
  },
  {
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
      v0,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "city",
        "storageKey": null,
        "args": null,
        "concreteType": "LocationArea",
        "plural": false,
        "selections": [
          v0
        ]
      }
    ]
  }
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "arrival",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v1
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v1
};
return {
  "kind": "Fragment",
  "name": "OneWayTripWrapper_booking",
  "type": "BookingOneWay",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "directAccessURL",
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
      "name": "databaseId",
      "args": null,
      "storageKey": null
    },
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
      "name": "trip",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
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
              "kind": "ScalarField",
              "alias": null,
              "name": "duration",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "flightNumber",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "pnr",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "operatingAirline",
              "storageKey": null,
              "args": null,
              "concreteType": "OperatingAirline",
              "plural": false,
              "selections": [
                v0,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "iata",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "vehicle",
              "storageKey": null,
              "args": null,
              "concreteType": "Vehicle",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "model",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "manufacturer",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "airline",
              "storageKey": null,
              "args": null,
              "concreteType": "Airline",
              "plural": false,
              "selections": [
                v0,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "code",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "logoUrl",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            v2,
            v3
          ]
        },
        v2,
        v3
      ]
    }
  ]
};
})();
(node/*: any*/).hash = 'ed51b9b1d62fa58c5be4cb4ade3d3016';
module.exports = node;
