/**
 * @flow
 * @relayHash c0812b9a3e0dfee2d13ae7af3df97c96
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BaggageSummary$ref = any;
export type BaggageInfoNearestQueryVariables = {| |};
export type BaggageInfoNearestQueryResponse = {|
  +nearestBooking: ?{|
    +directAccessURL: ?string,
    +baggage: ?$ReadOnlyArray<?{|
      +$fragmentRefs: BaggageSummary$ref,
    |}>,
  |},
|};
*/


/*
query BaggageInfoNearestQuery {
  nearestBooking {
    __typename
    directAccessURL
    baggage {
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "directAccessURL",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BaggageInfoNearestQuery",
  "id": null,
  "text": "query BaggageInfoNearestQuery {\n  nearestBooking {\n    __typename\n    directAccessURL\n    baggage {\n      ...BaggageSummary\n    }\n    id\n  }\n}\n\nfragment BaggageSummary on BookingBaggage {\n  ...BaggageDescription\n}\n\nfragment BaggageDescription on BookingBaggage {\n  bag {\n    height\n    weight\n    width\n    length\n    note\n    category\n  }\n  quantity\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BaggageInfoNearestQuery",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "baggage",
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
    "name": "BaggageInfoNearestQuery",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "baggage",
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
(node/*: any*/).hash = 'b58687b4674efb232421ba2d23bd034b';
module.exports = node;
