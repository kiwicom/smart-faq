/**
 * @flow
 * @relayHash d659e9da0b453eb65fcf3848f91dda8f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HasBooking_booking$ref = any;
export type BookingStateWrapperSelectedQueryVariables = {|
  id: string,
|};
export type BookingStateWrapperSelectedQueryResponse = {|
  +booking: ?{|
    +id: string,
    +databaseId: ?number,
    +oneWay: ?{|
      +$fragmentRefs: HasBooking_booking$ref,
    |},
    +return: ?{|
      +$fragmentRefs: HasBooking_booking$ref,
    |},
    +multicity: ?{|
      +$fragmentRefs: HasBooking_booking$ref,
    |},
  |},
|};
*/


/*
query BookingStateWrapperSelectedQuery(
  $id: ID!
) {
  booking(id: $id) {
    id
    databaseId
    oneWay {
      ...HasBooking_booking
      id
    }
    return {
      ...HasBooking_booking
      id
    }
    multicity {
      ...HasBooking_booking
      id
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
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
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
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "FragmentSpread",
    "name": "HasBooking_booking",
    "args": null
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isPastBooking",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "directAccessURL",
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
  "name": "time",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localTime",
  "args": null,
  "storageKey": null
},
v11 = {
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
v12 = [
  v9,
  v10,
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
      v8,
      v11,
      v2
    ]
  }
],
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "arrival",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v12
},
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v12
},
v15 = {
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
        v8,
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
        v8,
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
    v13,
    v14,
    v2
  ]
},
v16 = [
  v15,
  v13,
  v14
],
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trip",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": v16
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "end",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v12
},
v20 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "airport",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
    v8,
    v11,
    v2
  ]
},
v21 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trips",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": true,
  "selections": [
    v15,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        v9,
        v10,
        v20
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
        v10,
        v9,
        v20
      ]
    }
  ]
},
v22 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "outbound",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": v16
},
v23 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "inbound",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": v16
},
v24 = {
  "kind": "InlineFragment",
  "type": "BookingOneWay",
  "selections": [
    v17
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookingStateWrapperSelectedQuery",
  "id": null,
  "text": "query BookingStateWrapperSelectedQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    id\n    databaseId\n    oneWay {\n      ...HasBooking_booking\n      id\n    }\n    return {\n      ...HasBooking_booking\n      id\n    }\n    multicity {\n      ...HasBooking_booking\n      id\n    }\n  }\n}\n\nfragment HasBooking_booking on BookingInterface {\n  type\n  isPastBooking\n  ... on BookingOneWay {\n    ...OneWayTripWrapper_booking\n  }\n  ... on BookingReturn {\n    ...ReturnTripWrapper_booking\n  }\n  ... on BookingMulticity {\n    ...MultiCityTripWrapper_booking\n  }\n}\n\nfragment OneWayTripWrapper_booking on BookingOneWay {\n  directAccessURL\n  isPastBooking\n  databaseId\n  type\n  trip {\n    legs {\n      duration\n      flightNumber\n      pnr\n      operatingAirline {\n        name\n        iata\n      }\n      vehicle {\n        model\n        manufacturer\n      }\n      airline {\n        name\n        code\n        logoUrl\n      }\n      arrival {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      departure {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      id\n    }\n    arrival {\n      time\n      localTime\n      airport {\n        locationId\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n    departure {\n      time\n      localTime\n      airport {\n        locationId\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment ReturnTripWrapper_booking on BookingReturn {\n  directAccessURL\n  isPastBooking\n  databaseId\n  type\n  status\n  outbound {\n    legs {\n      duration\n      flightNumber\n      pnr\n      operatingAirline {\n        name\n        iata\n      }\n      vehicle {\n        model\n        manufacturer\n      }\n      airline {\n        name\n        code\n        logoUrl\n      }\n      arrival {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      departure {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      id\n    }\n    arrival {\n      time\n      localTime\n      airport {\n        locationId\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n    departure {\n      time\n      localTime\n      airport {\n        locationId\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  inbound {\n    legs {\n      duration\n      flightNumber\n      pnr\n      operatingAirline {\n        name\n        iata\n      }\n      vehicle {\n        model\n        manufacturer\n      }\n      airline {\n        name\n        code\n        logoUrl\n      }\n      arrival {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      departure {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      id\n    }\n    arrival {\n      time\n      localTime\n      airport {\n        locationId\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n    departure {\n      time\n      localTime\n      airport {\n        locationId\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment MultiCityTripWrapper_booking on BookingMulticity {\n  directAccessURL\n  isPastBooking\n  databaseId\n  type\n  status\n  end {\n    time\n    localTime\n    airport {\n      locationId\n      name\n      city {\n        name\n      }\n      id\n    }\n  }\n  trips {\n    legs {\n      duration\n      flightNumber\n      pnr\n      operatingAirline {\n        name\n        iata\n      }\n      vehicle {\n        model\n        manufacturer\n      }\n      airline {\n        name\n        code\n        logoUrl\n      }\n      arrival {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      departure {\n        time\n        localTime\n        airport {\n          locationId\n          name\n          city {\n            name\n          }\n          id\n        }\n      }\n      id\n    }\n    arrival {\n      time\n      localTime\n      airport {\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n    departure {\n      localTime\n      time\n      airport {\n        name\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookingStateWrapperSelectedQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
        "storageKey": null,
        "args": v1,
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
            "selections": v4
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "return",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingReturn",
            "plural": false,
            "selections": v4
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "multicity",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingMulticity",
            "plural": false,
            "selections": v4
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookingStateWrapperSelectedQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
        "storageKey": null,
        "args": v1,
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
              v5,
              v6,
              v7,
              v3,
              v17,
              v2,
              {
                "kind": "InlineFragment",
                "type": "BookingMulticity",
                "selections": [
                  v18,
                  v19,
                  v21
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "BookingReturn",
                "selections": [
                  v18,
                  v22,
                  v23
                ]
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
              v5,
              v6,
              v7,
              v3,
              v18,
              v22,
              v23,
              v2,
              {
                "kind": "InlineFragment",
                "type": "BookingMulticity",
                "selections": [
                  v19,
                  v21
                ]
              },
              v24
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
              v5,
              v6,
              v7,
              v3,
              v18,
              v19,
              v21,
              v2,
              {
                "kind": "InlineFragment",
                "type": "BookingReturn",
                "selections": [
                  v22,
                  v23
                ]
              },
              v24
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'a0d0ad3503c4b437526c1bc844544d25';
module.exports = node;
