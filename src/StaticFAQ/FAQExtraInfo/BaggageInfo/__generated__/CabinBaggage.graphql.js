/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type CabinBaggage$ref: FragmentReference;
export type CabinBaggage = {|
  +cabin: ?$ReadOnlyArray<?{|
    +height: ?number,
    +length: ?number,
    +width: ?number,
    +weight: ?number,
  |}>,
  +$refType: CabinBaggage$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CabinBaggage",
  "type": "AllowedBaggage",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "cabin",
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
(node/*: any*/).hash = '3e6b360344cb8a72fac1213ef635ea5c';
module.exports = node;
