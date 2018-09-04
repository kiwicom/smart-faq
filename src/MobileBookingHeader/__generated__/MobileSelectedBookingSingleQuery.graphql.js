/**
 * @flow
<<<<<<< master
 * @relayHash e0857cb8d541a59a49efdfb013a30db4
=======
 * @relayHash 4bc4f29b4556032e649517ca94eaeb17
>>>>>>> fix: provide customer email & phone in custom fields as well
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type GuaranteeNeededResolver_booking$ref = any;
type MobileBookingDetail_booking$ref = any;
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
export type MobileSelectedBookingSingleQueryVariables = {|
  id: number,
  authToken: string,
|};
export type MobileSelectedBookingSingleQueryResponse = {|
  +singleBooking: ?{|
    +type: ?BookingType,
    +upcomingLeg: ?{|
      +arrival: ?{|
        +time: ?any,
      |},
      +departure: ?{|
        +time: ?any,
      |},
    |},
    +$fragmentRefs: (MobileBookingDetail_booking$ref & GuaranteeNeededResolver_booking$ref),
  |},
|};
*/


/*
query MobileSelectedBookingSingleQuery(
  $id: Int!
  $authToken: String!
) {
  singleBooking(id: $id, authToken: $authToken) {
    __typename
    type
    upcomingLeg {
      arrival {
        time
      }
      departure {
        time
      }
      id
    }
    ...MobileBookingDetail_booking
    ...GuaranteeNeededResolver_booking
    id
  }
}

fragment MobileBookingDetail_booking on BookingInterface {
  type
  databaseId
  isPastBooking
  directAccessURL
  ... on BookingOneWay {
    ...OneWayTripMobile_booking
    trip {
      departure {
        time
      }
    }
  }
  ... on BookingReturn {
    ...ReturnTripMobile_booking
    outbound {
      departure {
        time
      }
    }
  }
  ... on BookingMulticity {
    ...MultiCityTripMobile_booking
    start {
      time
    }
  }
}

<<<<<<< master
fragment OneWayTripMobile_booking on BookingOneWay {
=======
fragment GuaranteeNeededResolver_booking on BookingInterface {
  databaseId
  status
  contactDetails {
    phone
    email
  }
  upcomingLeg {
    guarantee
    arrival {
      time
      airport {
        city {
          name
        }
        code
        id
      }
    }
    departure {
      time
      airport {
        city {
          name
        }
        code
        id
      }
    }
    id
  }
}

fragment OneWayTrip_booking on BookingOneWay {
>>>>>>> feat: provide custom fields for purecloud when chat session is created
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

fragment ReturnTripMobile_booking on BookingReturn {
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

fragment MultiCityTripMobile_booking on BookingMulticity {
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
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "authToken",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "authToken",
    "variableName": "authToken",
    "type": "String!"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "Int!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
},
v4 = [
  v3
],
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
v7 = [
  v3,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
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
      v5
    ]
  }
],
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "airport",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
    v6,
    v5
  ]
},
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": [
    v8,
    v3
  ]
},
v10 = [
  v8
],
v11 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v10
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MobileSelectedBookingSingleQuery",
  "id": null,
<<<<<<< master
  "text": "query MobileSelectedBookingSingleQuery(\n  $id: Int!\n  $authToken: String!\n) {\n  singleBooking(id: $id, authToken: $authToken) {\n    __typename\n    type\n    upcomingLeg {\n      arrival {\n        time\n      }\n      departure {\n        time\n      }\n      id\n    }\n    ...MobileBookingDetail_booking\n    id\n  }\n}\n\nfragment MobileBookingDetail_booking on BookingInterface {\n  type\n  databaseId\n  isPastBooking\n  directAccessURL\n  ... on BookingOneWay {\n    ...OneWayTripMobile_booking\n    trip {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingReturn {\n    ...ReturnTripMobile_booking\n    outbound {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingMulticity {\n    ...MultiCityTripMobile_booking\n    start {\n      time\n    }\n  }\n}\n\nfragment OneWayTripMobile_booking on BookingOneWay {\n  trip {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment ReturnTripMobile_booking on BookingReturn {\n  outbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  inbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment MultiCityTripMobile_booking on BookingMulticity {\n  trips {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  end {\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n}\n",
=======
  "text": "query MobileSelectedBookingSingleQuery(\n  $id: Int!\n  $authToken: String!\n) {\n  singleBooking(id: $id, authToken: $authToken) {\n    __typename\n    type\n    upcomingLeg {\n      arrival {\n        time\n      }\n      departure {\n        time\n      }\n      id\n    }\n    ...MobileBookingDetail_booking\n    ...GuaranteeNeededResolver_booking\n    id\n  }\n}\n\nfragment MobileBookingDetail_booking on BookingInterface {\n  type\n  databaseId\n  isPastBooking\n  directAccessURL\n  ... on BookingOneWay {\n    ...OneWayTrip_booking\n    trip {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingReturn {\n    ...ReturnTrip_booking\n    outbound {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingMulticity {\n    ...MultiCityTrip_booking\n    start {\n      time\n    }\n  }\n}\n\nfragment GuaranteeNeededResolver_booking on BookingInterface {\n  databaseId\n  status\n  contactDetails {\n    phone\n    email\n  }\n  upcomingLeg {\n    guarantee\n    arrival {\n      time\n      airport {\n        city {\n          name\n        }\n        code\n        id\n      }\n    }\n    departure {\n      time\n      airport {\n        city {\n          name\n        }\n        code\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment OneWayTrip_booking on BookingOneWay {\n  trip {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment ReturnTrip_booking on BookingReturn {\n  outbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  inbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment MultiCityTrip_booking on BookingMulticity {\n  trips {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  end {\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n}\n",
>>>>>>> fix: provide customer email & phone in custom fields as well
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MobileSelectedBookingSingleQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "singleBooking",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
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
                "selections": v4
              },
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
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "MobileBookingDetail_booking",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "GuaranteeNeededResolver_booking",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MobileSelectedBookingSingleQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "singleBooking",
        "storageKey": null,
        "args": v1,
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
          v2,
          v5,
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
                "selections": v7
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "departure",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v7
              },
              v5,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "guarantee",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contactDetails",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingContactDetails",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "phone",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "status",
            "args": null,
            "storageKey": null
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
                  v9,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "arrival",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v10
                  }
                ]
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
                  v9
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
                "selections": v11
              }
            ]
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
                "selections": v11
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
                "name": "start",
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
};
})();
(node/*: any*/).hash = '21923ab06389ba0befefb0e55d2ae7de';
module.exports = node;
