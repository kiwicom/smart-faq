/**
 * @flow
 * @relayHash 4217d4203bed3d10e3775530f8a7c29c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Language = ('ar' | 'bg' | 'ca' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'engb' | 'enus' | 'es' | 'esar' | 'et' | 'fi' | 'fr' | 'he' | 'hr' | 'hu' | 'id' | 'is' | 'it' | 'ja' | 'ko' | 'lt' | 'lv' | 'ms' | 'nl' | 'no' | 'pl' | 'pt' | 'ptbr' | 'ptpt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'th' | 'tl' | 'tr' | 'uk' | 'vi' | 'zh' | 'zhcn' | 'zhtw' | '%future added value');
export type SearchAllFAQsQueryVariables = {|
  search?: ?string,
  language?: ?Language,
|};
export type SearchAllFAQsQueryResponse = {|
  +allFAQs: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +results: ?{|
          +title: ?string,
          +articleId: string,
        |},
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
        results {
          title
          articleId
        }
      }
    }
  }
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
    "kind": "LinkedField",
    "alias": null,
    "name": "allFAQs",
    "storageKey": null,
    "args": [
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
    "concreteType": "AllFAQsConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "AllFAQsEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "AllFAQs",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "results",
                "storageKey": null,
                "args": null,
                "concreteType": "Results",
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
                    "name": "articleId",
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SearchAllFAQsQuery",
  "id": null,
  "text": "query SearchAllFAQsQuery(\n  $search: String\n  $language: Language\n) {\n  allFAQs(search: $search, language: $language) {\n    edges {\n      node {\n        results {\n          title\n          articleId\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SearchAllFAQsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchAllFAQsQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = 'af46a24c35cf7c379a267fd741ba1c98';
module.exports = node;
