/**
 * @flow
 * @relayHash fbd25370b3fde427bb1a4a09afb3b4e8
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
    +unstable_baggage: ?$ReadOnlyArray<?{|
      +$fragmentRefs: BaggageSummary$ref,
    |}>,
  |},
|};
*/


/*
query BaggageInfoSelectedQuery(
  $id: ID!
) {
  booking(id: $id) {
    directAccessURL
    unstable_baggage {
      ...BaggageSummary
    }
    id
  }
}

fragment BaggageSummary on BookingBaggage {
  ...BaggageDescription
}

fragment BaggageDescription on BookingBaggage {
  bag {
    height
    weight
    width
    length
    note
    category
  }
  quantity
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BaggageInfoSelectedQuery",
  "id": null,
  "text": "query BaggageInfoSelectedQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    directAccessURL\n    unstable_baggage {\n      ...BaggageSummary\n    }\n    id\n  }\n}\n\nfragment BaggageSummary on BookingBaggage {\n  ...BaggageDescription\n}\n\nfragment BaggageDescription on BookingBaggage {\n  bag {\n    height\n    weight\n    width\n    length\n    note\n    category\n  }\n  quantity\n}\n",
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
            "name": "unstable_baggage",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingBaggage",
            "plural": true,
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
            "name": "unstable_baggage",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingBaggage",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "bag",
                "storageKey": null,
                "args": null,
                "concreteType": "Baggage",
                "plural": false,
                "selections": [
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "note",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "category",
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
(node/*: any*/).hash = '95e3036e4c4c8a35bcc2fa5ad4301662';
module.exports = node;
