/**
 * @flow
 * @relayHash 7e429d493027b4f94f2a179964a2bde9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FAQArticleDetailContent_article$ref = any;
export type FAQArticleDetailQueryVariables = {|
  id: string,
  category_id: string,
|};
export type FAQArticleDetailQueryResponse = {|
  +FAQArticle: ?{|
    +title: ?string,
    +$fragmentRefs: FAQArticleDetailContent_article$ref,
  |},
  +FAQCategory: ?{|
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
query FAQArticleDetailQuery(
  $id: ID!
  $category_id: ID!
) {
  FAQArticle(id: $id) {
    title
    ...FAQArticleDetailContent_article
    id
  }
  FAQCategory(id: $category_id) {
    title
    id
    ancestors {
      id
      title
    }
  }
}

fragment FAQArticleDetailContent_article on FAQArticle {
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
    "name": "category_id",
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
  "kind": "LinkedField",
  "alias": null,
  "name": "FAQCategory",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "id",
      "variableName": "category_id",
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FAQArticleDetailQuery",
  "id": null,
  "text": "query FAQArticleDetailQuery(\n  $id: ID!\n  $category_id: ID!\n) {\n  FAQArticle(id: $id) {\n    title\n    ...FAQArticleDetailContent_article\n    id\n  }\n  FAQCategory(id: $category_id) {\n    title\n    id\n    ancestors {\n      id\n      title\n    }\n  }\n}\n\nfragment FAQArticleDetailContent_article on FAQArticle {\n  title\n  perex\n  content\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FAQArticleDetailQuery",
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
            "name": "FAQArticleDetailContent_article",
            "args": null
          }
        ]
      },
      v4
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FAQArticleDetailQuery",
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
          },
          v3
        ]
      },
      v4
    ]
  }
};
})();
(node/*: any*/).hash = 'e4275c0309c118b5291e7a3ff9853c06';
module.exports = node;
