/**
 * @flow
 * @relayHash bd778d6d7b7c19b40a77e7c48add0cbd
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
          +content: ?string,
          +upvotes: ?number,
          +downvotes: ?number,
          +categories: ?$ReadOnlyArray<?{|
            +name: ?string,
            +items: ?$ReadOnlyArray<?{|
              +title: ?string,
              +icon: ?string,
              +style: ?string,
            |}>,
          |}>,
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
          content
          upvotes
          downvotes
          categories {
            name
            items {
              title
              icon
              style
            }
          }
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v2 = [
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
                  v1,
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
                    "name": "upvotes",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "downvotes",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "categories",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Categories",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "items",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Items",
                        "plural": true,
                        "selections": [
                          v1,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "icon",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "style",
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
  "text": "query SearchAllFAQsQuery(\n  $search: String\n  $language: Language\n) {\n  allFAQs(search: $search, language: $language) {\n    edges {\n      node {\n        results {\n          title\n          content\n          upvotes\n          downvotes\n          categories {\n            name\n            items {\n              title\n              icon\n              style\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SearchAllFAQsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchAllFAQsQuery",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
(node/*: any*/).hash = '453a04c28d9275ba27325bb797d6465a';
module.exports = node;
