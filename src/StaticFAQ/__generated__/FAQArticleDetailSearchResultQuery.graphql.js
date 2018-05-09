/**
 * @flow
 * @relayHash 317bf318a02ceea4025f155d4106200e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FAQArticleDetailContent_article$ref = any;
export type FAQArticleDetailSearchResultQueryVariables = {|
  id: string,
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
) {
  FAQArticle(id: $id) {
    title
    ...FAQArticleDetailContent_article
    id
  }
}

fragment FAQArticleDetailContent_article on FAQArticle {
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
  "name": "FAQArticleDetailSearchResultQuery",
  "id": null,
  "text": "query FAQArticleDetailSearchResultQuery(\n  $id: ID!\n) {\n  FAQArticle(id: $id) {\n    title\n    ...FAQArticleDetailContent_article\n    id\n  }\n}\n\nfragment FAQArticleDetailContent_article on FAQArticle {\n  id\n  title\n  perex\n  content\n}\n",
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
(node/*: any*/).hash = 'ce0ab3e092e49671f7d877806de6893a';
module.exports = node;
