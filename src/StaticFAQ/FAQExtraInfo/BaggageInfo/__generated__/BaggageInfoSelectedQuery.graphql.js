/**
 * @flow
 * @relayHash 4f7314356af3ca33ddc6ae9a14060e5e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BaggageSummary$ref = any;
export type BaggageInfoSelectedQueryVariables = {|
  id: string,
|};
export type BaggageInfoSelectedQueryResponse = {|
  +booking: ?{|
    +directAccessURL: ?string,
    +allowedBaggage: ?{|
      +$fragmentRefs: BaggageSummary$ref,
    |},
  |},
|};
*/


/*
query BaggageInfoSelectedQuery(
  $id: ID!
) {
  booking(id: $id) {
    directAccessURL
    allowedBaggage {
      ...BaggageSummary
    }
    id
  }
}

fragment BaggageSummary on AllowedBaggage {
  checked {
    ...BaggageDescription
  }
  cabin {
    ...BaggageDescription
  }
}

fragment BaggageDescription on Baggage {
  height
  weight
  width
  length
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
v3 = [
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
    "name": "weight",
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
    "name": "length",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BaggageInfoSelectedQuery",
  "id": null,
  "text": "query BaggageInfoSelectedQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    directAccessURL\n    allowedBaggage {\n      ...BaggageSummary\n    }\n    id\n  }\n}\n\nfragment BaggageSummary on AllowedBaggage {\n  checked {\n    ...BaggageDescription\n  }\n  cabin {\n    ...BaggageDescription\n  }\n}\n\nfragment BaggageDescription on Baggage {\n  height\n  weight\n  width\n  length\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BaggageInfoSelectedQuery",
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
            "name": "allowedBaggage",
            "storageKey": null,
            "args": null,
            "concreteType": "AllowedBaggage",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "BaggageSummary",
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
    "name": "BaggageInfoSelectedQuery",
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
            "name": "allowedBaggage",
            "storageKey": null,
            "args": null,
            "concreteType": "AllowedBaggage",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "checked",
                "storageKey": null,
                "args": null,
                "concreteType": "Baggage",
                "plural": true,
                "selections": v3
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "cabin",
                "storageKey": null,
                "args": null,
                "concreteType": "Baggage",
                "plural": true,
                "selections": v3
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
(node/*: any*/).hash = '01ff6b79634c9c1eecb4b35ad6a1cfbd';
module.exports = node;
