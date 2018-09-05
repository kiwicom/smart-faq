/**
 * @flow
 * @relayHash 66a9cd541bfe91ee76b16703f26718cd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BookingDetail_booking$ref = any;
type GuaranteeNeededResolver_upcomingLeg$ref = any;
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
export type SelectedBookingQueryVariables = {|
  id: string,
|};
export type SelectedBookingQueryResponse = {|
  +booking: ?{|
    +type: ?BookingType,
    +upcomingLeg: ?{|
      +$fragmentRefs: GuaranteeNeededResolver_upcomingLeg$ref,
    |},
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
    upcomingLeg {
      ...GuaranteeNeededResolver_upcomingLeg
      id
    }
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

fragment GuaranteeNeededResolver_upcomingLeg on Leg {
  arrival {
    time
  }
  departure {
    time
  }
  guarantee
}

fragment BookingDetail_booking on BookingInterface {
  type
  status
  assets {
    ticketUrl
  }
  directAccessURL
  isPastBooking
  ...Header_booking
  ... on BookingOneWay {
    ...OneWayTrip_booking
    trip {
      departure {
        time
      }
      arrival {
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
    inbound {
      arrival {
        time
      }
    }
  }
  ... on BookingMulticity {
    ...MulticityOverlayTrip_booking
    start {
      time
    }
    end {
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

fragment OneWayTrip_booking on BookingOneWay {
  trip {
    ...AccordionTripSummary_trip
  }
}

fragment ReturnTrip_booking on BookingReturn {
  outbound {
    ...AccordionTripSummary_trip
  }
  inbound {
    ...AccordionTripSummary_trip
  }
}

fragment MulticityOverlayTrip_booking on BookingMulticity {
  trips {
    duration
  }
  ...MulticityTrip_booking
}

fragment MulticityTrip_booking on BookingMulticity {
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
      id
    }
  }
  arrival {
    airport {
      locationId
      city {
        name
      }
      id
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
  ...AccordionLegTypeIcon_leg
  arrival {
    time
    localTime
  }
  departure {
    time
    localTime
  }
}

fragment AccordionBodyLeg_nextLeg on Leg {
  departure {
    time
  }
}

fragment AccordionBodyLastLeg_leg on Leg {
  ...AccordionLegCities_leg
  ...AccordionLegTypeIcon_leg
  departure {
    localTime
  }
}

fragment AccordionLegCities_leg on Leg {
  ...AccordionLegCitiesInfo_leg
  type
  duration
  airline {
    code
    name
  }
  arrival {
    localTime
    airport {
      locationId
      city {
        name
      }
      id
    }
  }
  departure {
    localTime
    airport {
      locationId
      city {
        name
      }
      id
    }
  }
}

fragment AccordionLegTypeIcon_leg on Leg {
  type
}

fragment AccordionLegCitiesInfo_leg on Leg {
  type
  airline {
    code
    name
  }
  operatingAirline {
    iata
    name
  }
  flightNumber
  vehicle {
    manufacturer
    model
  }
  pnr
  departure {
    airport {
      name
      id
    }
  }
  arrival {
    airport {
      name
      id
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

fragment Return_bookingHeader on BookingReturn {
  outbound {
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

fragment Multicity_bookingHeader on BookingMulticity {
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
    "name": "BookingDetail_booking",
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
  "name": "status",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "assets",
  "storageKey": null,
  "args": null,
  "concreteType": "BookingAssets",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "ticketUrl",
      "args": null,
      "storageKey": null
    }
  ]
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "directAccessURL",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isPastBooking",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "city",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    v12
  ]
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "locationId",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "airport",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
    v13,
    v6,
    v14
  ]
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localTime",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": [
    v15,
    v16,
    v4
  ]
},
v18 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      v12,
      v6,
      v14,
      v13
    ]
  },
  v16,
  v4
],
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v20 = {
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
        v12,
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
    v2,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "operatingAirline",
      "storageKey": null,
      "args": null,
      "concreteType": "OperatingAirline",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "iata",
          "args": null,
          "storageKey": null
        },
        v12
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
          "name": "manufacturer",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "model",
          "args": null,
          "storageKey": null
        }
      ]
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
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": v18
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": v18
    },
    v19,
    v6
  ]
},
v21 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trip",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": [
    v17,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        v15,
        v4
      ]
    },
    v20
  ]
},
v22 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "airport",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
    v14,
    v13,
    v6
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
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        v15,
        v16
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
        v22
      ]
    },
    v20
  ]
},
v24 = {
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
        v13,
        v6
      ]
    },
    v4
  ]
},
v25 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trips",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": true,
  "selections": [
    v19
  ]
},
v26 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "start",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v5
},
v27 = {
  "kind": "InlineFragment",
  "type": "BookingMulticity",
  "selections": [
    v23,
    v24,
    v25,
    v26
  ]
},
v28 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "outbound",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": [
    v17,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        v15
      ]
    },
    v20
  ]
},
v29 = {
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
        v16,
        v22
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
        v22,
        v4
      ]
    },
    v20
  ]
},
v30 = {
  "kind": "InlineFragment",
  "type": "BookingReturn",
  "selections": [
    v28,
    v29
  ]
},
v31 = {
  "kind": "InlineFragment",
  "type": "BookingOneWay",
  "selections": [
    v21
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SelectedBookingQuery",
  "id": null,
  "text": "query SelectedBookingQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    type\n    upcomingLeg {\n      ...GuaranteeNeededResolver_upcomingLeg\n      id\n    }\n    oneWay {\n      ...BookingDetail_booking\n      id\n    }\n    return {\n      ...BookingDetail_booking\n      id\n    }\n    multicity {\n      ...BookingDetail_booking\n      id\n    }\n    id\n  }\n}\n\nfragment GuaranteeNeededResolver_upcomingLeg on Leg {\n  arrival {\n    time\n  }\n  departure {\n    time\n  }\n  guarantee\n}\n\nfragment BookingDetail_booking on BookingInterface {\n  type\n  status\n  assets {\n    ticketUrl\n  }\n  directAccessURL\n  isPastBooking\n  ...Header_booking\n  ... on BookingOneWay {\n    ...OneWayTrip_booking\n    trip {\n      departure {\n        time\n      }\n      arrival {\n        time\n      }\n    }\n  }\n  ... on BookingReturn {\n    ...ReturnTrip_booking\n    outbound {\n      departure {\n        time\n      }\n    }\n    inbound {\n      arrival {\n        time\n      }\n    }\n  }\n  ... on BookingMulticity {\n    ...MulticityOverlayTrip_booking\n    start {\n      time\n    }\n    end {\n      time\n    }\n  }\n}\n\nfragment Header_booking on BookingInterface {\n  type\n  status\n  databaseId\n  ...OneWay_bookingHeader\n  ...Return_bookingHeader\n  ...Multicity_bookingHeader\n}\n\nfragment OneWayTrip_booking on BookingOneWay {\n  trip {\n    ...AccordionTripSummary_trip\n  }\n}\n\nfragment ReturnTrip_booking on BookingReturn {\n  outbound {\n    ...AccordionTripSummary_trip\n  }\n  inbound {\n    ...AccordionTripSummary_trip\n  }\n}\n\nfragment MulticityOverlayTrip_booking on BookingMulticity {\n  trips {\n    duration\n  }\n  ...MulticityTrip_booking\n}\n\nfragment MulticityTrip_booking on BookingMulticity {\n  trips {\n    ...AccordionTripSummary_trip\n  }\n}\n\nfragment AccordionTripSummary_trip on Trip {\n  departure {\n    localTime\n    airport {\n      locationId\n      city {\n        name\n      }\n      id\n    }\n  }\n  arrival {\n    airport {\n      locationId\n      city {\n        name\n      }\n      id\n    }\n  }\n  legs {\n    airline {\n      name\n      code\n      logoUrl\n    }\n    ...CarrierLogoWrapper_legs\n    ...AccordionBody_legs\n    id\n  }\n}\n\nfragment CarrierLogoWrapper_legs on Leg {\n  airline {\n    name\n    code\n  }\n}\n\nfragment AccordionBody_legs on Leg {\n  flightNumber\n  ...AccordionBodyLeg_leg\n  ...AccordionBodyLeg_nextLeg\n  ...AccordionBodyLastLeg_leg\n}\n\nfragment AccordionBodyLeg_leg on Leg {\n  ...AccordionLegCities_leg\n  ...AccordionLegTypeIcon_leg\n  arrival {\n    time\n    localTime\n  }\n  departure {\n    time\n    localTime\n  }\n}\n\nfragment AccordionBodyLeg_nextLeg on Leg {\n  departure {\n    time\n  }\n}\n\nfragment AccordionBodyLastLeg_leg on Leg {\n  ...AccordionLegCities_leg\n  ...AccordionLegTypeIcon_leg\n  departure {\n    localTime\n  }\n}\n\nfragment AccordionLegCities_leg on Leg {\n  ...AccordionLegCitiesInfo_leg\n  type\n  duration\n  airline {\n    code\n    name\n  }\n  arrival {\n    localTime\n    airport {\n      locationId\n      city {\n        name\n      }\n      id\n    }\n  }\n  departure {\n    localTime\n    airport {\n      locationId\n      city {\n        name\n      }\n      id\n    }\n  }\n}\n\nfragment AccordionLegTypeIcon_leg on Leg {\n  type\n}\n\nfragment AccordionLegCitiesInfo_leg on Leg {\n  type\n  airline {\n    code\n    name\n  }\n  operatingAirline {\n    iata\n    name\n  }\n  flightNumber\n  vehicle {\n    manufacturer\n    model\n  }\n  pnr\n  departure {\n    airport {\n      name\n      id\n    }\n  }\n  arrival {\n    airport {\n      name\n      id\n    }\n  }\n}\n\nfragment OneWay_bookingHeader on BookingOneWay {\n  trip {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment Return_bookingHeader on BookingReturn {\n  outbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment Multicity_bookingHeader on BookingMulticity {\n  trips {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  end {\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n}\n",
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
              v10,
              v11,
              v21,
              v6,
              v27,
              v30
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
              v11,
              v2,
              v8,
              v9,
              v10,
              v7,
              v29,
              v28,
              v6,
              v31,
              v27
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
              v6,
              v8,
              v9,
              v10,
              v11,
              v7,
              v26,
              v23,
              v24,
              v25,
              v31,
              v30
            ]
          },
          v6
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '550eab6521b65e4bd9d518932489d8e8';
module.exports = node;
