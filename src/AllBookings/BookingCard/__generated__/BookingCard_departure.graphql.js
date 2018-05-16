/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type DateAndPassenger_departure$ref = any;
type FromToRow_departure$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BookingCard_departure$ref: FragmentReference;
export type BookingCard_departure = {|
  +$fragmentRefs: (FromToRow_departure$ref & DateAndPassenger_departure$ref),
  +$refType: BookingCard_departure$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BookingCard_departure",
  "type": "RouteStop",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "FromToRow_departure",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "DateAndPassenger_departure",
      "args": null
    }
  ]
};
(node/*: any*/).hash = 'a60ea1b0297cb6607b761254ef17d186';
module.exports = node;
