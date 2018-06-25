/**
 * @flow
 * @relayHash 01f5649a30b6167f1105a68de739f5c2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CabinBaggage$ref = any;
type CheckedBaggage$ref = any;
export type BaggageInfoQueryVariables = {|
  id: string,
|};
export type BaggageInfoQueryResponse = {|
  +booking: ?{|
    +allowedBaggage: ?{|
      +$fragmentRefs: (CabinBaggage$ref & CheckedBaggage$ref),
    |},
  |},
|};
*/


/*
query BaggageInfoQuery(
  $id: ID!
) {
  booking(id: $id) {
    allowedBaggage {
      ...CabinBaggage
      ...CheckedBaggage
    }
    id
  }
}

fragment CabinBaggage on AllowedBaggage {
  cabin {
    height
    length
    width
    weight
  }
}

fragment CheckedBaggage on AllowedBaggage {
  checked {
    height
    length
    width
    weight
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
v2 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "height",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "length",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "width",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "weight",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BaggageInfoQuery",
  "id": null,
  "text": "query BaggageInfoQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    allowedBaggage {\n      ...CabinBaggage\n      ...CheckedBaggage\n    }\n    id\n  }\n}\n\nfragment CabinBaggage on AllowedBaggage {\n  cabin {\n    height\n    length\n    width\n    weight\n  }\n}\n\nfragment CheckedBaggage on AllowedBaggage {\n  checked {\n    height\n    length\n    width\n    weight\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BaggageInfoQuery",
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
            "name": "allowedBaggage",
            "storageKey": null,
            "args": null,
            "concreteType": "AllowedBaggage",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "CabinBaggage",
                "args": null
              },
              {
                "kind": "FragmentSpread",
                "name": "CheckedBaggage",
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
    "name": "BaggageInfoQuery",
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
            "name": "allowedBaggage",
            "storageKey": null,
            "args": null,
            "concreteType": "AllowedBaggage",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "cabin",
                "storageKey": null,
                "args": null,
                "concreteType": "Baggage",
                "plural": true,
                "selections": v2
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "checked",
                "storageKey": null,
                "args": null,
                "concreteType": "Baggage",
                "plural": true,
                "selections": v2
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'f5e66622d5eb14974b1ab6f7afa2e70d';
module.exports = node;
