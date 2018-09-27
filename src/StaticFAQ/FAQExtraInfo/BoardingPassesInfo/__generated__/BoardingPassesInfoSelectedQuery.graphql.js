/**
 * @flow
 * @relayHash 7b4ad4c04dfab50f214d77afa6db68bf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BoardingPassesSummary$ref = any;
export type BoardingPassesInfoSelectedQueryVariables = {|
  id: string,
|};
export type BoardingPassesInfoSelectedQueryResponse = {|
  +booking: ?{|
    +assets: ?{|
      +$fragmentRefs: BoardingPassesSummary$ref,
    |},
    +directAccessURL: ?string,
  |},
|};
*/


/*
query BoardingPassesInfoSelectedQuery(
  $id: ID!
) {
  booking(id: $id) {
    assets {
      ...BoardingPassesSummary
    }
    directAccessURL
    id
  }
}

fragment BoardingPassesSummary on BookingAssets {
  boardingPasses {
    flightNumber
    leg {
      departure {
        time
      }
      id
    }
    ...BoardingPassesDescription
  }
}

fragment BoardingPassesDescription on BoardingPass {
  flightNumber
  boardingPassUrl
  availableAt
  availabilityStatus
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
  "name": "directAccessURL",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
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
    v3
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BoardingPassesInfoSelectedQuery",
  "id": null,
  "text": "query BoardingPassesInfoSelectedQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    assets {\n      ...BoardingPassesSummary\n    }\n    directAccessURL\n    id\n  }\n}\n\nfragment BoardingPassesSummary on BookingAssets {\n  boardingPasses {\n    flightNumber\n    leg {\n      departure {\n        time\n      }\n      id\n    }\n    ...BoardingPassesDescription\n  }\n}\n\nfragment BoardingPassesDescription on BoardingPass {\n  flightNumber\n  boardingPassUrl\n  availableAt\n  availabilityStatus\n  leg {\n    id\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BoardingPassesInfoSelectedQuery",
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
          },
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BoardingPassesInfoSelectedQuery",
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "leg",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Leg",
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
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "time",
                            "args": null,
                            "storageKey": null
                          },
                          v4
                        ]
                      },
                      v3,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "arrival",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": [
                          v4
                        ]
                      }
                    ]
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "availabilityStatus",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          v2,
          v3
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'a06e78338e090a6947999085dbf864ba';
module.exports = node;
