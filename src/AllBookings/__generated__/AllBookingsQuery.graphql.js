/**
 * @flow
 * @relayHash c73b9729c56ab77299e09ffc66509178
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
        ...BookingCard_booking
        id
      }
    }
  }
}

fragment BookingCard_booking on Booking {
  type
  passengerCount
  status
  databaseId
  oneWay {
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
      legs {
        ...CarrierLogoWrapper_legs
        id
      }
    }
    id
  }
  return {
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
      legs {
        ...CarrierLogoWrapper_legs
        id
      }
    }
    id
  }
  multicity {
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
    trips {
      legs {
        ...CarrierLogoWrapper_legs
        id
      }
    }
    id
  }
}

fragment CarrierLogoWrapper_legs on Leg {
  airline {
    name
    code
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
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
        v2
      ]
    }
  ]
},
v4 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  },
  v3
],
v5 = [
  v3
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v7 = {
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
        v2,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "code",
          "args": null,
          "storageKey": null
        }
      ]
    },
    v6
  ]
},
v8 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v4
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
  v7
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AllBookingsQuery",
  "id": null,
  "text": "query AllBookingsQuery(\n  $only: AllBookingsOnlyEnum\n) {\n  allBookings(only: $only) {\n    edges {\n      node {\n        ...BookingCard_booking\n        id\n      }\n    }\n  }\n}\n\nfragment BookingCard_booking on Booking {\n  type\n  passengerCount\n  status\n  databaseId\n  oneWay {\n    trip {\n      departure {\n        time\n        airport {\n          locationId\n          city {\n            name\n          }\n        }\n      }\n      arrival {\n        airport {\n          locationId\n          city {\n            name\n          }\n        }\n      }\n      legs {\n        ...CarrierLogoWrapper_legs\n        id\n      }\n    }\n    id\n  }\n  return {\n    outbound {\n      departure {\n        time\n        airport {\n          locationId\n          city {\n            name\n          }\n        }\n      }\n      arrival {\n        airport {\n          locationId\n          city {\n            name\n          }\n        }\n      }\n      legs {\n        ...CarrierLogoWrapper_legs\n        id\n      }\n    }\n    id\n  }\n  multicity {\n    start {\n      time\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    end {\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    trips {\n      legs {\n        ...CarrierLogoWrapper_legs\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CarrierLogoWrapper_legs on Leg {\n  airline {\n    name\n    code\n  }\n}\n",
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
                        "selections": v8
                      },
                      v6
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
                        "selections": v8
                      },
                      v6
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
                        "selections": v4
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "end",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v5
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
                          v7
                        ]
                      },
                      v6
                    ]
                  },
                  v6
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
(node/*: any*/).hash = 'fb68f3f6675aa1d54f3281cbdb3b1a6f';
module.exports = node;
