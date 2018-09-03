/**
 * @flow
 * @relayHash 1083252d14edaaef63ea2eddc034d7d1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FAQArticle_article$ref = any;
type FAQCategory_category$ref = any;
export type FAQSection = ('BEFORE_BOOKING' | 'PAST_BOOKING' | 'UPCOMING_BOOKING' | 'URGENT_BOOKING' | '%future added value');
export type FAQCategoryListRootQueryVariables = {|
  section?: ?FAQSection,
  articleId: string,
  showGuaranteeArticle: boolean,
|};
export type FAQCategoryListRootQueryResponse = {|
  +FAQArticle?: ?{|
    +$fragmentRefs: FAQArticle_article$ref,
  |},
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
  $articleId: ID!
  $showGuaranteeArticle: Boolean!
) {
  FAQArticle(id: $articleId) @include(if: $showGuaranteeArticle) {
    ...FAQArticle_article
    id
  }
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

fragment FAQArticle_article on FAQArticle {
  id
  title
  perex
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
  },
  {
    "kind": "LocalArgument",
    "name": "articleId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "showGuaranteeArticle",
    "type": "Boolean!",
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
},
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "articleId",
    "type": "ID!"
  }
],
v5 = [
  v2,
  v3,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "perex",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FAQCategoryListRootQuery",
  "id": null,
  "text": "query FAQCategoryListRootQuery(\n  $section: FAQSection\n  $articleId: ID!\n  $showGuaranteeArticle: Boolean!\n) {\n  FAQArticle(id: $articleId) @include(if: $showGuaranteeArticle) {\n    ...FAQArticle_article\n    id\n  }\n  allFAQCategories(section: $section) {\n    edges {\n      node {\n        id\n        title\n        ...FAQCategory_category\n      }\n    }\n  }\n}\n\nfragment FAQArticle_article on FAQArticle {\n  id\n  title\n  perex\n}\n\nfragment FAQCategory_category on FAQCategory {\n  id\n  title\n  perex\n}\n",
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
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "showGuaranteeArticle",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "FAQArticle",
            "storageKey": null,
            "args": v4,
            "concreteType": "FAQArticle",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "FAQArticle_article",
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
                "selections": v5
              }
            ]
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "showGuaranteeArticle",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "FAQArticle",
            "storageKey": null,
            "args": v4,
            "concreteType": "FAQArticle",
            "plural": false,
            "selections": v5
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '85b8b8b0e56f289906f5a5e131a6fa96';
module.exports = node;
