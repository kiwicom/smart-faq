/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Multicity_bookingHeader$ref = any;
type OneWay_bookingHeader$ref = any;
type Return_bookingHeader$ref = any;
export type BookingStatus = ('CANCELLED' | 'CLOSED' | 'CONFIRMED' | 'DELETED' | 'EXPIRED' | 'NEW' | 'PENDING' | 'REFUNDED' | '%future added value');
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Header_booking$ref: FragmentReference;
export type Header_booking = {|
  +type: ?BookingType,
  +status: ?BookingStatus,
  +databaseId: ?number,
  +$fragmentRefs: (OneWay_bookingHeader$ref & Return_bookingHeader$ref & Multicity_bookingHeader$ref),
  +$refType: Header_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Header_booking",
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
      "kind": "FragmentSpread",
      "name": "OneWay_bookingHeader",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Return_bookingHeader",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Multicity_bookingHeader",
      "args": null
    }
  ]
};
(node/*: any*/).hash = 'be2ddc069ceb9eb5ad129bbaaecef40b';
module.exports = node;
