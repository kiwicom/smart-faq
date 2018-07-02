/**
 * @flow
 * @relayHash 7b13e21d9e9f55116406dc5c0e5bb773
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BoardingPassesSummary$ref = any;
export type BoardingPassesInfoNearestQueryVariables = {| |};
export type BoardingPassesInfoNearestQueryResponse = {|
  +nearestBooking: ?{|
    +assets: ?{|
      +$fragmentRefs: BoardingPassesSummary$ref,
    |},
  |},
|};
*/


/*
query BoardingPassesInfoNearestQuery {
  nearestBooking {
    __typename
    assets {
      ...BoardingPassesSummary
    }
    id
  }
}

fragment BoardingPassesSummary on BookingAssets {
  boardingPasses {
    flightNumber
    ...BoardingPassesDescription
  }
}

fragment BoardingPassesDescription on BoardingPass {
  flightNumber
  boardingPassUrl
  availableAt
  leg {
    id
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
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
      },
      v0
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BoardingPassesInfoNearestQuery",
  "id": null,
  "text": "query BoardingPassesInfoNearestQuery {\n  nearestBooking {\n    __typename\n    assets {\n      ...BoardingPassesSummary\n    }\n    id\n  }\n}\n\nfragment BoardingPassesSummary on BookingAssets {\n  boardingPasses {\n    flightNumber\n    ...BoardingPassesDescription\n  }\n}\n\nfragment BoardingPassesDescription on BoardingPass {\n  flightNumber\n  boardingPassUrl\n  availableAt\n  leg {\n    id\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BoardingPassesInfoNearestQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "assets",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingAssets",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "BoardingPassesSummary",
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
    "name": "BoardingPassesInfoNearestQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "assets",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingAssets",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "boardingPasses",
                "storageKey": null,
                "args": null,
                "concreteType": "BoardingPass",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "flightNumber",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "boardingPassUrl",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "availableAt",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "leg",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Leg",
                    "plural": false,
                    "selections": [
                      v0,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "departure",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v1
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "arrival",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v1
                      }
                    ]
                  }
                ]
              }
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '4a2ef88de61f68e6a2c273b3926edf3a';
module.exports = node;
