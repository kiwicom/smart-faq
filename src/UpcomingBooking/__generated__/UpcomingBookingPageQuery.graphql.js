/**
 * @flow
 * @relayHash eeecb645621bdcfc2d9bf2fbae0cffad
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpcomingBookingPageQueryVariables = {| |};
export type UpcomingBookingPageQueryResponse = {|
  +booking: ?{|
    +legs: ?$ReadOnlyArray<?{|
      +airline: ?{|
        +name: ?string,
        +code: ?string,
        +logoUrl: ?string,
      |},
    |}>,
    +departure: ?{|
      +time: ?any,
      +localTime: ?any,
      +airport: ?{|
        +locationId: ?string,
        +city: ?{|
          +name: ?string,
        |},
      |},
    |},
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
query UpcomingBookingPageQuery {
  booking(id: 6375499) {
    legs {
      airline {
        name
        code
        logoUrl
      }
      id
    }
    departure {
      time
      localTime
      airport {
        locationId
        city {
          name
        }
      }
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
v3 = [
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
],
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v3
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "arrival",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v3
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "UpcomingBookingPageQuery",
  "id": null,
  "text": "query UpcomingBookingPageQuery {\n  booking(id: 6375499) {\n    legs {\n      airline {\n        name\n        code\n        logoUrl\n      }\n      id\n    }\n    departure {\n      time\n      localTime\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    arrival {\n      time\n      localTime\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpcomingBookingPageQuery",
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
          v4,
          v5
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpcomingBookingPageQuery",
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
              v6
            ]
          },
          v4,
          v5,
          v6
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '442d4dc4896ab26f7b0086c5ae151077';
module.exports = node;
