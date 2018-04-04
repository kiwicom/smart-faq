/**
 * @flow
 * @relayHash 135167955226ea839f759915e4d79436
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FAQCategory_category$ref = any;
export type FAQCategoryListRootQueryVariables = {| |};
export type FAQCategoryListRootQueryResponse = {|
  +allFAQCategories: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: FAQCategory_category$ref,
      |},
    |}>,
  |},
|};
*/


/*
query FAQCategoryListRootQuery {
  allFAQCategories(language: en) {
    edges {
      node {
        id
        ...FAQCategory_category
      }
    }
  }
}

fragment FAQCategory_category on FAQCategory {
  id
  title
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "language",
    "value": "en",
    "type": "Language"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FAQCategoryListRootQuery",
  "id": null,
  "text": "query FAQCategoryListRootQuery {\n  allFAQCategories(language: en) {\n    edges {\n      node {\n        id\n        ...FAQCategory_category\n      }\n    }\n  }\n}\n\nfragment FAQCategory_category on FAQCategory {\n  id\n  title\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FAQCategoryListRootQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFAQCategories",
        "storageKey": "allFAQCategories(language:\"en\")",
        "args": v0,
        "concreteType": "FAQCategoryConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQCategoryEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "FAQCategory",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "FragmentSpread",
                    "name": "FAQCategory_category",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FAQCategoryListRootQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFAQCategories",
        "storageKey": "allFAQCategories(language:\"en\")",
        "args": v0,
        "concreteType": "FAQCategoryConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQCategoryEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "FAQCategory",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '28df0b5abaffe8be6871bbc2b2d1eba9';
module.exports = node;
