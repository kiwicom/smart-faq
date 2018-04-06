/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type FAQCategory_category$ref: FragmentReference;
export type FAQCategory_category = {|
  +id: string,
  +title: ?string,
  +$refType: FAQCategory_category$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FAQCategory_category",
  "type": "FAQCategory",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "name": "title",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = 'a1a0bd0176262bba61ea56e8d80df92f';
module.exports = node;
