/**
 * @flow
 * @relayHash 945830879145878ee3a676444f60cec2
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
|};
export type FAQArticleDetailQueryResponse = {|
  +FAQArticle: ?{|
    +$fragmentRefs: FAQArticleDetailContent_article$ref,
  |},
|};
*/


/*
query FAQArticleDetailQuery(
  $id: ID!
  $language: Language
) {
  FAQArticle(id: $id, language: $language) {
    ...FAQArticleDetailContent_article
    id
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FAQArticleDetailQuery",
  "id": null,
  "text": "query FAQArticleDetailQuery(\n  $id: ID!\n  $language: Language\n) {\n  FAQArticle(id: $id, language: $language) {\n    ...FAQArticleDetailContent_article\n    id\n  }\n}\n\nfragment FAQArticleDetailContent_article on FAQArticle {\n  title\n  perex\n  content\n}\n",
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
          {
            "kind": "FragmentSpread",
            "name": "FAQArticleDetailContent_article",
            "args": null
          }
        ]
      }
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
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
(node/*: any*/).hash = 'd2278a203cf1f33cdb0e705a4e0e47f2';
module.exports = node;
