/**
 * @flow
 * @relayHash 03d73320a714bc139f72d081c496b617
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpcomingBookingQueryVariables = {| |};
export type UpcomingBookingQueryResponse = {|
  +booking: ?{|
    +legs: ?$ReadOnlyArray<?{|
      +airline: ?{|
        +name: ?string,
        +code: ?string,
        +logoUrl: ?string,
      |},
    |}>,
    +arrival: ?{|
      +time: ?any,
      +localTime: ?any,
      +airport: ?{|
        +locationId: ?string,
        +city: ?{|
          +name: ?string,
        |},
      |},
    |},
  |},
|};
*/


/*
query UpcomingBookingQuery {
  booking(id: 6375499) {
    legs {
      airline {
        name
        code
        logoUrl
      }
      id
    }
    arrival {
      time
      localTime
      airport {
        locationId
        city {
          name
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": 6375499,
    "type": "ID!"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "airline",
  "storageKey": null,
  "args": null,
  "concreteType": "Airline",
  "plural": false,
  "selections": [
    v1,
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
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "arrival",
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
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "city",
          "storageKey": null,
          "args": null,
          "concreteType": "LocationArea",
          "plural": false,
          "selections": [
            v1
          ]
        }
      ]
    }
  ]
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "UpcomingBookingQuery",
  "id": null,
  "text": "query UpcomingBookingQuery {\n  booking(id: 6375499) {\n    legs {\n      airline {\n        name\n        code\n        logoUrl\n      }\n      id\n    }\n    arrival {\n      time\n      localTime\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpcomingBookingQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
        "storageKey": "booking(id:6375499)",
        "args": v0,
        "concreteType": "Booking",
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
              v2
            ]
          },
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpcomingBookingQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
        "storageKey": "booking(id:6375499)",
        "args": v0,
        "concreteType": "Booking",
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
              v2,
              v4
            ]
          },
          v3,
          v4
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '4763312def7da60e826d836324ae20ef';
module.exports = node;
