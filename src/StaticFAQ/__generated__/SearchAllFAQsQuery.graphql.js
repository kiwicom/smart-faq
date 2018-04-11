/**
 * @flow
 * @relayHash 168c3915a28241bf668cecfa4c761427
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FAQArticle_article$ref = any;
export type Language = ('ar' | 'bg' | 'ca' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'engb' | 'enus' | 'es' | 'esar' | 'et' | 'fi' | 'fr' | 'he' | 'hr' | 'hu' | 'id' | 'is' | 'it' | 'ja' | 'ko' | 'lt' | 'lv' | 'ms' | 'nl' | 'no' | 'pl' | 'pt' | 'ptbr' | 'ptpt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'th' | 'tl' | 'tr' | 'uk' | 'vi' | 'zh' | 'zhcn' | 'zhtw' | '%future added value');
export type SearchAllFAQsQueryVariables = {|
  search?: ?string,
  language?: ?Language,
|};
export type SearchAllFAQsQueryResponse = {|
  +allFAQs: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: FAQArticle_article$ref,
      |},
    |}>,
  |},
|};
*/


/*
query SearchAllFAQsQuery(
  $search: String
  $language: Language
) {
  allFAQs(search: $search, language: $language) {
    edges {
      node {
        id
        ...FAQArticle_article
      }
    }
  }
}

fragment FAQArticle_article on FAQArticle {
  id
  title
  perex
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "search",
    "type": "String",
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
    "name": "language",
    "variableName": "language",
    "type": "Language"
  },
  {
    "kind": "Variable",
    "name": "search",
    "variableName": "search",
    "type": "String"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SearchAllFAQsQuery",
  "id": null,
  "text": "query SearchAllFAQsQuery(\n  $search: String\n  $language: Language\n) {\n  allFAQs(search: $search, language: $language) {\n    edges {\n      node {\n        id\n        ...FAQArticle_article\n      }\n    }\n  }\n}\n\nfragment FAQArticle_article on FAQArticle {\n  id\n  title\n  perex\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SearchAllFAQsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFAQs",
        "storageKey": null,
        "args": v1,
        "concreteType": "FAQArticleConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQArticleEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "FAQArticle",
                "plural": false,
                "selections": [
                  v2,
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchAllFAQsQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFAQs",
        "storageKey": null,
        "args": v1,
        "concreteType": "FAQArticleConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQArticleEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "FAQArticle",
                "plural": false,
                "selections": [
                  v2,
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
(node/*: any*/).hash = '4a1c6640b98f4e0d1a280b85be991d31';
module.exports = node;
