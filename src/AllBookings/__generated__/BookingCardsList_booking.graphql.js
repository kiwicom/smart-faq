/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type MulticityBooking_booking$ref = any;
type OneWayBooking_booking$ref = any;
type ReturnBooking_booking$ref = any;
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BookingCardsList_booking$ref: FragmentReference;
export type BookingCardsList_booking = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +type: ?BookingType,
      +oneWay: ?{|
        +$fragmentRefs: OneWayBooking_booking$ref,
      |},
      +return: ?{|
        +$fragmentRefs: ReturnBooking_booking$ref,
      |},
      +multicity: ?{|
        +$fragmentRefs: MulticityBooking_booking$ref,
      |},
    |},
  |}>,
  +$refType: BookingCardsList_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BookingCardsList_booking",
  "type": "BookingConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "BookingEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Booking",
          "plural": false,
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
              "name": "type",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "oneWay",
              "storageKey": null,
              "args": null,
              "concreteType": "BookingOneWay",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "OneWayBooking_booking",
                  "args": null
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "return",
              "storageKey": null,
              "args": null,
              "concreteType": "BookingReturn",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "ReturnBooking_booking",
                  "args": null
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "multicity",
              "storageKey": null,
              "args": null,
              "concreteType": "BookingMulticity",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "MulticityBooking_booking",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '3c73d343c3942b02adc6e42732e48d79';
module.exports = node;
