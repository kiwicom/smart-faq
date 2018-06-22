/**
 * @flow
 * @relayHash b7e0b29034be1dd3a8b20d0816142fc2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BaggageInfoQueryVariables = {|
  id: string,
|};
export type BaggageInfoQueryResponse = {|
  +booking: ?{|
    +allowedBaggage: ?{|
      +checked: ?$ReadOnlyArray<?{|
        +height: ?number,
        +length: ?number,
        +width: ?number,
        +weight: ?number,
      |}>,
      +cabin: ?$ReadOnlyArray<?{|
        +height: ?number,
        +length: ?number,
        +width: ?number,
        +weight: ?number,
      |}>,
      +additionalBaggage: ?$ReadOnlyArray<?{|
        +price: ?{|
          +amount: ?number,
          +currency: ?string,
        |},
        +quantity: ?number,
      |}>,
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
      checked {
        height
        length
        width
        weight
      }
      cabin {
        height
        length
        width
        weight
      }
      additionalBaggage {
        price {
          amount
          currency
        }
        quantity
      }
    }
    id
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
],
v3 = {
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
      "selections": v2
    },
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
      "name": "additionalBaggage",
      "storageKey": null,
      "args": null,
      "concreteType": "AdditionalBaggage",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "price",
          "storageKey": null,
          "args": null,
          "concreteType": "Price",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "amount",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "currency",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "quantity",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BaggageInfoQuery",
  "id": null,
  "text": "query BaggageInfoQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    allowedBaggage {\n      checked {\n        height\n        length\n        width\n        weight\n      }\n      cabin {\n        height\n        length\n        width\n        weight\n      }\n      additionalBaggage {\n        price {\n          amount\n          currency\n        }\n        quantity\n      }\n    }\n    id\n  }\n}\n",
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
          v3
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
          v3,
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
(node/*: any*/).hash = '5b0b13080cb2b836f95fc1678c781139';
module.exports = node;
