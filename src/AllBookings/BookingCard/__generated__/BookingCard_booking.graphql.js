/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type BookingStatus = ('CANCELLED' | 'CLOSED' | 'CONFIRMED' | 'DELETED' | 'EXPIRED' | 'NEW' | 'PENDING' | 'REFUNDED' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BookingCard_booking$ref: FragmentReference;
export type BookingCard_booking = {|
  +status: ?BookingStatus,
  +databaseId: ?number,
  +passengerCount: ?number,
  +bookingDate: ?any,
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
      "name": "status",
      "args": null,
      "storageKey": null
    },
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
      "kind": "ScalarField",
      "alias": null,
      "name": "bookingDate",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = '07c25335c7467fe1d654379f910354b6';
module.exports = node;
