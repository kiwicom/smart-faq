/**
 * @flow
 * @relayHash 1f86187620e291c91566be5a026becd9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MulticityBooking_booking$ref = any;
type OneWayBooking_booking$ref = any;
type ReturnBooking_booking$ref = any;
export type AllBookingsOnlyEnum = ('FUTURE' | 'PAST' | '%future added value');
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
export type AllBookingsQueryVariables = {|
  only?: ?AllBookingsOnlyEnum,
|};
export type AllBookingsQueryResponse = {|
  +allBookings: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +type: ?BookingType,
        +oneWay: ?{|
          +$fragmentRefs: OneWayBooking_booking$ref,
        |},
        +return: ?{|
          +$fragmentRefs: ReturnBooking_booking$ref,
        |},
        +multicity: ?{|
          +$fragmentRefs: MulticityBooking_booking$ref,
        |},
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
        type
        oneWay {
          ...OneWayBooking_booking
          id
        }
        return {
          ...ReturnBooking_booking
          id
        }
        multicity {
          ...MulticityBooking_booking
          id
        }
      }
    }
  }
}

fragment OneWayBooking_booking on BookingOneWay {
  status
  databaseId
  passengerCount
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
}

fragment ReturnBooking_booking on BookingReturn {
  status
  databaseId
  passengerCount
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
}

fragment MulticityBooking_booking on BookingMulticity {
  status
  databaseId
  passengerCount
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "passengerCount",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v8 = {
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
        v7
      ]
    }
  ]
},
v9 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  },
  v8
],
v10 = [
  v8
],
v11 = {
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
        v7,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "code",
          "args": null,
          "storageKey": null
        }
      ]
    },
    v2
  ]
},
v12 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v9
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v10
  },
  v11
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AllBookingsQuery",
  "id": null,
  "text": "query AllBookingsQuery(\n  $only: AllBookingsOnlyEnum\n) {\n  allBookings(only: $only) {\n    edges {\n      node {\n        id\n        type\n        oneWay {\n          ...OneWayBooking_booking\n          id\n        }\n        return {\n          ...ReturnBooking_booking\n          id\n        }\n        multicity {\n          ...MulticityBooking_booking\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment OneWayBooking_booking on BookingOneWay {\n  status\n  databaseId\n  passengerCount\n  trip {\n    departure {\n      time\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    arrival {\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    legs {\n      ...CarrierLogoWrapper_legs\n      id\n    }\n  }\n}\n\nfragment ReturnBooking_booking on BookingReturn {\n  status\n  databaseId\n  passengerCount\n  outbound {\n    departure {\n      time\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    arrival {\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    legs {\n      ...CarrierLogoWrapper_legs\n      id\n    }\n  }\n}\n\nfragment MulticityBooking_booking on BookingMulticity {\n  status\n  databaseId\n  passengerCount\n  start {\n    time\n    airport {\n      locationId\n      city {\n        name\n      }\n    }\n  }\n  end {\n    airport {\n      locationId\n      city {\n        name\n      }\n    }\n  }\n  trips {\n    legs {\n      ...CarrierLogoWrapper_legs\n      id\n    }\n  }\n}\n\nfragment CarrierLogoWrapper_legs on Leg {\n  airline {\n    name\n    code\n  }\n}\n",
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
                  v3,
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
                        "kind": "FragmentSpread",
                        "name": "OneWayBooking_booking",
                        "args": null
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
                        "kind": "FragmentSpread",
                        "name": "ReturnBooking_booking",
                        "args": null
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
                        "kind": "FragmentSpread",
                        "name": "MulticityBooking_booking",
                        "args": null
                      }
                    ]
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
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "oneWay",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "BookingOneWay",
                    "plural": false,
                    "selections": [
                      v4,
                      v5,
                      v6,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "trip",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Trip",
                        "plural": false,
                        "selections": v12
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
                      v4,
                      v5,
                      v6,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "outbound",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Trip",
                        "plural": false,
                        "selections": v12
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
                      v4,
                      v5,
                      v6,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "start",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v9
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "end",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v10
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
                          v11
                        ]
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
(node/*: any*/).hash = '25de600860bddb88cd34749eeac4b74a';
module.exports = node;
