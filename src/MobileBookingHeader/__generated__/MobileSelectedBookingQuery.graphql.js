/**
 * @flow
 * @relayHash b1801aed34626141b6df89d53cdec236
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
  directAccessURL
  ...Contact_info
  ...Header_booking
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

fragment Contact_info on BookingInterface {
  contactDetails {
    phone
    email
  }
}

fragment Header_booking on BookingInterface {
  type
  status
  databaseId
  ...OneWay_bookingHeader
  ...Return_bookingHeader
  ...Multicity_bookingHeader
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

fragment OneWay_bookingHeader on BookingOneWay {
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

fragment Return_bookingHeader on BookingReturn {
  outbound {
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

fragment Multicity_bookingHeader on BookingMulticity {
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
  "name": "directAccessURL",
  "args": null,
  "storageKey": null
},
v6 = {
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
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v8 = [
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
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v8
},
v10 = [
  v9,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v8
  }
],
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trip",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": v10
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v13 = [
  v9
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
  "selections": v8
},
v16 = {
  "kind": "InlineFragment",
  "type": "BookingMulticity",
  "selections": [
    v14,
    v15
  ]
},
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "outbound",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": v10
},
v18 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "inbound",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": v13
},
v19 = {
  "kind": "InlineFragment",
  "type": "BookingReturn",
  "selections": [
    v17,
    v18
  ]
},
v20 = {
  "kind": "InlineFragment",
  "type": "BookingOneWay",
  "selections": [
    v11
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MobileSelectedBookingQuery",
  "id": null,
  "text": "query MobileSelectedBookingQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    type\n    oneWay {\n      ...MobileBookingDetail_booking\n      id\n    }\n    return {\n      ...MobileBookingDetail_booking\n      id\n    }\n    multicity {\n      ...MobileBookingDetail_booking\n      id\n    }\n    id\n  }\n}\n\nfragment MobileBookingDetail_booking on BookingInterface {\n  type\n  databaseId\n  directAccessURL\n  ...Contact_info\n  ...Header_booking\n  ... on BookingOneWay {\n    ...OneWayTrip_booking\n  }\n  ... on BookingReturn {\n    ...ReturnTrip_booking\n  }\n  ... on BookingMulticity {\n    ...MultiCityTrip_booking\n  }\n}\n\nfragment Contact_info on BookingInterface {\n  contactDetails {\n    phone\n    email\n  }\n}\n\nfragment Header_booking on BookingInterface {\n  type\n  status\n  databaseId\n  ...OneWay_bookingHeader\n  ...Return_bookingHeader\n  ...Multicity_bookingHeader\n}\n\nfragment OneWayTrip_booking on BookingOneWay {\n  trip {\n    departure {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n}\n\nfragment ReturnTrip_booking on BookingReturn {\n  outbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n  inbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n}\n\nfragment MultiCityTrip_booking on BookingMulticity {\n  trips {\n    departure {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n  end {\n    airport {\n      city {\n        name\n      }\n    }\n  }\n}\n\nfragment OneWay_bookingHeader on BookingOneWay {\n  trip {\n    departure {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n}\n\nfragment Return_bookingHeader on BookingReturn {\n  outbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n}\n\nfragment Multicity_bookingHeader on BookingMulticity {\n  trips {\n    departure {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n  end {\n    airport {\n      city {\n        name\n      }\n    }\n  }\n}\n",
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
              v7,
              v11,
              v12,
              v16,
              v19
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
              v7,
              v17,
              v18,
              v12,
              v16,
              v20
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
              v7,
              v14,
              v15,
              v12,
              v19,
              v20
            ]
          },
          v12
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '0b61860da61d6f8291393526b829c0ee';
module.exports = node;
