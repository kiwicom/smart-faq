/**
 * @flow
 * @relayHash 7617e465eeb7aa056efe1634774bf6b8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FAQArticle_article$ref = any;
type FAQCategory_category$ref = any;
export type FAQSection = ('BEFORE_BOOKING' | 'PAST_BOOKING' | 'UPCOMING_BOOKING' | 'URGENT_BOOKING' | '%future added value');
export type FAQCategoryListRootQueryVariables = {|
  section: FAQSection,
  articleId: string,
  showGuaranteeArticle: boolean,
|};
export type FAQCategoryListRootQueryResponse = {|
  +FAQArticle?: ?{|
    +$fragmentRefs: FAQArticle_article$ref,
  |},
  +FAQSection: ?{|
    +id: string,
    +subcategories: ?$ReadOnlyArray<?{|
      +id: string,
      +title: ?string,
      +$fragmentRefs: FAQCategory_category$ref,
    |}>,
    +FAQs: ?$ReadOnlyArray<?{|
      +id: string,
      +$fragmentRefs: FAQArticle_article$ref,
    |}>,
  |},
|};
*/


/*
query FAQCategoryListRootQuery(
  $section: FAQSection!
  $articleId: ID!
  $showGuaranteeArticle: Boolean!
) {
  FAQArticle(id: $articleId) @include(if: $showGuaranteeArticle) {
    ...FAQArticle_article
    id
  }
  FAQSection(section: $section) {
    id
    subcategories {
      id
      title
      ...FAQCategory_category
    }
    FAQs {
      id
      ...FAQArticle_article
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
    "type": "FAQSection!",
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
    "type": "FAQSection!"
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
v4 = {
  "kind": "FragmentSpread",
  "name": "FAQArticle_article",
  "args": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "articleId",
    "type": "ID!"
  }
],
v6 = [
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
  "text": "query FAQCategoryListRootQuery(\n  $section: FAQSection!\n  $articleId: ID!\n  $showGuaranteeArticle: Boolean!\n) {\n  FAQArticle(id: $articleId) @include(if: $showGuaranteeArticle) {\n    ...FAQArticle_article\n    id\n  }\n  FAQSection(section: $section) {\n    id\n    subcategories {\n      id\n      title\n      ...FAQCategory_category\n    }\n    FAQs {\n      id\n      ...FAQArticle_article\n    }\n  }\n}\n\nfragment FAQArticle_article on FAQArticle {\n  id\n  title\n  perex\n}\n\nfragment FAQCategory_category on FAQCategory {\n  id\n  title\n  perex\n}\n",
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
        "name": "FAQSection",
        "storageKey": null,
        "args": v1,
        "concreteType": "FAQCategory",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subcategories",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQCategory",
            "plural": true,
            "selections": [
              v2,
              v3,
              {
                "kind": "FragmentSpread",
                "name": "FAQCategory_category",
                "args": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "FAQs",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQArticle",
            "plural": true,
            "selections": [
              v2,
              v4
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
            "args": v5,
            "concreteType": "FAQArticle",
            "plural": false,
            "selections": [
              v4
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
        "name": "FAQSection",
        "storageKey": null,
        "args": v1,
        "concreteType": "FAQCategory",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subcategories",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQCategory",
            "plural": true,
            "selections": v6
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "FAQs",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQArticle",
            "plural": true,
            "selections": v6
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
            "args": v5,
            "concreteType": "FAQArticle",
            "plural": false,
            "selections": v6
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'c99a67d790bf11ddc76d011343666a81';
module.exports = node;
