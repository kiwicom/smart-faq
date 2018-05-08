/**
 * @flow
 * @relayHash 5d13dc47aa7a6422fc8cac4d0ee9fca6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BookingCard_booking$ref = any;
export type AllBookingsOnlyEnum = ('FUTURE' | 'PAST' | '%future added value');
export type AllBookingsQueryVariables = {|
  only?: ?AllBookingsOnlyEnum,
|};
export type AllBookingsQueryResponse = {|
  +allBookings: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: BookingCard_booking$ref,
      |},
    |}>,
  |},
|};
*/


/*
query AllBookingsQuery(
  $only: AllBookingsOnlyEnum
) {
  allBookings(only: $only) {
    edges {
      node {
        id
        ...BookingCard_booking
      }
    }
  }
}

fragment BookingCard_booking on Booking {
  type
  passengerCount
  oneWay {
    status
    databaseId
    trip {
      departure {
        time
        airport {
          locationId
          city {
            name
          }
        }
      }
      arrival {
        airport {
          locationId
          city {
            name
          }
        }
      }
    }
    id
  }
  return {
    status
    databaseId
    outbound {
      departure {
        time
        airport {
          locationId
          city {
            name
          }
        }
      }
      arrival {
        airport {
          locationId
          city {
            name
          }
        }
      }
    }
    id
  }
  multicity {
    status
    databaseId
    start {
      time
      airport {
        locationId
        city {
          name
        }
      }
    }
    end {
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
    "kind": "LocalArgument",
    "name": "only",
    "type": "AllBookingsOnlyEnum",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "only",
    "variableName": "only",
    "type": "AllBookingsOnlyEnum"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v5 = {
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
v6 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  },
  v5
],
v7 = [
  v5
],
v8 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v6
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v7
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AllBookingsQuery",
  "id": null,
  "text": "query AllBookingsQuery(\n  $only: AllBookingsOnlyEnum\n) {\n  allBookings(only: $only) {\n    edges {\n      node {\n        id\n        ...BookingCard_booking\n      }\n    }\n  }\n}\n\nfragment BookingCard_booking on Booking {\n  type\n  passengerCount\n  oneWay {\n    status\n    databaseId\n    trip {\n      departure {\n        time\n        airport {\n          locationId\n          city {\n            name\n          }\n        }\n      }\n      arrival {\n        airport {\n          locationId\n          city {\n            name\n          }\n        }\n      }\n    }\n    id\n  }\n  return {\n    status\n    databaseId\n    outbound {\n      departure {\n        time\n        airport {\n          locationId\n          city {\n            name\n          }\n        }\n      }\n      arrival {\n        airport {\n          locationId\n          city {\n            name\n          }\n        }\n      }\n    }\n    id\n  }\n  multicity {\n    status\n    databaseId\n    start {\n      time\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    end {\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AllBookingsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allBookings",
        "storageKey": null,
        "args": v1,
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
                    "name": "BookingCard_booking",
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
    "name": "AllBookingsQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allBookings",
        "storageKey": null,
        "args": v1,
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
                      v3,
                      v4,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "trip",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Trip",
                        "plural": false,
                        "selections": v8
                      },
                      v2
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
                      v3,
                      v4,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "outbound",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Trip",
                        "plural": false,
                        "selections": v8
                      },
                      v2
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
                      v3,
                      v4,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "start",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v6
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "end",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v7
                      },
                      v2
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
(node/*: any*/).hash = '558f2d51ee6a211d3bcb0f37f5d73532';
module.exports = node;
