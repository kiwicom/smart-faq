/**
 * @flow
 * @relayHash f5e7342d099a1dbb542b256362fd3195
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ArticleContent_article$ref = any;
export type ArticleDetailQueryVariables = {|
  id: string,
  categoryId: string,
  isSubcategory: boolean,
|};
export type ArticleDetailQueryResponse = {|
  +FAQArticle: ?{|
    +title: ?string,
    +$fragmentRefs: ArticleContent_article$ref,
  |},
  +FAQCategory?: ?{|
    +title: ?string,
    +id: string,
    +ancestors: ?$ReadOnlyArray<?{|
      +id: string,
      +title: ?string,
    |}>,
  |},
|};
*/


/*
query ArticleDetailQuery(
  $id: ID!
  $categoryId: ID!
  $isSubcategory: Boolean!
) {
  FAQArticle(id: $id) {
    title
    ...ArticleContent_article
    id
  }
  FAQCategory(id: $categoryId) @include(if: $isSubcategory) {
    title
    id
    ancestors {
      id
      title
    }
  }
}

fragment ArticleContent_article on FAQArticle {
  id
  title
  perex
  content
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "categoryId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isSubcategory",
    "type": "Boolean!",
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
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "Condition",
  "passingValue": true,
  "condition": "isSubcategory",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FAQCategory",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "categoryId",
          "type": "ID!"
        }
      ],
      "concreteType": "FAQCategory",
      "plural": false,
      "selections": [
        v2,
        v3,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "ancestors",
          "storageKey": null,
          "args": null,
          "concreteType": "FAQCategory",
          "plural": true,
          "selections": [
            v3,
            v2
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ArticleDetailQuery",
  "id": null,
  "text": "query ArticleDetailQuery(\n  $id: ID!\n  $categoryId: ID!\n  $isSubcategory: Boolean!\n) {\n  FAQArticle(id: $id) {\n    title\n    ...ArticleContent_article\n    id\n  }\n  FAQCategory(id: $categoryId) @include(if: $isSubcategory) {\n    title\n    id\n    ancestors {\n      id\n      title\n    }\n  }\n}\n\nfragment ArticleContent_article on FAQArticle {\n  id\n  title\n  perex\n  content\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArticleDetailQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "FAQArticle",
        "storageKey": null,
        "args": v1,
        "concreteType": "FAQArticle",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "FragmentSpread",
            "name": "ArticleContent_article",
            "args": null
          }
        ]
      },
      v4
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticleDetailQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "FAQArticle",
        "storageKey": null,
        "args": v1,
        "concreteType": "FAQArticle",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "content",
            "args": null,
            "storageKey": null
          }
        ]
      },
      v4
    ]
  }
};
})();
(node/*: any*/).hash = '65b4847f742f5438129863eb7001d18c';
module.exports = node;
