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
export type BaggageSummary = $ReadOnlyArray<{|
  +$fragmentRefs: BaggageDescription$ref,
  +$refType: BaggageSummary$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BaggageSummary",
  "type": "BookingBaggage",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "BaggageDescription",
      "args": null
    }
  ]
};
(node/*: any*/).hash = 'ea1be2aa437c54d77a7f1d0d73686f52';
module.exports = node;
