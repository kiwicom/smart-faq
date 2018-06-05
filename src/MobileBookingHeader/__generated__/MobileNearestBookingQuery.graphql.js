/**
 * @flow
 * @relayHash 563d2189a5f0912fff6410e04aec2801
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MobileBookingDetail_booking$ref = any;
export type MobileNearestBookingQueryVariables = {| |};
export type MobileNearestBookingQueryResponse = {|
  +nearestBooking: ?{|
    +$fragmentRefs: MobileBookingDetail_booking$ref,
  |},
|};
*/


/*
query MobileNearestBookingQuery {
  nearestBooking {
    __typename
    ...MobileBookingDetail_booking
    id
  }
}

fragment MobileBookingDetail_booking on BookingInterface {
  type
  databaseId
  directAccessURL
  ... on BookingOneWay {
    ...OneWayTrip_booking
  }
  ... on BookingReturn {
    ...ReturnTrip_booking
  }
  ... on BookingMulticity {
    ...MultiCityTrip_booking
  }
}

fragment OneWayTrip_booking on BookingOneWay {
  trip {
    departure {
      airport {
        city {
          name
        }
      }
    }
    arrival {
      airport {
        city {
          name
        }
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
      }
    }
  }
  inbound {
    departure {
      airport {
        city {
          name
        }
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
      }
    }
  }
  end {
    airport {
      city {
        name
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
      }
    ]
  }
],
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v0
},
v2 = [
  v1
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MobileNearestBookingQuery",
  "id": null,
  "text": "query MobileNearestBookingQuery {\n  nearestBooking {\n    __typename\n    ...MobileBookingDetail_booking\n    id\n  }\n}\n\nfragment MobileBookingDetail_booking on BookingInterface {\n  type\n  databaseId\n  directAccessURL\n  ... on BookingOneWay {\n    ...OneWayTrip_booking\n  }\n  ... on BookingReturn {\n    ...ReturnTrip_booking\n  }\n  ... on BookingMulticity {\n    ...MultiCityTrip_booking\n  }\n}\n\nfragment OneWayTrip_booking on BookingOneWay {\n  trip {\n    departure {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n}\n\nfragment ReturnTrip_booking on BookingReturn {\n  outbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n  inbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n}\n\nfragment MultiCityTrip_booking on BookingMulticity {\n  trips {\n    departure {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n  end {\n    airport {\n      city {\n        name\n      }\n    }\n  }\n}\n",
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
            "name": "directAccessURL",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
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
                "selections": v2
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "end",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v0
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
                "selections": v2
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "inbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v2
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
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "arrival",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v0
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
(node/*: any*/).hash = '87dd992d72c120a54100dd50f845baa0';
module.exports = node;
