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
  +perex: ?string,
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "perex",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = 'e39a5b7fbed4e1e8890047248d8a4555';
module.exports = node;
