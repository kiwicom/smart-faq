/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Contact_info$ref: FragmentReference;
export type Contact_info = {|
  +contactDetails: ?{|
    +phone: ?string,
    +email: ?string,
  |},
  +$refType: Contact_info$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Contact_info",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "contactDetails",
      "storageKey": null,
      "args": null,
      "concreteType": "BookingContactDetails",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "phone",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "email",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '9d9aef7dbe2ee56a273207f91368ea40';
module.exports = node;
