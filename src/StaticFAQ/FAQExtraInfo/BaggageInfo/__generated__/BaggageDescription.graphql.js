/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type BaggageCategory = ('CABIN_BAG' | 'CHECKED' | 'PERSONAL_ITEM' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BaggageDescription$ref: FragmentReference;
export type BaggageDescription = {|
  +bag: ?{|
    +height: ?number,
    +weight: ?number,
    +width: ?number,
    +length: ?number,
    +note: ?string,
    +category: ?BaggageCategory,
  |},
  +quantity: ?number,
  +$refType: BaggageDescription$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BaggageDescription",
  "type": "BookingBaggage",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "bag",
      "storageKey": null,
      "args": null,
      "concreteType": "Baggage",
      "plural": false,
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
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "note",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "category",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "quantity",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = 'c827c87035440924d31a56e0d83bcdc6';
module.exports = node;
