/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Header_booking$ref = any;
type Multicity_booking$ref = any;
type OneWay_booking$ref = any;
type Return_booking$ref = any;
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BookingDetail_booking$ref: FragmentReference;
export type BookingDetail_booking = {|
  +type: ?BookingType,
  +directAccessURL: ?string,
  +trip?: ?{|
    +departure: ?{|
      +time: ?any,
    |},
  |},
  +outbound?: ?{|
    +departure: ?{|
      +time: ?any,
    |},
  |},
  +start?: ?{|
    +time: ?any,
  |},
  +$fragmentRefs: (Header_booking$ref & OneWay_booking$ref & Return_booking$ref & Multicity_booking$ref),
  +$refType: BookingDetail_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v0
  }
];
return {
  "kind": "Fragment",
  "name": "BookingDetail_booking",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "directAccessURL",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Header_booking",
      "args": null
    },
    {
      "kind": "InlineFragment",
      "type": "BookingMulticity",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Multicity_booking",
          "args": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "start",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": v0
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "BookingReturn",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Return_booking",
          "args": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "outbound",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": v1
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "BookingOneWay",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "OneWay_booking",
          "args": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "trip",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": v1
        }
      ]
    }
  ]
};
})();
(node/*: any*/).hash = '8412895e723866279489f76cc226e4d4';
module.exports = node;
