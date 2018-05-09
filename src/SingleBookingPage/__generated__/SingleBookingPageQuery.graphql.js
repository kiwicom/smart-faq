/**
 * @flow
 * @relayHash 398a7e70e8af4c73003f84606b699295
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NearestBooking_bookingEdges$ref = any;
export type SingleBookingPageQueryVariables = {| |};
export type SingleBookingPageQueryResponse = {|
  +allBookings: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +$fragmentRefs: NearestBooking_bookingEdges$ref,
    |}>,
  |},
|};
*/


/*
query SingleBookingPageQuery {
  allBookings {
    edges {
      ...NearestBooking_bookingEdges
    }
  }
}

fragment NearestBooking_bookingEdges on BookingEdge {
  node {
    type
    oneWay {
      databaseId
      trip {
        arrival {
          time
        }
      }
      ...OneWay_booking
      ...Header_booking
      id
    }
    return {
      databaseId
      inbound {
        arrival {
          time
        }
      }
      ...Return_booking
      ...Header_booking
      id
    }
    multicity {
      databaseId
      end {
        time
      }
      ...Multicity_booking
      ...Header_booking
      id
    }
    directAccessURL
    id
  }
}

fragment OneWay_booking on BookingOneWay {
  trip {
    ...AccordionTripSummary_trip
  }
}

fragment Header_booking on BookingInterface {
  databaseId
  status
}

fragment Return_booking on BookingReturn {
  outbound {
    ...AccordionTripSummary_trip
  }
  inbound {
    ...AccordionTripSummary_trip
  }
}

fragment Multicity_booking on BookingMulticity {
  trips {
    ...AccordionTripSummary_trip
  }
}

fragment AccordionTripSummary_trip on Trip {
  departure {
    localTime
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

fragment CarrierLogoWrapper_legs on Leg {
  airline {
    name
    code
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
},
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
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "localTime",
      "args": null,
      "storageKey": null
    },
    v3
  ]
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = {
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
    v5
  ]
},
v7 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": [
      v1,
      v3
    ]
  },
  v4,
  v6
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v9 = [
  v4,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": [
      v3
    ]
  },
  v6
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SingleBookingPageQuery",
  "id": null,
  "text": "query SingleBookingPageQuery {\n  allBookings {\n    edges {\n      ...NearestBooking_bookingEdges\n    }\n  }\n}\n\nfragment NearestBooking_bookingEdges on BookingEdge {\n  node {\n    type\n    oneWay {\n      databaseId\n      trip {\n        arrival {\n          time\n        }\n      }\n      ...OneWay_booking\n      ...Header_booking\n      id\n    }\n    return {\n      databaseId\n      inbound {\n        arrival {\n          time\n        }\n      }\n      ...Return_booking\n      ...Header_booking\n      id\n    }\n    multicity {\n      databaseId\n      end {\n        time\n      }\n      ...Multicity_booking\n      ...Header_booking\n      id\n    }\n    directAccessURL\n    id\n  }\n}\n\nfragment OneWay_booking on BookingOneWay {\n  trip {\n    ...AccordionTripSummary_trip\n  }\n}\n\nfragment Header_booking on BookingInterface {\n  databaseId\n  status\n}\n\nfragment Return_booking on BookingReturn {\n  outbound {\n    ...AccordionTripSummary_trip\n  }\n  inbound {\n    ...AccordionTripSummary_trip\n  }\n}\n\nfragment Multicity_booking on BookingMulticity {\n  trips {\n    ...AccordionTripSummary_trip\n  }\n}\n\nfragment AccordionTripSummary_trip on Trip {\n  departure {\n    localTime\n    airport {\n      locationId\n      city {\n        name\n      }\n    }\n  }\n  arrival {\n    airport {\n      locationId\n      city {\n        name\n      }\n    }\n  }\n  legs {\n    ...CarrierLogoWrapper_legs\n    id\n  }\n}\n\nfragment CarrierLogoWrapper_legs on Leg {\n  airline {\n    name\n    code\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SingleBookingPageQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allBookings",
        "storageKey": null,
        "args": null,
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
                "kind": "FragmentSpread",
                "name": "NearestBooking_bookingEdges",
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
    "name": "SingleBookingPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allBookings",
        "storageKey": null,
        "args": null,
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "oneWay",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "BookingOneWay",
                    "plural": false,
                    "selections": [
                      v0,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "trip",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Trip",
                        "plural": false,
                        "selections": v7
                      },
                      v8,
                      v5
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
                      v0,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "inbound",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Trip",
                        "plural": false,
                        "selections": v7
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "outbound",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Trip",
                        "plural": false,
                        "selections": v9
                      },
                      v8,
                      v5
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
                      v0,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "end",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": [
                          v1
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "trips",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Trip",
                        "plural": true,
                        "selections": v9
                      },
                      v8,
                      v5
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "directAccessURL",
                    "args": null,
                    "storageKey": null
                  },
                  v5
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
(node/*: any*/).hash = '6ae713c49d657e3dbe2d743e702c46d5';
module.exports = node;
