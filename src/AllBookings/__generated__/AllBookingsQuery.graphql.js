/**
 * @flow
 * @relayHash aaf0af1bdd7064d1d8f0c604a0e4f48a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BookingCardsList_booking$ref = any;
export type AllBookingsQueryVariables = {| |};
export type AllBookingsQueryResponse = {|
  +future: ?{|
    +$fragmentRefs: BookingCardsList_booking$ref,
  |},
  +past: ?{|
    +$fragmentRefs: BookingCardsList_booking$ref,
  |},
|};
*/


/*
query AllBookingsQuery {
  future: allBookings(only: FUTURE) {
    ...BookingCardsList_booking
  }
  past: allBookings(only: PAST) {
    ...BookingCardsList_booking
  }
}

fragment BookingCardsList_booking on BookingConnection {
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
    "kind": "Literal",
    "name": "only",
    "value": "FUTURE",
    "type": "AllBookingsOnlyEnum"
  }
],
v1 = [
  {
    "kind": "FragmentSpread",
    "name": "BookingCardsList_booking",
    "args": null
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "only",
    "value": "PAST",
    "type": "AllBookingsOnlyEnum"
  }
],
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
    v3
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
],
v13 = [
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
          v3,
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
              v3
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
              v3
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
              v3
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
  "name": "AllBookingsQuery",
  "id": null,
  "text": "query AllBookingsQuery {\n  future: allBookings(only: FUTURE) {\n    ...BookingCardsList_booking\n  }\n  past: allBookings(only: PAST) {\n    ...BookingCardsList_booking\n  }\n}\n\nfragment BookingCardsList_booking on BookingConnection {\n  edges {\n    node {\n      id\n      type\n      oneWay {\n        ...OneWayBooking_booking\n        id\n      }\n      return {\n        ...ReturnBooking_booking\n        id\n      }\n      multicity {\n        ...MulticityBooking_booking\n        id\n      }\n    }\n  }\n}\n\nfragment OneWayBooking_booking on BookingOneWay {\n  status\n  databaseId\n  passengerCount\n  trip {\n    departure {\n      time\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    arrival {\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    legs {\n      ...CarrierLogoWrapper_legs\n      id\n    }\n  }\n}\n\nfragment ReturnBooking_booking on BookingReturn {\n  status\n  databaseId\n  passengerCount\n  outbound {\n    departure {\n      time\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    arrival {\n      airport {\n        locationId\n        city {\n          name\n        }\n      }\n    }\n    legs {\n      ...CarrierLogoWrapper_legs\n      id\n    }\n  }\n}\n\nfragment MulticityBooking_booking on BookingMulticity {\n  status\n  databaseId\n  passengerCount\n  start {\n    time\n    airport {\n      locationId\n      city {\n        name\n      }\n    }\n  }\n  end {\n    airport {\n      locationId\n      city {\n        name\n      }\n    }\n  }\n  trips {\n    legs {\n      ...CarrierLogoWrapper_legs\n      id\n    }\n  }\n}\n\nfragment CarrierLogoWrapper_legs on Leg {\n  airline {\n    name\n    code\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AllBookingsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "future",
        "name": "allBookings",
        "storageKey": "allBookings(only:\"FUTURE\")",
        "args": v0,
        "concreteType": "BookingConnection",
        "plural": false,
        "selections": v1
      },
      {
        "kind": "LinkedField",
        "alias": "past",
        "name": "allBookings",
        "storageKey": "allBookings(only:\"PAST\")",
        "args": v2,
        "concreteType": "BookingConnection",
        "plural": false,
        "selections": v1
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AllBookingsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "future",
        "name": "allBookings",
        "storageKey": "allBookings(only:\"FUTURE\")",
        "args": v0,
        "concreteType": "BookingConnection",
        "plural": false,
        "selections": v13
      },
      {
        "kind": "LinkedField",
        "alias": "past",
        "name": "allBookings",
        "storageKey": "allBookings(only:\"PAST\")",
        "args": v2,
        "concreteType": "BookingConnection",
        "plural": false,
        "selections": v13
      }
    ]
  }
};
})();
(node/*: any*/).hash = '196432e7c79da019c13676d031825122';
module.exports = node;
