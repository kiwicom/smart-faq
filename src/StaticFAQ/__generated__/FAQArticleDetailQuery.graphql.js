/**
 * @flow
 * @relayHash 7a12e7174bd6e7c933345292510c4975
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FAQArticleDetailContent_article$ref = any;
export type Language = ('ar' | 'bg' | 'ca' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'engb' | 'enus' | 'es' | 'esar' | 'et' | 'fi' | 'fr' | 'he' | 'hr' | 'hu' | 'id' | 'is' | 'it' | 'ja' | 'ko' | 'lt' | 'lv' | 'ms' | 'nl' | 'no' | 'pl' | 'pt' | 'ptbr' | 'ptpt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'th' | 'tl' | 'tr' | 'uk' | 'vi' | 'zh' | 'zhcn' | 'zhtw' | '%future added value');
export type FAQArticleDetailQueryVariables = {|
  id: string,
  language?: ?Language,
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
  $language: Language
  $category_id: ID!
) {
  FAQArticle(id: $id, language: $language) {
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
    "name": "language",
    "type": "Language",
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
  },
  {
    "kind": "Variable",
    "name": "language",
    "variableName": "language",
    "type": "Language"
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
  "text": "query FAQArticleDetailQuery(\n  $id: ID!\n  $language: Language\n  $category_id: ID!\n) {\n  FAQArticle(id: $id, language: $language) {\n    title\n    ...FAQArticleDetailContent_article\n    id\n  }\n  FAQCategory(id: $category_id) {\n    title\n    id\n    ancestors {\n      id\n      title\n    }\n  }\n}\n\nfragment FAQArticleDetailContent_article on FAQArticle {\n  title\n  perex\n  content\n}\n",
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
(node/*: any*/).hash = 'b601c9a8efb9f8862253ab803de086d6';
module.exports = node;
