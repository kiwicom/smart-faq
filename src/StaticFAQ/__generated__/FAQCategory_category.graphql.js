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
  +id: ?number,
  +title: ?string,
  +$refType: FAQCategory_category$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FAQCategory_category",
  "type": "AllFAQCategories",
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
(node/*: any*/).hash = '20e5ff8fc66e4a602411e7737f72d5ff';
module.exports = node;
