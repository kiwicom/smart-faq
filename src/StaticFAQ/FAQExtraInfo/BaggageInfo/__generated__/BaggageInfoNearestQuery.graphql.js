/**
 * @flow
 * @relayHash cafa2983694c84f346da9e1d5840f71e
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
    +allowedBaggage: ?{|
      +$fragmentRefs: BaggageSummary$ref,
    |},
  |},
|};
*/


/*
query BaggageInfoNearestQuery {
  nearestBooking {
    __typename
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "directAccessURL",
  "args": null,
  "storageKey": null
},
v1 = [
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
  "name": "BaggageInfoNearestQuery",
  "id": null,
  "text": "query BaggageInfoNearestQuery {\n  nearestBooking {\n    __typename\n    directAccessURL\n    allowedBaggage {\n      ...BaggageSummary\n    }\n    id\n  }\n}\n\nfragment BaggageSummary on AllowedBaggage {\n  checked {\n    ...BaggageDescription\n  }\n  cabin {\n    ...BaggageDescription\n  }\n}\n\nfragment BaggageDescription on Baggage {\n  height\n  weight\n  width\n  length\n}\n",
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
                "selections": v1
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "cabin",
                "storageKey": null,
                "args": null,
                "concreteType": "Baggage",
                "plural": true,
                "selections": v1
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
(node/*: any*/).hash = 'd627cbd49b0462f965c93de285f0172c';
module.exports = node;
