/**
 * @flow
 * @relayHash 85331ce0b010b47b62a0c75634cb105f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpcomingBookingAllBookingsQueryVariables = {| |};
export type UpcomingBookingAllBookingsQueryResponse = {|
  +allBookings: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +departure: ?{|
          +time: ?any,
          +localTime: ?any,
        |},
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
        id
        departure {
          time
          localTime
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "localTime",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
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
  "text": "query UpcomingBookingAllBookingsQuery {\n  allBookings {\n    edges {\n      node {\n        id\n        departure {\n          time\n          localTime\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpcomingBookingAllBookingsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "UpcomingBookingAllBookingsQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = '5f89734f531eb37e9043fcc4077a3eb5';
module.exports = node;
