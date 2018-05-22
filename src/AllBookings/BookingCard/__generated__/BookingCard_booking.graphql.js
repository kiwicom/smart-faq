/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type DateAndPassenger_booking$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BookingCard_booking$ref: FragmentReference;
export type BookingCard_booking = {|
  +databaseId: ?number,
  +$fragmentRefs: DateAndPassenger_booking$ref,
  +$refType: BookingCard_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BookingCard_booking",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "databaseId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "passengerCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "carriers",
      "storageKey": null,
      "args": null,
      "concreteType": "Carrier",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "code",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = 'b3693a7f42178744bc5970a1783bc077';
module.exports = node;
