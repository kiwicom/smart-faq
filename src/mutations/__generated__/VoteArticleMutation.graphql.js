/**
 * @flow
 * @relayHash edec187aa0c173ab56c03f98fc1d431e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type VoteType = ('down' | 'up' | '%future added value');
export type VoteArticleMutationVariables = {|
  articleId: string,
  vote: VoteType,
|};
export type VoteArticleMutationResponse = {|
  +voteFAQArticle: ?{|
    +id: string,
  |},
|};
*/


/*
mutation VoteArticleMutation(
  $articleId: ID!
  $vote: VoteType!
) {
  voteFAQArticle(id: $articleId, vote: $vote) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "articleId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "vote",
    "type": "VoteType!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "voteFAQArticle",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "articleId",
        "type": "ID!"
      },
      {
        "kind": "Variable",
        "name": "vote",
        "variableName": "vote",
        "type": "VoteType"
      }
    ],
    "concreteType": "FAQArticle",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "VoteArticleMutation",
  "id": null,
  "text": "mutation VoteArticleMutation(\n  $articleId: ID!\n  $vote: VoteType!\n) {\n  voteFAQArticle(id: $articleId, vote: $vote) {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "VoteArticleMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "VoteArticleMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '73cb244ed214cdbea9e249be3b28ece8';
module.exports = node;
