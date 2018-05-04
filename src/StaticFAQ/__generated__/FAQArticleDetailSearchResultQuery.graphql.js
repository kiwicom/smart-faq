/**
 * @flow
 * @relayHash 0482968e2d55e0951bede84dce22c5dc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FAQArticleDetailContent_article$ref = any;
export type Language = ('ar' | 'bg' | 'ca' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'engb' | 'enus' | 'es' | 'esar' | 'et' | 'fi' | 'fr' | 'he' | 'hr' | 'hu' | 'id' | 'is' | 'it' | 'ja' | 'ko' | 'lt' | 'lv' | 'ms' | 'nl' | 'no' | 'pl' | 'pt' | 'ptbr' | 'ptpt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'th' | 'tl' | 'tr' | 'uk' | 'vi' | 'zh' | 'zhcn' | 'zhtw' | '%future added value');
export type FAQArticleDetailSearchResultQueryVariables = {|
  id: string,
  language?: ?Language,
|};
export type FAQArticleDetailSearchResultQueryResponse = {|
  +FAQArticle: ?{|
    +title: ?string,
    +$fragmentRefs: FAQArticleDetailContent_article$ref,
  |},
|};
*/


/*
query FAQArticleDetailSearchResultQuery(
  $id: ID!
  $language: Language
) {
  FAQArticle(id: $id, language: $language) {
    title
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
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FAQArticleDetailSearchResultQuery",
  "id": null,
  "text": "query FAQArticleDetailSearchResultQuery(\n  $id: ID!\n  $language: Language\n) {\n  FAQArticle(id: $id, language: $language) {\n    title\n    ...FAQArticleDetailContent_article\n    id\n  }\n}\n\nfragment FAQArticleDetailContent_article on FAQArticle {\n  title\n  perex\n  content\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FAQArticleDetailSearchResultQuery",
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FAQArticleDetailSearchResultQuery",
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
(node/*: any*/).hash = 'f9149f0126b06b227425ba630493e8cc';
module.exports = node;
