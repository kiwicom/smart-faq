/**
 * @flow
 * @relayHash e75048f0d1c67a0777da1ef3486e6a94
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MobileBookingDetail_booking$ref = any;
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
export type MobileSelectedBookingQueryVariables = {|
  id: string,
|};
export type MobileSelectedBookingQueryResponse = {|
  +booking: ?{|
    +type: ?BookingType,
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
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isPastBooking",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "directAccessURL",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
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
    v7
  ]
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": [
    v8,
    v9
  ]
},
v11 = [
  v8
],
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trip",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": [
    v10,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": v11
    }
  ]
},
v13 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v11
  }
],
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trips",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": true,
  "selections": v13
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "end",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v11
},
v16 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "start",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": [
    v9
  ]
},
v17 = {
  "kind": "InlineFragment",
  "type": "BookingMulticity",
  "selections": [
    v14,
    v15,
    v16
  ]
},
v18 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "outbound",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": [
    v10
  ]
},
v19 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "inbound",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": v13
},
v20 = {
  "kind": "InlineFragment",
  "type": "BookingReturn",
  "selections": [
    v18,
    v19
  ]
},
v21 = {
  "kind": "InlineFragment",
  "type": "BookingOneWay",
  "selections": [
    v12
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MobileSelectedBookingQuery",
  "id": null,
  "text": "query MobileSelectedBookingQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    type\n    oneWay {\n      ...MobileBookingDetail_booking\n      id\n    }\n    return {\n      ...MobileBookingDetail_booking\n      id\n    }\n    multicity {\n      ...MobileBookingDetail_booking\n      id\n    }\n    id\n  }\n}\n\nfragment MobileBookingDetail_booking on BookingInterface {\n  type\n  databaseId\n  isPastBooking\n  directAccessURL\n  ... on BookingOneWay {\n    ...OneWayTrip_booking\n    trip {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingReturn {\n    ...ReturnTrip_booking\n    outbound {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingMulticity {\n    ...MultiCityTrip_booking\n    start {\n      time\n    }\n  }\n}\n\nfragment OneWayTrip_booking on BookingOneWay {\n  trip {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment ReturnTrip_booking on BookingReturn {\n  outbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  inbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment MultiCityTrip_booking on BookingMulticity {\n  trips {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  end {\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n}\n",
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
            "name": "oneWay",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingOneWay",
            "plural": false,
            "selections": [
              v2,
              v4,
              v5,
              v6,
              v12,
              v7,
              v17,
              v20
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
              v4,
              v5,
              v6,
              v18,
              v19,
              v7,
              v17,
              v21
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
              v4,
              v5,
              v6,
              v14,
              v15,
              v16,
              v7,
              v20,
              v21
            ]
          },
          v7
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '0b61860da61d6f8291393526b829c0ee';
module.exports = node;
