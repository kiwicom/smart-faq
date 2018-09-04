/**
 * @flow
 * @relayHash 352a0dda8276bead1ca17304589ee94d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type GuaranteeNeededResolver_upcomingLeg$ref = any;
type HasBooking_booking$ref = any;
export type BookingStateWrapperSelectedQueryVariables = {|
  id: string,
|};
export type BookingStateWrapperSelectedQueryResponse = {|
  +booking: ?{|
    +id: string,
    +upcomingLeg: ?{|
      +$fragmentRefs: GuaranteeNeededResolver_upcomingLeg$ref,
    |},
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
    upcomingLeg {
      ...GuaranteeNeededResolver_upcomingLeg
      id
    }
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

fragment GuaranteeNeededResolver_upcomingLeg on Leg {
  arrival {
    time
  }
  departure {
    time
  }
  guarantee
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
  isPastBooking
  trip {
    departure {
      time
    }
  }
}

fragment ReturnTripWrapper_booking on BookingReturn {
  isPastBooking
  outbound {
    departure {
      time
    }
  }
}

fragment MultiCityTripWrapper_booking on BookingMulticity {
  isPastBooking
  trips {
    departure {
      time
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
v3 = [
  {
    "kind": "FragmentSpread",
    "name": "HasBooking_booking",
    "args": null
  }
],
v4 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  }
],
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v4
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isPastBooking",
  "args": null,
  "storageKey": null
},
v8 = [
  v5
],
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trip",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": v8
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trips",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": true,
  "selections": v8
},
v11 = {
  "kind": "InlineFragment",
  "type": "BookingMulticity",
  "selections": [
    v10
  ]
},
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "outbound",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": v8
},
v13 = {
  "kind": "InlineFragment",
  "type": "BookingReturn",
  "selections": [
    v12
  ]
},
v14 = {
  "kind": "InlineFragment",
  "type": "BookingOneWay",
  "selections": [
    v9
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookingStateWrapperSelectedQuery",
  "id": null,
  "text": "query BookingStateWrapperSelectedQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    id\n    upcomingLeg {\n      ...GuaranteeNeededResolver_upcomingLeg\n      id\n    }\n    oneWay {\n      ...HasBooking_booking\n      id\n    }\n    return {\n      ...HasBooking_booking\n      id\n    }\n    multicity {\n      ...HasBooking_booking\n      id\n    }\n  }\n}\n\nfragment GuaranteeNeededResolver_upcomingLeg on Leg {\n  arrival {\n    time\n  }\n  departure {\n    time\n  }\n  guarantee\n}\n\nfragment HasBooking_booking on BookingInterface {\n  type\n  isPastBooking\n  ... on BookingOneWay {\n    ...OneWayTripWrapper_booking\n  }\n  ... on BookingReturn {\n    ...ReturnTripWrapper_booking\n  }\n  ... on BookingMulticity {\n    ...MultiCityTripWrapper_booking\n  }\n}\n\nfragment OneWayTripWrapper_booking on BookingOneWay {\n  isPastBooking\n  trip {\n    departure {\n      time\n    }\n  }\n}\n\nfragment ReturnTripWrapper_booking on BookingReturn {\n  isPastBooking\n  outbound {\n    departure {\n      time\n    }\n  }\n}\n\nfragment MultiCityTripWrapper_booking on BookingMulticity {\n  isPastBooking\n  trips {\n    departure {\n      time\n    }\n  }\n}\n",
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
              v5,
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
            "kind": "LinkedField",
            "alias": null,
            "name": "oneWay",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingOneWay",
            "plural": false,
            "selections": [
              v6,
              v7,
              v9,
              v2,
              v11,
              v13
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
              v6,
              v7,
              v12,
              v2,
              v11,
              v14
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
              v6,
              v7,
              v10,
              v2,
              v13,
              v14
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'd9ddf8557b60aa2c9061a81ce00b6847';
module.exports = node;
