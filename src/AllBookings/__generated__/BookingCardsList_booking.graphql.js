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
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BookingCardsList_booking$ref: FragmentReference;
export type BookingCardsList_booking = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +__typename: string,
      +$fragmentRefs: (OneWayBooking_booking$ref & ReturnBooking_booking$ref & MulticityBooking_booking$ref),
    |},
  |}>,
  +$refType: BookingCardsList_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BookingCardsList_booking",
  "type": "BookingInterfaceConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "BookingInterfaceEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": null,
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
              "name": "__typename",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "InlineFragment",
              "type": "BookingMulticity",
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "MulticityBooking_booking",
                  "args": null
                }
              ]
            },
            {
              "kind": "InlineFragment",
              "type": "BookingReturn",
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "ReturnBooking_booking",
                  "args": null
                }
              ]
            },
            {
              "kind": "InlineFragment",
              "type": "BookingOneWay",
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "OneWayBooking_booking",
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
(node/*: any*/).hash = '964110ee2cb7fc37e8da7f2daa57762f';
module.exports = node;
