/**
 * @flow
 * @relayHash 2df52c7b4cff383545f6b04ecaaadce5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ArticleContent_article$ref = any;
export type ArticleDetailSearchResultQueryVariables = {|
  id: string,
|};
export type ArticleDetailSearchResultQueryResponse = {|
  +FAQArticle: ?{|
    +title: ?string,
    +$fragmentRefs: ArticleContent_article$ref,
  |},
|};
*/


/*
query ArticleDetailSearchResultQuery(
  $id: ID!
) {
  FAQArticle(id: $id) {
    title
    ...ArticleContent_article
    id
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ArticleDetailSearchResultQuery",
  "id": null,
  "text": "query ArticleDetailSearchResultQuery(\n  $id: ID!\n) {\n  FAQArticle(id: $id) {\n    title\n    ...ArticleContent_article\n    id\n  }\n}\n\nfragment ArticleContent_article on FAQArticle {\n  id\n  title\n  perex\n  content\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArticleDetailSearchResultQuery",
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticleDetailSearchResultQuery",
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
            "name": "id",
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
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '27fe3526e1f34bbeec766c9c1820093d';
module.exports = node;
