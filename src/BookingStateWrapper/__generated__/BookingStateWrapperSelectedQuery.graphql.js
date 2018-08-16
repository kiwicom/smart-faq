/**
 * @flow
 * @relayHash b0218f4437512b15de6e8f468dd3c0ef
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HasBooking_booking$ref = any;
export type BookingStateWrapperSelectedQueryVariables = {|
  id: string,
|};
export type BookingStateWrapperSelectedQueryResponse = {|
  +node: ?{|
    +id: string,
    +$fragmentRefs: HasBooking_booking$ref,
  |},
|};
*/


/*
query BookingStateWrapperSelectedQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    id
    ...HasBooking_booking
  }
}

fragment HasBooking_booking on BookingInterface {
  type
  isPastBooking
  ... on BookingOneWay {
    ...OneWayTripWrapper_booking
    trip {
      departure {
        time
      }
    }
  }
  ... on BookingReturn {
    ...ReturnTripWrapper_booking
    outbound {
      departure {
        time
      }
    }
  }
  ... on BookingMulticity {
    ...MultiCityTripWrapper_booking
    start {
      time
    }
  }
}

fragment OneWayTripWrapper_booking on BookingOneWay {
  trip {
    departure {
      time
    }
  }
}

fragment ReturnTripWrapper_booking on BookingReturn {
  outbound {
    departure {
      time
    }
  }
}

fragment MultiCityTripWrapper_booking on BookingMulticity {
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
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  }
],
v4 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v3
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookingStateWrapperSelectedQuery",
  "id": null,
  "text": "query BookingStateWrapperSelectedQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    id\n    ...HasBooking_booking\n  }\n}\n\nfragment HasBooking_booking on BookingInterface {\n  type\n  isPastBooking\n  ... on BookingOneWay {\n    ...OneWayTripWrapper_booking\n    trip {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingReturn {\n    ...ReturnTripWrapper_booking\n    outbound {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingMulticity {\n    ...MultiCityTripWrapper_booking\n    start {\n      time\n    }\n  }\n}\n\nfragment OneWayTripWrapper_booking on BookingOneWay {\n  trip {\n    departure {\n      time\n    }\n  }\n}\n\nfragment ReturnTripWrapper_booking on BookingReturn {\n  outbound {\n    departure {\n      time\n    }\n  }\n}\n\nfragment MultiCityTripWrapper_booking on BookingMulticity {\n  trips {\n    departure {\n      time\n    }\n  }\n}\n",
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
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "FragmentSpread",
            "name": "HasBooking_booking",
            "args": null
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
        "name": "node",
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
                "selections": v3
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
                "selections": v4
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
(node/*: any*/).hash = '169c1e07e962dcc9c6a2376309c23e24';
module.exports = node;
