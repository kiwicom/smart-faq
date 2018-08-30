/**
 * @flow
 * @relayHash b550e6aa49e99377d4516267960a6169
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HasBooking_booking$ref = any;
type MultiCityTripWrapper_booking$ref = any;
type OneWayTripWrapper_booking$ref = any;
type ReturnTripWrapper_booking$ref = any;
export type BookingStateWrapperNearestQueryVariables = {| |};
export type BookingStateWrapperNearestQueryResponse = {|
  +nearestBooking: ?{|
    +id: string,
    +databaseId: ?number,
    +$fragmentRefs: (HasBooking_booking$ref & OneWayTripWrapper_booking$ref & ReturnTripWrapper_booking$ref & MultiCityTripWrapper_booking$ref),
  |},
|};
*/


/*
query BookingStateWrapperNearestQuery {
  nearestBooking {
    __typename
    id
    databaseId
    ...HasBooking_booking
    ... on BookingOneWay {
      ...OneWayTripWrapper_booking
    }
    ... on BookingReturn {
      ...ReturnTripWrapper_booking
    }
    ... on BookingMulticity {
      ...MultiCityTripWrapper_booking
    }
  }
}

fragment HasBooking_booking on BookingInterface {
  type
  isPastBooking
  ... on BookingOneWay {
    ...OneWayTripWrapper_booking
  }
  ... on BookingReturn {
    ...ReturnTripWrapper_booking
  }
  ... on BookingMulticity {
    ...MultiCityTripWrapper_booking
  }
}

fragment OneWayTripWrapper_booking on BookingOneWay {
  directAccessURL
  isPastBooking
  databaseId
  type
  trip {
    legs {
      duration
      flightNumber
      pnr
      operatingAirline {
        name
        iata
      }
      vehicle {
        model
        manufacturer
      }
      airline {
        name
        code
        logoUrl
      }
      arrival {
        time
        localTime
        airport {
          locationId
          name
          city {
            name
          }
          id
        }
      }
      departure {
        time
        localTime
        airport {
          locationId
          name
          city {
            name
          }
          id
        }
      }
      id
    }
    arrival {
      time
      localTime
      airport {
        locationId
        name
        city {
          name
        }
        id
      }
    }
    departure {
      time
      localTime
      airport {
        locationId
        name
        city {
          name
        }
        id
      }
    }
  }
}

fragment ReturnTripWrapper_booking on BookingReturn {
  directAccessURL
  isPastBooking
  databaseId
  type
  status
  outbound {
    legs {
      duration
      flightNumber
      pnr
      operatingAirline {
        name
        iata
      }
      vehicle {
        model
        manufacturer
      }
      airline {
        name
        code
        logoUrl
      }
      arrival {
        time
        localTime
        airport {
          locationId
          name
          city {
            name
          }
          id
        }
      }
      departure {
        time
        localTime
        airport {
          locationId
          name
          city {
            name
          }
          id
        }
      }
      id
    }
    arrival {
      time
      localTime
      airport {
        locationId
        name
        city {
          name
        }
        id
      }
    }
    departure {
      time
      localTime
      airport {
        locationId
        name
        city {
          name
        }
        id
      }
    }
  }
  inbound {
    legs {
      duration
      flightNumber
      pnr
      operatingAirline {
        name
        iata
      }
      vehicle {
        model
        manufacturer
      }
      airline {
        name
        code
        logoUrl
      }
      arrival {
        time
        localTime
        airport {
          locationId
          name
          city {
            name
          }
          id
        }
      }
      departure {
        time
        localTime
        airport {
          locationId
          name
          city {
            name
          }
          id
        }
      }
      id
    }
    arrival {
      time
      localTime
      airport {
        locationId
        name
        city {
          name
        }
        id
      }
    }
    departure {
      time
      localTime
      airport {
        locationId
        name
        city {
          name
        }
        id
      }
    }
  }
}

fragment MultiCityTripWrapper_booking on BookingMulticity {
  directAccessURL
  isPastBooking
  databaseId
  type
  status
  end {
    time
    localTime
    airport {
      locationId
      name
      city {
        name
      }
      id
    }
  }
  trips {
    legs {
      duration
      flightNumber
      pnr
      operatingAirline {
        name
        iata
      }
      vehicle {
        model
        manufacturer
      }
      airline {
        name
        code
        logoUrl
      }
      arrival {
        time
        localTime
        airport {
          locationId
          name
          city {
            name
          }
          id
        }
      }
      departure {
        time
        localTime
        airport {
          locationId
          name
          city {
            name
          }
          id
        }
      }
      id
    }
    arrival {
      time
      localTime
      airport {
        name
        city {
          name
        }
        id
      }
    }
    departure {
      localTime
      time
      airport {
        name
        city {
          name
        }
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "directAccessURL",
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
  "name": "time",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localTime",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "city",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    v6
  ]
},
v8 = [
  v4,
  v5,
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
      v6,
      v7,
      v0
    ]
  }
],
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "arrival",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v8
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v8
},
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
        v6,
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
        v6,
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
    v9,
    v10,
    v0
  ]
},
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "airport",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
    v6,
    v7,
    v0
  ]
},
v13 = [
  v11,
  v9,
  v10
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookingStateWrapperNearestQuery",
  "id": null,
  "text": "query BookingStateWrapperNearestQuery {\n  nearestBooking {\n    __typename\n    id\n    databaseId\n    ...HasBooking_booking\n    ... on BookingOneWay {\n      ...OneWayTripWrapper_booking\n    }\n    ... on BookingReturn {\n      ...ReturnTripWrapper_booking\n    }\n    ... on BookingMulticity {\n      ...MultiCityTripWrapper_booking\n    }\n  }\n}\n\nfragment HasBooking_booking on BookingInterface {\n  type\n  isPastBooking\n  ... on BookingOneWay {\n    ...OneWayTripWrapper_booking\n  }\n  ... on BookingReturn {\n    ...ReturnTripWrapper_booking\n  }\n  ... on BookingMulticity {\n    ...MultiCityTripWrapper_booking\n  }\n}\n\nfragment OneWayTripWrapper_booking on BookingOneWay {\n  directAccessURL\n  isPastBooking\n  databaseId\n  type\n  trip {\n    legs {\n      duration\n      flightNumber\n      pnr\n      operatingAirline {\n        name\n        iata\n      }\n      vehicle {\n        model\n        manufacturer\n      }\n      airline {\n        name\n        code\n        logoUrl\n      }\n      arrival {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      departure {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      id\n    }\n    arrival {\n      time\n      localTime\n      airport {\n        locationId\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n    departure {\n      time\n      localTime\n      airport {\n        locationId\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment ReturnTripWrapper_booking on BookingReturn {\n  directAccessURL\n  isPastBooking\n  databaseId\n  type\n  status\n  outbound {\n    legs {\n      duration\n      flightNumber\n      pnr\n      operatingAirline {\n        name\n        iata\n      }\n      vehicle {\n        model\n        manufacturer\n      }\n      airline {\n        name\n        code\n        logoUrl\n      }\n      arrival {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      departure {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      id\n    }\n    arrival {\n      time\n      localTime\n      airport {\n        locationId\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n    departure {\n      time\n      localTime\n      airport {\n        locationId\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  inbound {\n    legs {\n      duration\n      flightNumber\n      pnr\n      operatingAirline {\n        name\n        iata\n      }\n      vehicle {\n        model\n        manufacturer\n      }\n      airline {\n        name\n        code\n        logoUrl\n      }\n      arrival {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      departure {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      id\n    }\n    arrival {\n      time\n      localTime\n      airport {\n        locationId\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n    departure {\n      time\n      localTime\n      airport {\n        locationId\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment MultiCityTripWrapper_booking on BookingMulticity {\n  directAccessURL\n  isPastBooking\n  databaseId\n  type\n  status\n  end {\n    time\n    localTime\n    airport {\n      locationId\n      name\n      city {\n        name\n      }\n      id\n    }\n  }\n  trips {\n    legs {\n      duration\n      flightNumber\n      pnr\n      operatingAirline {\n        name\n        iata\n      }\n      vehicle {\n        model\n        manufacturer\n      }\n      airline {\n        name\n        code\n        logoUrl\n      }\n      arrival {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      departure {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      id\n    }\n    arrival {\n      time\n      localTime\n      airport {\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n    departure {\n      localTime\n      time\n      airport {\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookingStateWrapperNearestQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "nearestBooking",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          v0,
          v1,
          {
            "kind": "FragmentSpread",
            "name": "HasBooking_booking",
            "args": null
          },
          {
            "kind": "InlineFragment",
            "type": "BookingMulticity",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "MultiCityTripWrapper_booking",
                "args": null
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingReturn",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "ReturnTripWrapper_booking",
                "args": null
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingOneWay",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "OneWayTripWrapper_booking",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookingStateWrapperNearestQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "nearestBooking",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          v0,
          v1,
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
            "name": "isPastBooking",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "BookingMulticity",
            "selections": [
              v2,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "end",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v8
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
                  v11,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "arrival",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": [
                      v4,
                      v5,
                      v12
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
                    "selections": [
                      v5,
                      v4,
                      v12
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingReturn",
            "selections": [
              v2,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v13
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "inbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v13
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingOneWay",
            "selections": [
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trip",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v13
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'f3bfd4b66cce1f6c398ffc2f8dce4716';
module.exports = node;
