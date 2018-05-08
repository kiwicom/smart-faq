/**
 * @flow
 * @relayHash 55774bdc16923b3cb5878b0ca1e25503
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FAQCommentType = ('CONFUSING' | 'DOESNT_ANSWER' | 'DONT_LIKE' | 'NOT_ACCURATE' | 'OTHER' | '%future added value');
export type CreateCommentMutationVariables = {|
  articleId: string,
  type: FAQCommentType,
  comment: string,
|};
export type CreateCommentMutationResponse = {|
  +addFAQArticleComment: ?{|
    +id: string,
  |},
|};
*/


/*
mutation CreateCommentMutation(
  $articleId: ID!
  $type: FAQCommentType!
  $comment: String!
) {
  addFAQArticleComment(id: $articleId, type: $type, comment: $comment) {
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
    "name": "type",
    "type": "FAQCommentType!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "comment",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addFAQArticleComment",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "comment",
        "variableName": "comment",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "articleId",
        "type": "ID!"
      },
      {
        "kind": "Variable",
        "name": "type",
        "variableName": "type",
        "type": "FAQCommentType!"
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
  "name": "CreateCommentMutation",
  "id": null,
  "text": "mutation CreateCommentMutation(\n  $articleId: ID!\n  $type: FAQCommentType!\n  $comment: String!\n) {\n  addFAQArticleComment(id: $articleId, type: $type, comment: $comment) {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateCommentMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCommentMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = 'd05a63fac00e17aa31de6f03373c0c24';
module.exports = node;
