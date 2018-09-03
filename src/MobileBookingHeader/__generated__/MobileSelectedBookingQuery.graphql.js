/**
 * @flow
 * @relayHash 23d58694c104ddbc4c3b7bf368d90900
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type GuaranteeNeededResolver_upcomingLeg$ref = any;
type MobileBookingDetail_booking$ref = any;
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
export type MobileSelectedBookingQueryVariables = {|
  id: string,
|};
export type MobileSelectedBookingQueryResponse = {|
  +booking: ?{|
    +type: ?BookingType,
    +upcomingLeg: ?{|
      +$fragmentRefs: GuaranteeNeededResolver_upcomingLeg$ref,
    |},
    +oneWay: ?{|
      +$fragmentRefs: MobileBookingDetail_booking$ref,
    |},
    +return: ?{|
      +$fragmentRefs: MobileBookingDetail_booking$ref,
    |},
    +multicity: ?{|
      +$fragmentRefs: MobileBookingDetail_booking$ref,
    |},
  |},
|};
*/


/*
query MobileSelectedBookingQuery(
  $id: ID!
) {
  booking(id: $id) {
    type
    upcomingLeg {
      ...GuaranteeNeededResolver_upcomingLeg
      id
    }
    oneWay {
      ...MobileBookingDetail_booking
      id
    }
    return {
      ...MobileBookingDetail_booking
      id
    }
    multicity {
      ...MobileBookingDetail_booking
      id
    }
    id
  }
}

fragment GuaranteeNeededResolver_upcomingLeg on Leg {
  arrival {
    time
  }
  departure {
    time
  }
  guarantee
}

fragment MobileBookingDetail_booking on BookingInterface {
  type
  databaseId
  isPastBooking
  directAccessURL
  ... on BookingOneWay {
    ...OneWayTrip_booking
    trip {
      departure {
        time
      }
    }
  }
  ... on BookingReturn {
    ...ReturnTrip_booking
    outbound {
      departure {
        time
      }
    }
  }
  ... on BookingMulticity {
    ...MultiCityTrip_booking
    start {
      time
    }
  }
}

fragment OneWayTrip_booking on BookingOneWay {
  trip {
    departure {
      airport {
        city {
          name
        }
        id
      }
    }
    arrival {
      airport {
        city {
          name
        }
        id
      }
    }
  }
}

fragment ReturnTrip_booking on BookingReturn {
  outbound {
    departure {
      airport {
        city {
          name
        }
        id
      }
    }
  }
  inbound {
    departure {
      airport {
        city {
          name
        }
        id
      }
    }
  }
}

fragment MultiCityTrip_booking on BookingMulticity {
  trips {
    departure {
      airport {
        city {
          name
        }
        id
      }
    }
  }
  end {
    airport {
      city {
        name
      }
      id
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
  "name": "type",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "FragmentSpread",
    "name": "MobileBookingDetail_booking",
    "args": null
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
},
v5 = [
  v4
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
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
  "name": "isPastBooking",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "directAccessURL",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "airport",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
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
    },
    v6
  ]
},
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": [
    v10,
    v4
  ]
},
v12 = [
  v10
],
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trip",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
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
      "selections": v12
    }
  ]
},
v14 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v12
  }
],
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trips",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": true,
  "selections": v14
},
v16 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "end",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v12
},
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "start",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v5
},
v18 = {
  "kind": "InlineFragment",
  "type": "BookingMulticity",
  "selections": [
    v15,
    v16,
    v17
  ]
},
v19 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "outbound",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": [
    v11
  ]
},
v20 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "inbound",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": v14
},
v21 = {
  "kind": "InlineFragment",
  "type": "BookingReturn",
  "selections": [
    v19,
    v20
  ]
},
v22 = {
  "kind": "InlineFragment",
  "type": "BookingOneWay",
  "selections": [
    v13
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MobileSelectedBookingQuery",
  "id": null,
  "text": "query MobileSelectedBookingQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    type\n    upcomingLeg {\n      ...GuaranteeNeededResolver_upcomingLeg\n      id\n    }\n    oneWay {\n      ...MobileBookingDetail_booking\n      id\n    }\n    return {\n      ...MobileBookingDetail_booking\n      id\n    }\n    multicity {\n      ...MobileBookingDetail_booking\n      id\n    }\n    id\n  }\n}\n\nfragment GuaranteeNeededResolver_upcomingLeg on Leg {\n  arrival {\n    time\n  }\n  departure {\n    time\n  }\n  guarantee\n}\n\nfragment MobileBookingDetail_booking on BookingInterface {\n  type\n  databaseId\n  isPastBooking\n  directAccessURL\n  ... on BookingOneWay {\n    ...OneWayTrip_booking\n    trip {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingReturn {\n    ...ReturnTrip_booking\n    outbound {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingMulticity {\n    ...MultiCityTrip_booking\n    start {\n      time\n    }\n  }\n}\n\nfragment OneWayTrip_booking on BookingOneWay {\n  trip {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment ReturnTrip_booking on BookingReturn {\n  outbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  inbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment MultiCityTrip_booking on BookingMulticity {\n  trips {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  end {\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MobileSelectedBookingQuery",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "upcomingLeg",
            "storageKey": null,
            "args": null,
            "concreteType": "Leg",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "GuaranteeNeededResolver_upcomingLeg",
                "args": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "oneWay",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingOneWay",
            "plural": false,
            "selections": v3
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "return",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingReturn",
            "plural": false,
            "selections": v3
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "multicity",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingMulticity",
            "plural": false,
            "selections": v3
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MobileSelectedBookingQuery",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "upcomingLeg",
            "storageKey": null,
            "args": null,
            "concreteType": "Leg",
            "plural": false,
            "selections": [
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
                "kind": "ScalarField",
                "alias": null,
                "name": "guarantee",
                "args": null,
                "storageKey": null
              },
              v6
            ]
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
              v2,
              v7,
              v8,
              v9,
              v13,
              v6,
              v18,
              v21
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
              v2,
              v7,
              v8,
              v9,
              v19,
              v20,
              v6,
              v18,
              v22
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
              v2,
              v7,
              v8,
              v9,
              v15,
              v16,
              v17,
              v6,
              v21,
              v22
            ]
          },
          v6
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'ec19e7daa20a75625d34da26c020299a';
module.exports = node;
