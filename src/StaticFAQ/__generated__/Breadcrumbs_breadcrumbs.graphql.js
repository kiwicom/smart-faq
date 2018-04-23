/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Breadcrumbs_breadcrumbs$ref: FragmentReference;
export type Breadcrumbs_breadcrumbs = $ReadOnlyArray<{|
  +id: string,
  +title: ?string,
  +$refType: Breadcrumbs_breadcrumbs$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Breadcrumbs_breadcrumbs",
  "type": "FAQCategory",
  "metadata": {
    "plural": true
  },
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
(node/*: any*/).hash = '002b9577523fc1bb128c6989248bf236';
module.exports = node;
