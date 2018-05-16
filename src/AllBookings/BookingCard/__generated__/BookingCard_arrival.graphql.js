/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FromToRow_arrival$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BookingCard_arrival$ref: FragmentReference;
export type BookingCard_arrival = {|
  +$fragmentRefs: FromToRow_arrival$ref,
  +$refType: BookingCard_arrival$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BookingCard_arrival",
  "type": "RouteStop",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "FromToRow_arrival",
      "args": null
    }
  ]
};
(node/*: any*/).hash = 'df11510821be99f1c3974716557c0892';
module.exports = node;
