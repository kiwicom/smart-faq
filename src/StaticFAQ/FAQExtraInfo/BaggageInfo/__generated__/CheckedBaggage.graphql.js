/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type CheckedBaggage$ref: FragmentReference;
export type CheckedBaggage = {|
  +checked: ?$ReadOnlyArray<?{|
    +height: ?number,
    +length: ?number,
    +width: ?number,
    +weight: ?number,
  |}>,
  +$refType: CheckedBaggage$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CheckedBaggage",
  "type": "AllowedBaggage",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "checked",
      "storageKey": null,
      "args": null,
      "concreteType": "Baggage",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "height",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "length",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "width",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "weight",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '7f076e0cab96b7ba5bede45213ad12f7';
module.exports = node;
