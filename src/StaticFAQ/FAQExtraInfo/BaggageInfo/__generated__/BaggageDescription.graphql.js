/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BaggageDescription$ref: FragmentReference;
export type BaggageDescription = {|
  +height: ?number,
  +weight: ?number,
  +width: ?number,
  +length: ?number,
  +$refType: BaggageDescription$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BaggageDescription",
  "type": "Baggage",
  "metadata": null,
  "argumentDefinitions": [],
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
  ]
};
(node/*: any*/).hash = 'd81aa3bec651858499d72333623e2d97';
module.exports = node;
