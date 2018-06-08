/**
 * @flow
 * @relayHash 1ae8154c54edca211313ab9bc288b544
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
  future: customerBookings(only: FUTURE) {
    ...BookingCardsList_booking
  }
  past: customerBookings(only: PAST) {
    ...BookingCardsList_booking
  }
}

fragment BookingCardsList_booking on BookingInterfaceConnection {
  edges {
    node {
      id
      __typename
      ... on BookingOneWay {
        ...OneWayBooking_booking
      }
      ... on BookingReturn {
        ...ReturnBooking_booking
      }
      ... on BookingMulticity {
        ...MulticityBooking_booking
      }
    }
  }
}

fragment OneWayBooking_booking on BookingOneWay {
  ...BookingCard_booking
  trip {
    departure {
      ...BookingCard_departure
    }
    arrival {
      ...BookingCard_arrival
    }
    legs {
      ...CarrierLogoWrapper_legs
      id
    }
  }
}

fragment ReturnBooking_booking on BookingReturn {
  ...BookingCard_booking
  outbound {
    departure {
      ...BookingCard_departure
    }
    arrival {
      ...BookingCard_arrival
    }
    legs {
      ...CarrierLogoWrapper_legs
      id
    }
  }
}

fragment MulticityBooking_booking on BookingMulticity {
  ...BookingCard_booking
  start {
    ...BookingCard_departure
  }
  end {
    ...BookingCard_arrival
  }
  trips {
    legs {
      ...CarrierLogoWrapper_legs
      id
    }
  }
}

fragment BookingCard_booking on BookingInterface {
  ...DateAndPassenger_booking
  databaseId
  carriers {
    name
    code
    id
  }
}

fragment BookingCard_departure on RouteStop {
  ...FromToRow_departure
  ...DateAndPassenger_departure
}

fragment BookingCard_arrival on RouteStop {
  ...FromToRow_arrival
}

fragment CarrierLogoWrapper_legs on Leg {
  airline {
    name
    code
  }
}

fragment FromToRow_arrival on RouteStop {
  airport {
    locationId
    city {
      name
    }
    id
  }
}

fragment FromToRow_departure on RouteStop {
  airport {
    locationId
    city {
      name
    }
    id
  }
}

fragment DateAndPassenger_departure on RouteStop {
  time
}

fragment DateAndPassenger_booking on BookingInterface {
  status
  passengerCount
  bookingDate
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "only",
    "value": "FUTURE",
    "type": "CustomerBookingsOnlyEnum"
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
    "type": "CustomerBookingsOnlyEnum"
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
  "name": "passengerCount",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "bookingDate",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "carriers",
  "storageKey": null,
  "args": null,
  "concreteType": "Carrier",
  "plural": true,
  "selections": [
    v8,
    v9,
    v3
  ]
},
v11 = {
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
        v8
      ]
    },
    v3
  ]
},
v12 = [
  v11,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  }
],
v13 = [
  v11
],
v14 = {
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
        v8,
        v9
      ]
    },
    v3
  ]
},
v15 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v12
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v13
  },
  v14
],
v16 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "BookingInterfaceEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          v3,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "BookingMulticity",
            "selections": [
              v4,
              v5,
              v6,
              v7,
              v10,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "start",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v12
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "end",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v13
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
                  v14
                ]
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingReturn",
            "selections": [
              v4,
              v5,
              v6,
              v7,
              v10,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v15
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingOneWay",
            "selections": [
              v4,
              v5,
              v6,
              v7,
              v10,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trip",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v15
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
  "name": "AllBookingsQuery",
  "id": null,
  "text": "query AllBookingsQuery {\n  future: customerBookings(only: FUTURE) {\n    ...BookingCardsList_booking\n  }\n  past: customerBookings(only: PAST) {\n    ...BookingCardsList_booking\n  }\n}\n\nfragment BookingCardsList_booking on BookingInterfaceConnection {\n  edges {\n    node {\n      id\n      __typename\n      ... on BookingOneWay {\n        ...OneWayBooking_booking\n      }\n      ... on BookingReturn {\n        ...ReturnBooking_booking\n      }\n      ... on BookingMulticity {\n        ...MulticityBooking_booking\n      }\n    }\n  }\n}\n\nfragment OneWayBooking_booking on BookingOneWay {\n  ...BookingCard_booking\n  trip {\n    departure {\n      ...BookingCard_departure\n    }\n    arrival {\n      ...BookingCard_arrival\n    }\n    legs {\n      ...CarrierLogoWrapper_legs\n      id\n    }\n  }\n}\n\nfragment ReturnBooking_booking on BookingReturn {\n  ...BookingCard_booking\n  outbound {\n    departure {\n      ...BookingCard_departure\n    }\n    arrival {\n      ...BookingCard_arrival\n    }\n    legs {\n      ...CarrierLogoWrapper_legs\n      id\n    }\n  }\n}\n\nfragment MulticityBooking_booking on BookingMulticity {\n  ...BookingCard_booking\n  start {\n    ...BookingCard_departure\n  }\n  end {\n    ...BookingCard_arrival\n  }\n  trips {\n    legs {\n      ...CarrierLogoWrapper_legs\n      id\n    }\n  }\n}\n\nfragment BookingCard_booking on BookingInterface {\n  ...DateAndPassenger_booking\n  databaseId\n  carriers {\n    name\n    code\n    id\n  }\n}\n\nfragment BookingCard_departure on RouteStop {\n  ...FromToRow_departure\n  ...DateAndPassenger_departure\n}\n\nfragment BookingCard_arrival on RouteStop {\n  ...FromToRow_arrival\n}\n\nfragment CarrierLogoWrapper_legs on Leg {\n  airline {\n    name\n    code\n  }\n}\n\nfragment FromToRow_arrival on RouteStop {\n  airport {\n    locationId\n    city {\n      name\n    }\n    id\n  }\n}\n\nfragment FromToRow_departure on RouteStop {\n  airport {\n    locationId\n    city {\n      name\n    }\n    id\n  }\n}\n\nfragment DateAndPassenger_departure on RouteStop {\n  time\n}\n\nfragment DateAndPassenger_booking on BookingInterface {\n  status\n  passengerCount\n  bookingDate\n}\n",
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
        "name": "customerBookings",
        "storageKey": "customerBookings(only:\"FUTURE\")",
        "args": v0,
        "concreteType": "BookingInterfaceConnection",
        "plural": false,
        "selections": v1
      },
      {
        "kind": "LinkedField",
        "alias": "past",
        "name": "customerBookings",
        "storageKey": "customerBookings(only:\"PAST\")",
        "args": v2,
        "concreteType": "BookingInterfaceConnection",
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
        "name": "customerBookings",
        "storageKey": "customerBookings(only:\"FUTURE\")",
        "args": v0,
        "concreteType": "BookingInterfaceConnection",
        "plural": false,
        "selections": v16
      },
      {
        "kind": "LinkedField",
        "alias": "past",
        "name": "customerBookings",
        "storageKey": "customerBookings(only:\"PAST\")",
        "args": v2,
        "concreteType": "BookingInterfaceConnection",
        "plural": false,
        "selections": v16
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'f26e481e505504c13eaa500a557e4577';
module.exports = node;
