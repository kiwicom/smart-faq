/**
 * @flow
 * @relayHash 54380d9a760ba4fb1a39add2646e1754
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HasBooking_booking$ref = any;
type MultiCityTripWrapper_booking$ref = any;
type OneWayTripWrapper_booking$ref = any;
type ReturnTripWrapper_booking$ref = any;
export type BookingStateWrapperNearestQueryVariables = {| |};
export type BookingStateWrapperNearestQueryResponse = {|
  +nearestBooking: ?{|
    +id: string,
    +databaseId: ?number,
    +$fragmentRefs: (HasBooking_booking$ref & OneWayTripWrapper_booking$ref & ReturnTripWrapper_booking$ref & MultiCityTripWrapper_booking$ref),
  |},
|};
*/


/*
query BookingStateWrapperNearestQuery {
  nearestBooking {
    __typename
    id
    databaseId
    ...HasBooking_booking
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
  databaseId
  trip {
    departure {
      time
    }
  }
}

fragment ReturnTripWrapper_booking on BookingReturn {
  isPastBooking
  databaseId
  outbound {
    departure {
      time
    }
  }
}

fragment MultiCityTripWrapper_booking on BookingMulticity {
  isPastBooking
  databaseId
  trips {
    departure {
      time
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v2 = [
  {
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
        "name": "time",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookingStateWrapperNearestQuery",
  "id": null,
  "text": "query BookingStateWrapperNearestQuery {\n  nearestBooking {\n    __typename\n    id\n    databaseId\n    ...HasBooking_booking\n    ... on BookingOneWay {\n      ...OneWayTripWrapper_booking\n    }\n    ... on BookingReturn {\n      ...ReturnTripWrapper_booking\n    }\n    ... on BookingMulticity {\n      ...MultiCityTripWrapper_booking\n    }\n  }\n}\n\nfragment HasBooking_booking on BookingInterface {\n  type\n  isPastBooking\n  ... on BookingOneWay {\n    ...OneWayTripWrapper_booking\n  }\n  ... on BookingReturn {\n    ...ReturnTripWrapper_booking\n  }\n  ... on BookingMulticity {\n    ...MultiCityTripWrapper_booking\n  }\n}\n\nfragment OneWayTripWrapper_booking on BookingOneWay {\n  isPastBooking\n  databaseId\n  trip {\n    departure {\n      time\n    }\n  }\n}\n\nfragment ReturnTripWrapper_booking on BookingReturn {\n  isPastBooking\n  databaseId\n  outbound {\n    departure {\n      time\n    }\n  }\n}\n\nfragment MultiCityTripWrapper_booking on BookingMulticity {\n  isPastBooking\n  databaseId\n  trips {\n    departure {\n      time\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookingStateWrapperNearestQuery",
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
          v0,
          v1,
          {
            "kind": "FragmentSpread",
            "name": "HasBooking_booking",
            "args": null
          },
          {
            "kind": "InlineFragment",
            "type": "BookingMulticity",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "MultiCityTripWrapper_booking",
                "args": null
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingReturn",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "ReturnTripWrapper_booking",
                "args": null
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingOneWay",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "OneWayTripWrapper_booking",
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
    "name": "BookingStateWrapperNearestQuery",
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
          v0,
          v1,
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
            "name": "isPastBooking",
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
                "selections": v2
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'f3bfd4b66cce1f6c398ffc2f8dce4716';
module.exports = node;
