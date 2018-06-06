/**
 * @flow
 * @relayHash f4979d3a8a26e59ccb91462fb02f1089
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ResetPasswordMutationVariables = {|
  email: string,
|};
export type ResetPasswordMutationResponse = {|
  +resetPassword: ?{|
    +success: ?boolean,
  |},
|};
*/


/*
mutation ResetPasswordMutation(
  $email: String!
) {
  resetPassword(email: $email) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "resetPassword",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email",
        "type": "String!"
      }
    ],
    "concreteType": "ResetPasswordResponse",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "ResetPasswordMutation",
  "id": null,
  "text": "mutation ResetPasswordMutation(\n  $email: String!\n) {\n  resetPassword(email: $email) {\n    success\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ResetPasswordMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ResetPasswordMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = 'e642d8d309d061229af4250ac19a2d91';
module.exports = node;
