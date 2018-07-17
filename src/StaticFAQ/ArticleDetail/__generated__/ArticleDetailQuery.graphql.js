/**
 * @flow
 * @relayHash cf85d5f4f0d9e7711179f47b3ec14e2a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ArticleContent_article$ref = any;
export type FAQSection = ('BEFORE_BOOKING' | 'PAST_BOOKING' | 'UPCOMING_BOOKING' | 'URGENT_BOOKING' | '%future added value');
export type ArticleDetailQueryVariables = {|
  id: string,
  category_id: string,
  section: FAQSection,
|};
export type ArticleDetailQueryResponse = {|
  +FAQArticle: ?{|
    +title: ?string,
    +$fragmentRefs: ArticleContent_article$ref,
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
query ArticleDetailQuery(
  $id: ID!
  $category_id: ID!
  $section: FAQSection!
) {
  FAQArticle(id: $id) {
    title
    ...ArticleContent_article
    id
  }
  FAQCategory(id: $category_id, section: $section) {
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
    "name": "category_id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "section",
    "type": "FAQSection!",
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
    },
    {
      "kind": "Variable",
      "name": "section",
      "variableName": "section",
      "type": "FAQSection"
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
  "name": "ArticleDetailQuery",
  "id": null,
  "text": "query ArticleDetailQuery(\n  $id: ID!\n  $category_id: ID!\n  $section: FAQSection!\n) {\n  FAQArticle(id: $id) {\n    title\n    ...ArticleContent_article\n    id\n  }\n  FAQCategory(id: $category_id, section: $section) {\n    title\n    id\n    ancestors {\n      id\n      title\n    }\n  }\n}\n\nfragment ArticleContent_article on FAQArticle {\n  id\n  title\n  perex\n  content\n}\n",
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
(node/*: any*/).hash = 'f4320ee608acf164cae8fd611c87dba8';
module.exports = node;
