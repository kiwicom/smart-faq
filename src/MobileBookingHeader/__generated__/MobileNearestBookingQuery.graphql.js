/**
 * @flow
 * @relayHash 09f0c895fba77da6227728a05a44ec0c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type GuaranteeNeededResolver_upcomingLeg$ref = any;
type MobileBookingDetail_booking$ref = any;
export type MobileNearestBookingQueryVariables = {| |};
export type MobileNearestBookingQueryResponse = {|
  +nearestBooking: ?{|
    +upcomingLeg: ?{|
      +$fragmentRefs: GuaranteeNeededResolver_upcomingLeg$ref,
    |},
    +$fragmentRefs: MobileBookingDetail_booking$ref,
  |},
|};
*/


/*
query MobileNearestBookingQuery {
  nearestBooking {
    __typename
    upcomingLeg {
      ...GuaranteeNeededResolver_upcomingLeg
      id
    }
    ...MobileBookingDetail_booking
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
},
v1 = [
  v0
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
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
    v2
  ]
},
v4 = [
  v3
],
v5 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v4
  }
],
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": [
    v3,
    v0
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MobileNearestBookingQuery",
  "id": null,
  "text": "query MobileNearestBookingQuery {\n  nearestBooking {\n    __typename\n    upcomingLeg {\n      ...GuaranteeNeededResolver_upcomingLeg\n      id\n    }\n    ...MobileBookingDetail_booking\n    id\n  }\n}\n\nfragment GuaranteeNeededResolver_upcomingLeg on Leg {\n  arrival {\n    time\n  }\n  departure {\n    time\n  }\n  guarantee\n}\n\nfragment MobileBookingDetail_booking on BookingInterface {\n  type\n  databaseId\n  isPastBooking\n  directAccessURL\n  ... on BookingOneWay {\n    ...OneWayTrip_booking\n    trip {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingReturn {\n    ...ReturnTrip_booking\n    outbound {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingMulticity {\n    ...MultiCityTrip_booking\n    start {\n      time\n    }\n  }\n}\n\nfragment OneWayTrip_booking on BookingOneWay {\n  trip {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment ReturnTrip_booking on BookingReturn {\n  outbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  inbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment MultiCityTrip_booking on BookingMulticity {\n  trips {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  end {\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MobileNearestBookingQuery",
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
            "kind": "FragmentSpread",
            "name": "MobileBookingDetail_booking",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MobileNearestBookingQuery",
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
                "selections": v1
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "departure",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v1
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "guarantee",
                "args": null,
                "storageKey": null
              },
              v2
            ]
          },
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
            "name": "databaseId",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "directAccessURL",
            "args": null,
            "storageKey": null
          },
          v2,
          {
            "kind": "InlineFragment",
            "type": "BookingMulticity",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trips",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": true,
                "selections": v5
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "end",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v4
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "start",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v1
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingReturn",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": [
                  v6
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "inbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v5
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingOneWay",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trip",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": [
                  v6,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "arrival",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v4
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
(node/*: any*/).hash = '202e9ddb2994afeeb8afa7c1cf5b9fbf';
module.exports = node;
