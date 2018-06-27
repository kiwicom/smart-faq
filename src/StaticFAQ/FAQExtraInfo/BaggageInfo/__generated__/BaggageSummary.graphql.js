/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BaggageSummary$ref: FragmentReference;
export type BaggageSummary = {|
  +checked: ?$ReadOnlyArray<?{|
    +height: ?number,
    +weight: ?number,
    +width: ?number,
    +length: ?number,
  |}>,
  +cabin: ?$ReadOnlyArray<?{|
    +height: ?number,
    +weight: ?number,
    +width: ?number,
    +length: ?number,
  |}>,
  +$refType: BaggageSummary$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
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
    "name": "weight",
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
    "name": "length",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "BaggageSummary",
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
      "selections": v0
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "cabin",
      "storageKey": null,
      "args": null,
      "concreteType": "Baggage",
      "plural": true,
      "selections": v0
    }
  ]
};
})();
(node/*: any*/).hash = '60078cad3d7bbf906556013c0677ba58';
module.exports = node;
