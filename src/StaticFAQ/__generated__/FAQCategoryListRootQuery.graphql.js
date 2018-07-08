/**
 * @flow
 * @relayHash 11d140b2da08939a51ed567964aa5d04
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FAQCategory_category$ref = any;
export type FAQSection = ('BEFORE_BOOKING' | 'PAST_BOOKING' | 'UPCOMING_BOOKING' | 'URGENT_BOOKING' | '%future added value');
export type FAQCategoryListRootQueryVariables = {|
  section?: ?FAQSection,
|};
export type FAQCategoryListRootQueryResponse = {|
  +allFAQCategories: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +title: ?string,
        +$fragmentRefs: FAQCategory_category$ref,
      |},
    |}>,
  |},
|};
*/


/*
query FAQCategoryListRootQuery(
  $section: FAQSection
) {
  allFAQCategories(section: $section) {
    edges {
      node {
        id
        title
        ...FAQCategory_category
      }
    }
  }
}

fragment FAQCategory_category on FAQCategory {
  id
  title
  perex
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "section",
    "type": "FAQSection",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "section",
    "variableName": "section",
    "type": "FAQSection"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FAQCategoryListRootQuery",
  "id": null,
  "text": "query FAQCategoryListRootQuery(\n  $section: FAQSection\n) {\n  allFAQCategories(section: $section) {\n    edges {\n      node {\n        id\n        title\n        ...FAQCategory_category\n      }\n    }\n  }\n}\n\nfragment FAQCategory_category on FAQCategory {\n  id\n  title\n  perex\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FAQCategoryListRootQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFAQCategories",
        "storageKey": null,
        "args": v1,
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
                  v2,
                  v3,
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
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFAQCategories",
        "storageKey": null,
        "args": v1,
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
                  v2,
                  v3,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "perex",
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
(node/*: any*/).hash = 'cfa6813e3c6e4a1128cae4d4d757cd29';
module.exports = node;
