/**
 * @flow
 * @relayHash f3f99f5b0a47fe6afd4e801b5d9d29b0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BookingDetail_booking$ref = any;
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
export type SelectedBookingQueryVariables = {|
  id: string,
|};
export type SelectedBookingQueryResponse = {|
  +booking: ?{|
    +type: ?BookingType,
    +oneWay: ?{|
      +$fragmentRefs: BookingDetail_booking$ref,
    |},
    +return: ?{|
      +$fragmentRefs: BookingDetail_booking$ref,
    |},
    +multicity: ?{|
      +$fragmentRefs: BookingDetail_booking$ref,
    |},
  |},
|};
*/


/*
query SelectedBookingQuery(
  $id: ID!
) {
  booking(id: $id) {
    type
    oneWay {
      ...BookingDetail_booking
      id
    }
    return {
      ...BookingDetail_booking
      id
    }
    multicity {
      ...BookingDetail_booking
      id
    }
    id
  }
}

fragment BookingDetail_booking on BookingInterface {
  type
  directAccessURL
  ...Header_booking
  ... on BookingOneWay {
    ...OneWay_booking
    trip {
      departure {
        time
      }
    }
  }
  ... on BookingReturn {
    ...Return_booking
    outbound {
      departure {
        time
      }
    }
  }
  ... on BookingMulticity {
    ...MulticityOverlay_booking
    start {
      time
    }
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

fragment OneWay_booking on BookingOneWay {
  trip {
    ...AccordionTripSummary_trip
  }
}

fragment Return_booking on BookingReturn {
  outbound {
    ...AccordionTripSummary_trip
  }
  inbound {
    ...AccordionTripSummary_trip
  }
}

fragment MulticityOverlay_booking on BookingMulticity {
  trips {
    duration
  }
  ...Multicity_booking
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
    airline {
      name
      code
      logoUrl
    }
    ...CarrierLogoWrapper_legs
    ...AccordionBody_legs
    id
  }
}

fragment CarrierLogoWrapper_legs on Leg {
  airline {
    name
    code
  }
}

fragment AccordionBody_legs on Leg {
  flightNumber
  ...AccordionBodyLeg_leg
  ...AccordionBodyLeg_nextLeg
  ...AccordionBodyLastLeg_leg
}

fragment AccordionBodyLeg_leg on Leg {
  ...AccordionLegCities_leg
  arrival {
    time
    localTime
  }
  departure {
    time
    localTime
  }
  type
}

fragment AccordionBodyLeg_nextLeg on Leg {
  departure {
    time
  }
}

fragment AccordionBodyLastLeg_leg on Leg {
  ...AccordionLegCities_leg
  departure {
    localTime
  }
  type
}

fragment AccordionLegCities_leg on Leg {
  duration
  airline {
    code
    name
  }
  arrival {
    localTime
    airport {
      locationId
      name
      city {
        name
      }
    }
  }
  departure {
    localTime
    airport {
      locationId
      name
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
    "name": "BookingDetail_booking",
    "args": null
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "directAccessURL",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "city",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    v7
  ]
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "locationId",
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
    v8,
    v9
  ]
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localTime",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v14 = [
  v11,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      v9,
      v7,
      v8
    ]
  },
  v12
],
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v16 = {
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
        v7,
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
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "flightNumber",
      "args": null,
      "storageKey": null
    },
    v13,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": v14
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": v14
    },
    v2,
    v15
  ]
},
v17 = [
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
      v11,
      v12
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": [
      v10
    ]
  },
  v16
],
v18 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trip",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": v17
},
v19 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "airport",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
    v9,
    v8
  ]
},
v20 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "arrival",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": [
    v19
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
        v11
      ]
    },
    v20,
    v16
  ]
},
v22 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "end",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "airport",
      "storageKey": null,
      "args": null,
      "concreteType": "Location",
      "plural": false,
      "selections": [
        v8
      ]
    }
  ]
},
v23 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trips",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": true,
  "selections": [
    v13
  ]
},
v24 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "start",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": [
    v12
  ]
},
v25 = {
  "kind": "InlineFragment",
  "type": "BookingMulticity",
  "selections": [
    v21,
    v22,
    v23,
    v24
  ]
},
v26 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "outbound",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": v17
},
v27 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "inbound",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        v11,
        v19
      ]
    },
    v20,
    v16
  ]
},
v28 = {
  "kind": "InlineFragment",
  "type": "BookingReturn",
  "selections": [
    v26,
    v27
  ]
},
v29 = {
  "kind": "InlineFragment",
  "type": "BookingOneWay",
  "selections": [
    v18
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SelectedBookingQuery",
  "id": null,
  "text": "query SelectedBookingQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    type\n    oneWay {\n      ...BookingDetail_booking\n      id\n    }\n    return {\n      ...BookingDetail_booking\n      id\n    }\n    multicity {\n      ...BookingDetail_booking\n      id\n    }\n    id\n  }\n}\n\nfragment BookingDetail_booking on BookingInterface {\n  type\n  directAccessURL\n  ...Header_booking\n  ... on BookingOneWay {\n    ...OneWay_booking\n    trip {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingReturn {\n    ...Return_booking\n    outbound {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingMulticity {\n    ...MulticityOverlay_booking\n    start {\n      time\n    }\n  }\n}\n\nfragment Header_booking on BookingInterface {\n  type\n  status\n  databaseId\n  ...OneWay_bookingHeader\n  ...Return_bookingHeader\n  ...Multicity_bookingHeader\n}\n\nfragment OneWay_booking on BookingOneWay {\n  trip {\n    ...AccordionTripSummary_trip\n  }\n}\n\nfragment Return_booking on BookingReturn {\n  outbound {\n    ...AccordionTripSummary_trip\n  }\n  inbound {\n    ...AccordionTripSummary_trip\n  }\n}\n\nfragment MulticityOverlay_booking on BookingMulticity {\n  trips {\n    duration\n  }\n  ...Multicity_booking\n}\n\nfragment Multicity_booking on BookingMulticity {\n  trips {\n    ...AccordionTripSummary_trip\n  }\n}\n\nfragment AccordionTripSummary_trip on Trip {\n  departure {\n    localTime\n    airport {\n      locationId\n      city {\n        name\n      }\n    }\n  }\n  arrival {\n    airport {\n      locationId\n      city {\n        name\n      }\n    }\n  }\n  legs {\n    airline {\n      name\n      code\n      logoUrl\n    }\n    ...CarrierLogoWrapper_legs\n    ...AccordionBody_legs\n    id\n  }\n}\n\nfragment CarrierLogoWrapper_legs on Leg {\n  airline {\n    name\n    code\n  }\n}\n\nfragment AccordionBody_legs on Leg {\n  flightNumber\n  ...AccordionBodyLeg_leg\n  ...AccordionBodyLeg_nextLeg\n  ...AccordionBodyLastLeg_leg\n}\n\nfragment AccordionBodyLeg_leg on Leg {\n  ...AccordionLegCities_leg\n  arrival {\n    time\n    localTime\n  }\n  departure {\n    time\n    localTime\n  }\n  type\n}\n\nfragment AccordionBodyLeg_nextLeg on Leg {\n  departure {\n    time\n  }\n}\n\nfragment AccordionBodyLastLeg_leg on Leg {\n  ...AccordionLegCities_leg\n  departure {\n    localTime\n  }\n  type\n}\n\nfragment AccordionLegCities_leg on Leg {\n  duration\n  airline {\n    code\n    name\n  }\n  arrival {\n    localTime\n    airport {\n      locationId\n      name\n      city {\n        name\n      }\n    }\n  }\n  departure {\n    localTime\n    airport {\n      locationId\n      name\n      city {\n        name\n      }\n    }\n  }\n}\n\nfragment OneWay_bookingHeader on BookingOneWay {\n  trip {\n    departure {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n}\n\nfragment Return_bookingHeader on BookingReturn {\n  outbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n}\n\nfragment Multicity_bookingHeader on BookingMulticity {\n  trips {\n    departure {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n  end {\n    airport {\n      city {\n        name\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SelectedBookingQuery",
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
    "name": "SelectedBookingQuery",
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
              v18,
              v15,
              v25,
              v28
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
              v26,
              v27,
              v15,
              v25,
              v29
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
              v15,
              v5,
              v6,
              v24,
              v4,
              v21,
              v22,
              v23,
              v28,
              v29
            ]
          },
          v15
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '199d0cdafd00027b7fbb2922e7793c41';
module.exports = node;
