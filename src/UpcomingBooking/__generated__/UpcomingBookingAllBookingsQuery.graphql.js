/**
 * @flow
 * @relayHash a5d11f5f8822195d24ef5a0f5a98ae01
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UpcomingBookingSingle_booking$ref = any;
export type UpcomingBookingAllBookingsQueryVariables = {| |};
export type UpcomingBookingAllBookingsQueryResponse = {|
  +allBookings: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +departure: ?{|
          +time: ?any,
          +localTime: ?any,
        |},
        +$fragmentRefs: UpcomingBookingSingle_booking$ref,
      |},
    |}>,
  |},
|};
*/


/*
query UpcomingBookingAllBookingsQuery {
  allBookings {
    edges {
      node {
        departure {
          time
          localTime
        }
        ...UpcomingBookingSingle_booking
        id
      }
    }
  }
}

fragment UpcomingBookingSingle_booking on Booking {
  id
  legs {
    airline {
      name
      code
      logoUrl
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localTime",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": [
    v0,
    v1
  ]
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = [
  v0,
  v1,
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
          v4
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "UpcomingBookingAllBookingsQuery",
  "id": null,
  "text": "query UpcomingBookingAllBookingsQuery {\n  allBookings {\n    edges {\n      node {\n        departure {\n          time\n          localTime\n        }\n        ...UpcomingBookingSingle_booking\n        id\n      }\n    }\n  }\n}\n\nfragment UpcomingBookingSingle_booking on Booking {\n  id\n  legs {\n    airline {\n      name\n      code\n      logoUrl\n    }\n    departure {\n      time\n      localTime\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    arrival {\n      time\n      localTime\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpcomingBookingAllBookingsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allBookings",
        "storageKey": null,
        "args": null,
        "concreteType": "BookingConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingEdge",
            "plural": true,
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
                  v2,
                  {
                    "kind": "FragmentSpread",
                    "name": "UpcomingBookingSingle_booking",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpcomingBookingAllBookingsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allBookings",
        "storageKey": null,
        "args": null,
        "concreteType": "BookingConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingEdge",
            "plural": true,
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
                  v2,
                  v3,
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
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "airline",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Airline",
                        "plural": false,
                        "selections": [
                          v4,
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
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "departure",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v5
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "arrival",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v5
                      },
                      v3
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'fa9be2fce5001652128b2f6faf9d4f5d';
module.exports = node;
