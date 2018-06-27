/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BaggageDescription$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BaggageSummary$ref: FragmentReference;
export type BaggageSummary = {|
  +checked: ?$ReadOnlyArray<?{|
    +$fragmentRefs: BaggageDescription$ref,
  |}>,
  +cabin: ?$ReadOnlyArray<?{|
    +$fragmentRefs: BaggageDescription$ref,
  |}>,
  +$refType: BaggageSummary$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "BaggageDescription",
    "args": null
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
(node/*: any*/).hash = '94d1b33aa28d6840eff0a99736a76a33';
module.exports = node;
